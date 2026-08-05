markdown

# Express with MongoDB Atlas

Express server integrated with MongoDB Atlas using Mongoose. Reads articles from a cloud database.

## Installation

npm install

## MongoDB Atlas setup

1. Create a free cluster on MongoDB Atlas
2. Create a database user and allow network access
3. Get the connection string (Connect -> Drivers)
4. Create a .env file in the project root:

MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/homework_65?retryWrites=true&w=majority
PORT=3000

## Seed the database

Run once to populate the articles collection:

node seed.js

## Run

node app.js

Server runs on http://localhost:3000

## New route

- GET /db-articles — fetches all articles from MongoDB Atlas and returns them as JSON

## Structure

- config/db.js — MongoDB connection with Mongoose
- models/Article.js — Article schema and model
- seed.js — one-time script to populate the database

## Notes

- The .env file (with the connection string and password) must NOT be committed to git
- Mongoose auto-creates the "articles" collection from the Article model
