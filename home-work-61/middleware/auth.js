function basicAuth(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).send("Access denied. No credentials sent.");
  }
  next();
}

function checkArticleAccess(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res
      .status(403)
      .send("Access denied. No permission to access articles.");
  }
  next();
}

export { basicAuth, checkArticleAccess };
