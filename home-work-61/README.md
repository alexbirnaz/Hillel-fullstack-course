# Express Server with Middleware (MVC)

Extension of the Express MVC server with logging, authentication, and validation middleware.

## Installation

npm install

## Run

node app.js

Server runs on http://localhost:3000

## Middleware

- logger — logs every request (method, url, timestamp) to the console
- basicAuth — checks for the authorization header on /users routes (401 if missing)
- checkArticleAccess — checks access rights on /articles routes (403 if missing)
- validateUserInput — validates that name and email are present in POST/PUT to /users (400 if missing)

## Routes

### Root

- GET / — "Get root route" (logged)

### Users (require authorization header)

- GET /users — "Get users route"
- POST /users — "Post users route" (validates body)
- GET /users/:userId — "Get user by Id route: {userId}"
- PUT /users/:userId — "Put user by Id route: {userId}" (validates body)
- DELETE /users/:userId — "Delete user by Id route: {userId}"

### Articles (require authorization header)

- GET /articles — "Get articles route"
- POST /articles — "Post articles route"
- GET /articles/:articleId — "Get article by Id route: {articleId}"
- PUT /articles/:articleId — "Put article by Id route: {articleId}"
- DELETE /articles/:articleId — "Delete article by Id route: {articleId}"

## Notes

- Text responses for simple integration and debugging
- MVC architecture with middleware layered per route
- Authorization is a basic placeholder (checks header presence), ready for future expansion
