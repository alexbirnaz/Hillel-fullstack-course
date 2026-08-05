# Express + MongoDB in Docker

Express application containerized with Docker and connected to MongoDB using Docker Compose.

## Requirements

- Docker Desktop installed and running

## Run with Docker Compose

docker compose up --build

This starts two containers:

- app — the Express server (port 3000)
- mongo — MongoDB database (port 27017)

Open http://localhost:3000 — you should see the welcome message.

## Stop

docker compose down

## Files

### Dockerfile

- Uses the node:lts base image
- Sets /app as the working directory
- Copies package.json and installs dependencies
- Copies the project files
- Exposes port 3000
- Runs the app with nodemon (npm run dev) for auto-reload

### docker-compose.yml

- app service — built from the Dockerfile, port 3000, connected to mongo
- mongo service — official mongo image, data persisted in a named volume
- MONGODB_URI environment variable points the app to the mongo container: mongodb://mongo:27017/homework_68
- depends_on ensures mongo starts before app
- volumes sync local code into the container for live reload

## Live reload

The volumes in docker-compose.yml sync local files into the container. nodemon watches for changes and restarts the server automatically, so code edits are reflected without rebuilding the container.

## Notes

- MongoDB runs locally in a container (not Atlas); the app connects via the internal Docker network
- node_modules and .env are excluded from the image via .dockerignore
