# Fullstack Project — Mongoose Backend + React Frontend

A fullstack application: an Express + Mongoose backend (MongoDB Atlas) with a React frontend that consumes the API.

## Structure

home-work-71/
app.js, config/, controllers/, models/, routes/ — Express + Mongoose backend
client/ — React frontend (Vite)

## Backend setup

Create a .env file in the project root:

MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/homework_65?retryWrites=true&w=majority
PORT=3000

Install and seed:

npm install
node seed.js

Run the backend:

node app.js

Backend runs on http://localhost:3000

## Frontend setup

cd client
npm install
npm run dev

Frontend runs on http://localhost:5173

## How it works

- The React app fetches articles from the backend API (GET /api/articles)
- A form sends new articles to the API (POST /api/articles)
- Mongoose validates the data; validation errors (e.g. title too short) are returned
  as 400 and displayed in the React UI
- CORS is enabled on the backend so the frontend (port 5173) can call the API (port 3000)

## Backend models (Mongoose)

- Article — title, content, category (enum, indexed), views, updated, timestamps; with validation
- User — email (unique, indexed, format-validated), password; with validation

## API routes

- GET /api/articles — list articles
- POST /api/articles — create an article (validated)
- POST /api/articles/many — create many
- PUT /api/articles/:id — update one
- PUT /api/articles/many — update many
- PATCH /api/articles/:id — replace one
- DELETE /api/articles/:id — delete one
- DELETE /api/articles/many — delete many
- GET /api/articles/cursor — cursor iteration
- GET /api/articles/stats — aggregation by category

## Notes

- .env must NOT be committed to git
- Run backend and frontend in separate terminals
