function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderPage(title, text) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${title}</title>
</head>
<body>
<h1>${title}</h1>
<p>${text}</p>
</body>
</html>`;
}

function renderNotFound() {
  return renderPage("404", "Page Not Found");
}

function renderFormResult(name, email) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Form Submitted</title>
</head>
<body>
<h1>Form Submitted</h1>
<p>Name: ${escapeHtml(name)}</p>
<p>Email: ${escapeHtml(email)}</p>
</body>
</html>`;
}

module.exports = { escapeHtml, renderPage, renderNotFound, renderFormResult };
