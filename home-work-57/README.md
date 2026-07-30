# Pure Node.js HTTP Server

Basic HTTP server built with Node.js built-in modules only (http, url, querystring). No Express.

## Installation & Run

```bash
node server.js
```

Server runs on http://localhost:3000 (or PORT env variable).

## Routes

### GET
- `/` — Home page ("Welcome to the Home Page")
- `/about` — About page ("Learn more about us")
- `/contact` — Contact page ("Get in touch")
- any other path — 404 Page Not Found

### POST
- `/submit` — accepts `application/x-www-form-urlencoded` with `name` and `email` fields

Example:
```bash
curl -X POST http://localhost:3000/submit -d "name=Alex&email=alex@mail.com"
```

## Error handling
- 404 Not Found — unknown routes
- 400 Bad Request — empty name or email
- 413 Payload Too Large — body over 1 MB
- 500 Internal Server Error — unexpected failures

## Limitations
- Max POST body size: 1 MB
- Input sanitized against XSS (< > & " escaped)
- Response headers: Content-Length, X-Content-Type-Options: nosniff
