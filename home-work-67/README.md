markdown

# Express with MongoDB Atlas — Full CRUD

Extension of the MongoDB Atlas project with full CRUD operations on articles using Mongoose.

## Installation

npm install

## Setup

Create a .env file in the project root:

MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/homework_65?retryWrites=true&w=majority
PORT=3000

## Seed the database

node seed.js

## Run

node app.js

## CRUD routes (base: /api/articles)

### Read (with projection)

- GET /api/articles — returns all articles with title and content only (\_id hidden)

Example:

curl http://localhost:3000/api/articles

### Create one (insertOne)

- POST /api/articles — creates one article

Example:

curl -X POST -H "Content-Type: application/json" -d '{"title":"New","content":"Text"}' http://localhost:3000/api/articles

Response: 201 with the created document

### Create many (insertMany)

- POST /api/articles/many — creates multiple articles

Example:

curl -X POST -H "Content-Type: application/json" -d '{"articles":[{"title":"A","content":"1"},{"title":"B","content":"2"}]}' http://localhost:3000/api/articles/many

### Update one (updateOne)

- PUT /api/articles/:id — updates fields of one article by id

Example:

curl -X PUT -H "Content-Type: application/json" -d '{"title":"Updated"}' http://localhost:3000/api/articles/<id>

Response: { matchedCount, modifiedCount }

### Update many (updateMany)

- PUT /api/articles/many — marks all matching articles with updated: true

Example:

curl -X PUT http://localhost:3000/api/articles/many

### Replace one (replaceOne)

- PATCH /api/articles/:id — replaces the whole document by id

Example:

curl -X PATCH -H "Content-Type: application/json" -d '{"title":"Replaced","content":"New"}' http://localhost:3000/api/articles/<id>

### Delete one (deleteOne)

- DELETE /api/articles/:id — deletes one article by id

### Delete many (deleteMany)

- DELETE /api/articles/many — deletes all articles marked updated: true

## Notes

- Routes with /many are declared before /:id so they are matched correctly
- The Article schema includes an "updated" boolean field used by updateMany/deleteMany
- .env with the connection string must NOT be committed to git
