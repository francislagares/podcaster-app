ARG NODE=alpine:latest

# Stage 1: Development environment
FROM ${NODE} AS development

RUN apk update && apk add --no-cache libc6-compat nodejs yarn

WORKDIR /app

COPY package.json .

RUN if [ -f "yarn.lock" ]; then COPY yarn.lock ./; fi
RUN yarn set version stable

COPY . .

RUN yarn install --silent

CMD ["yarn", "dev"]

# Stage 2: Build production image
FROM ${NODE} AS builder

RUN apk update && apk add --no-cache nodejs yarn

ENV VITE_ITUNES_BASE_URL=https://itunes.apple.com
ENV VITE_ITUNES_PODCASTS_URL=/us/rss/toppodcasts/limit=100/genre=1310/json
ENV VITE_ITUNES_PODCAST_LOOKUP_URL=/lookup?id=
ENV VITE_ITUNES_PARAMS_URL=&media=podcast&entity=podcastEpisode&limit=20

WORKDIR /app

COPY package.json .

RUN if [ -f "yarn.lock" ]; then COPY yarn.lock ./; fi
RUN yarn set version stable

COPY . .

RUN yarn install --silent

RUN yarn build

# Stage 3: Serve production image
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]