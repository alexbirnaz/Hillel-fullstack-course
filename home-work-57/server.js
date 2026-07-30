const http = require("http");
const url = require("url");
const querystring = require("querystring");
const { renderPage, renderNotFound, renderFormResult } = require("./html");

const PORT = process.env.PORT || 3000;
const MAX_BODY_SIZE = 1024 * 1024; // 1 MB

function send(res, status, html) {
  const body = Buffer.from(html, "utf-8");
  res.writeHead(status, {
    "Content-Type": "text/html; charset=utf-8",
    "Content-Length": body.length,
    "X-Content-Type-Options": "nosniff",
  });
  res.end(body);
}

const server = http.createServer((req, res) => {
  try {
    const parsedUrl = url.parse(req.url);
    const path = parsedUrl.pathname;

    // GET routes
    if (req.method === "GET") {
      if (path === "/") {
        return send(res, 200, renderPage("Home", "Welcome to the Home Page"));
      }
      if (path === "/about") {
        return send(res, 200, renderPage("About", "Learn more about us"));
      }
      if (path === "/contact") {
        return send(res, 200, renderPage("Contact", "Get in touch"));
      }
      return send(res, 404, renderNotFound());
    }

    // POST route
    if (req.method === "POST" && path === "/submit") {
      let body = "";
      let tooLarge = false;

      req.on("data", (chunk) => {
        body += chunk;
        if (Buffer.byteLength(body) > MAX_BODY_SIZE) {
          tooLarge = true;
          send(res, 413, renderPage("Error", "Payload Too Large"));
          req.destroy();
        }
      });

      req.on("end", () => {
        if (tooLarge) return;

        const parsed = querystring.parse(body);
        const name = parsed.name;
        const email = parsed.email;

        if (!name || !email) {
          return send(res, 400, renderPage("Error", "Invalid form data"));
        }

        return send(res, 200, renderFormResult(name, email));
      });

      return;
    }

    // everything else
    return send(res, 404, renderNotFound());
  } catch (error) {
    send(res, 500, renderPage("Error", "Server Error"));
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
