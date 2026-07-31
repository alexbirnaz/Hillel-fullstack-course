function validateUserInput(req, res, next) {
  const { name, email } = req.body || {};
  if (!name || !email) {
    return res.status(400).send("Missing required fields: name and email");
  }
  next();
}

export { validateUserInput };
