# Express Authentication with Passport

Express server using Passport (local strategy) with session-based authentication.

## Installation

npm install

## Run

node app.js

Server runs on http://localhost:3000

## Authentication (Passport + sessions)

- POST /auth/register — registers a user (email + password), password hashed with bcrypt
- POST /auth/login — logs in via Passport local strategy, creates a session
- POST /auth/logout — destroys the session
- GET /auth/protected — protected route, requires an authenticated session

## How it works

- Passport LocalStrategy authenticates by email and password
- Passwords are hashed with bcryptjs
- express-session stores session state on the server
- Only the session id is stored in the client cookie (connect.sid), httpOnly
- serializeUser stores the user email in the session; deserializeUser restores the full user on each request

## Pages (from previous homework)

- GET /users, /users/:userId — user pages (PUG)
- GET /articles, /articles/:articleId — article pages (EJS)
- GET /theme/set/:theme, /theme/get — theme cookie routes

## Notes

- cookie.secure is set to false for local HTTP development; set to true in production (HTTPS)
- User data is stored in memory (data/users.js) and resets on server restart
- Session secret is hardcoded for this exercise; use an environment variable in production
