# Express with PUG and EJS Template Engines

Express server rendering pages with two template engines: PUG for user routes and EJS for article routes.

## Installation

npm install

## Run

node app.js

Server runs on http://localhost:3000

## Template engines

- PUG — used for /users pages (views/users.pug, views/user.pug)
- EJS — used for /articles pages (views/articles.ejs, views/article.ejs)

## Routes

### Root

- GET / — text response "Get root route"

### Users (PUG)

- GET /users — renders a list of users with links to details
- GET /users/:userId — renders details of a single user (404 if not found)
- POST /users — text response "Post users route"
- PUT /users/:userId — text response
- DELETE /users/:userId — text response

### Articles (EJS)

- GET /articles — renders a list of articles with links to details
- GET /articles/:articleId — renders details of a single article (404 if not found)
- POST /articles — text response "Post articles route"
- PUT /articles/:articleId — text response
- DELETE /articles/:articleId — text response

## Notes

- Mock data stored in data.js (imitates a database)
- PUG uses indentation-based syntax; EJS uses HTML with <%= %> tags
- Basic CSS styling included in each template
