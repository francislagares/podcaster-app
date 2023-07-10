# Stage 1: Development environment
FROM node:alpine AS development

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn set version stable
RUN yarn install

COPY . .

RUN yarn install

EXPOSE 5173

CMD ["yarn", "dev"]

# Stage 2: Build production image
FROM node:lts AS builder

ENV VITE_ITUNES_BASE_URL=https://itunes.apple.com
ENV VITE_ITUNES_PODCASTS_URL=/us/rss/toppodcasts/limit=100/genre=1310/json
ENV VITE_ITUNES_PODCAST_LOOKUP_URL=/lookup?id=
ENV VITE_ITUNES_PARAMS_URL=&media=podcast&entity=podcastEpisode&limit=20

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn set version stable
RUN yarn install

COPY . .

RUN yarn install

RUN yarn build

# Stage 3: Serve production image
FROM nginx:latest

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]