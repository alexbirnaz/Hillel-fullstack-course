import jwt from "jsonwebtoken";

const SECRET_KEY = "my_secret_key_12345";

function verifyToken(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send("Access denied. No token provided.");
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).send("Invalid or expired token.");
  }
}

export { verifyToken };
