# Express: Static Files, Cookies & JWT

Express server demonstrating static file serving, cookie-based settings, and JWT authentication.

## Installation

npm install

## Run

node app.js

Server runs on http://localhost:3000

## Features

### Static files

- favicon.ico served from the public folder via express.static
- <link rel="icon"> added to all PUG and EJS templates

### Cookies (theme)

- GET /theme/set/:theme — saves preferred theme (light or dark) in a cookie
- GET /theme/get — reads the saved theme (defaults to light)

### JWT authentication

- POST /auth/register — registers a user, returns a JWT stored in an httpOnly cookie
- POST /auth/login — logs in, returns a JWT stored in an httpOnly cookie
- GET /auth/profile — protected route, requires a valid JWT (verifyToken middleware)

## Pages (from previous homework)

### Users (PUG)

- GET /users — list of users
- GET /users/:userId — user details

### Articles (EJS)

- GET /articles — list of articles
- GET /articles/:articleId — article details

## Notes

- JWT tokens are stored in httpOnly cookies (not accessible from JS, protects against XSS)
- Theme cookie is a regular cookie (readable by the client)
- SECRET_KEY is hardcoded for this exercise; in production it should be in an environment variable
