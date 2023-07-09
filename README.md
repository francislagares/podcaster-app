# Podcaster-App


The "Podcaster App" is a web application developed in React that allows users to browse and listen to a wide variety of podcasts available on the iTunes API. The app uses the React Router v6 to manage navigation between different pages and components.

Upon entering the app, users are greeted with a home page where they can search for podcasts by title or author. Search results are displayed in the form of cards, each representing a different podcast. These cards contain information such as the title, author, and a representative image of the podcast.

By clicking on a podcast card, users are redirected to a detailed page of the selected podcast. This page displays additional information about the podcast, such as the description, author, and list of available episodes. Users can also stream the episodes directly from the podcast page.


<p>
  <a href='https://react.dev/learn'>
		<img src='https://img.shields.io/badge/react-61DAFB?logoWidth=30&labelColor=black&style=for-the-badge&logo=react' />
	</a>
  &nbsp;
  <a href='https://www.typescriptlang.org/'>
    <img src="https://img.shields.io/badge/typescript-007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white" />
  </a>
  &nbsp;
  <a href='https://styled-components.com/'>
		<img src='https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white' />
	</a>
  &nbsp;
  <a href='https://reactrouter.com/en/main'>
		<img src='https://img.shields.io/badge/react router-CA4245?logoWidth=30&labelColor=black&style=for-the-badge&logo=reactrouter' />
	</a>
  &nbsp;
  <a href='https://tanstack.com/query/latest/docs/react/overview'>
		<img src='https://img.shields.io/badge/react query-FF4154?logoWidth=30&style=for-the-badge&logo=reactquery&logoColor=white' />
	</a>
  &nbsp;
  <a href='https://www.vitejs.dev/'>
		<img src='https://img.shields.io/badge/vite-646CFF?logoWidth=30&labelColor=black&style=for-the-badge&logo=vite&logoColor=white' />
	</a>
</p>

![Image](https://res.cloudinary.com/chatty-app/image/upload/v1688925678/Screenshot_from_2023-07-09_19-57-15_rdg3mc.png)

![Image](https://res.cloudinary.com/chatty-app/image/upload/v1688925728/Screenshot_from_2023-07-09_19-57-48_bopo3q.png)

![Image](https://res.cloudinary.com/chatty-app/image/upload/v1688925707/Screenshot_from_2023-07-09_19-59-24_x33j57.png)




# How to Run this Project

- Clone the repo

  ```bash
  git clone https://github.com/francislagares/podcaster-app.git
  ```

- Navigate to app directory

  ```bash
  cd podcaster-app
  ```

## Development Environment
- Create and run a container

  ```bash
  docker compose up
  ```
  Open [http://localhost:5173](http://localhost:5173) with your browser to see the
  result.

- Stopping and remove a container

  ```bash
  docker compose down
  ```

## Production Environment

- Build docker image and tag it

  ```bash
  docker build -t podcaster-app .
  ```

- Run the container and serve 
  ```bash
  docker container run --name podcaster-app -p 8080:80 podcaster-app
  ```
- Open [http://localhost:8080](http://localhost:8080) in your browser to see the
  result.

# Author



Created by [@francislagares](https://www.linkedin.com/in/francislagares/) - feel free to contact me!
* 