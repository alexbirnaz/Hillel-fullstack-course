# RESTful API with Express (MVC)

A modular RESTful API built with Node.js and Express, following the MVC pattern (routes + controllers).

## Installation

npm install

## Run

node app.js

Server runs on http://localhost:3000

## Project structure

- app.js — entry point, connects routers
- routes/ — route definitions (usersRoutes.js, articlesRoutes.js)
- controllers/ — request handling logic (usersController.js, articlesController.js)

## Routes

### Root

- GET / — "Get root route"

### Users

- GET /users — "Get users route"
- POST /users — "Post users route"
- GET /users/:userId — "Get user by Id route: {userId}"
- PUT /users/:userId — "Put user by Id route: {userId}"
- DELETE /users/:userId — "Delete user by Id route: {userId}"

### Articles

- GET /articles — "Get articles route"
- POST /articles — "Post articles route"
- GET /articles/:articleId — "Get article by Id route: {articleId}"
- PUT /articles/:articleId — "Put article by Id route: {articleId}"
- DELETE /articles/:articleId — "Delete article by Id route: {articleId}"

## Notes

- Text responses for simple integration and debugging
- MVC architecture: controllers hold request-handling logic, routers map paths to controllers
