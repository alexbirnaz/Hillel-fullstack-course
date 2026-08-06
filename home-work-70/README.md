# Mongoose Refactoring — Schemas, Validation & Indexes

Express + MongoDB Atlas project refactored to use Mongoose models with validation and indexing.

## Installation

npm install

## Setup

Create a .env file:

MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/homework_65?retryWrites=true&w=majority
PORT=3000

## Seed the database

node seed.js

## Run

node app.js

## Models

### Article (models/Article.js)

| Field                 | Type    | Validation / Index                                                |
| --------------------- | ------- | ----------------------------------------------------------------- |
| title                 | String  | required, trim, minlength 3, maxlength 100                        |
| content               | String  | required, trim, minlength 5                                       |
| category              | String  | enum (tech, lifestyle, travel, general), default general, indexed |
| views                 | Number  | default 0, min 0                                                  |
| updated               | Boolean | default false                                                     |
| createdAt / updatedAt | Date    | added automatically via timestamps                                |

### User (models/User.js)

| Field                 | Type   | Validation / Index                                              |
| --------------------- | ------ | --------------------------------------------------------------- |
| email                 | String | required, unique (indexed), trim, lowercase, regex format check |
| password              | String | required, minlength 4                                           |
| createdAt / updatedAt | Date   | added automatically via timestamps                              |

## Validation behavior

- Invalid data is rejected before saving. Mongoose throws a ValidationError.
- The createArticle controller returns 400 Bad Request with the validation message
  (e.g. "Title must be at least 3 characters") instead of a generic 500.

## Routes (unchanged, now backed by validated models)

- GET /api/articles — read with projection
- GET /api/articles/cursor — cursor iteration
- GET /api/articles/stats — aggregation by category
- POST /api/articles — create one (validated)
- POST /api/articles/many — create many
- PUT /api/articles/:id — update one
- PUT /api/articles/many — update many
- PATCH /api/articles/:id — replace one
- DELETE /api/articles/:id — delete one
- DELETE /api/articles/many — delete many

## Notes

- The project already used Mongoose; this refactor strengthens the schemas with
  validation rules and indexes, and adds a second model (User).
- .env with the connection string must NOT be committed to git.
