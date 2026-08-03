import jwt from "jsonwebtoken";

const SECRET_KEY = "my_secret_key_12345";

function register(req, res) {
  const { username, password } = req.body || {};

  if (!username || !password) {
    return res.status(400).send("Username and password are required");
  }

  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });

  res.cookie("token", token, { httpOnly: true });
  res.send(`User ${username} registered. Token set in cookie.`);
}

function login(req, res) {
  const { username, password } = req.body || {};

  if (!username || !password) {
    return res.status(400).send("Username and password are required");
  }

  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });

  res.cookie("token", token, { httpOnly: true });
  res.send(`User ${username} logged in. Token set in cookie.`);
}

function profile(req, res) {
  res.send(`Protected profile. Welcome, ${req.user.username}!`);
}

export { register, login, profile };
