import bcrypt from "bcryptjs";
import passport from "../config/passport.js";
import { users } from "../data/users.js";

async function register(req, res) {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).send("Email and password are required");
  }

  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return res.status(400).send("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ email, password: hashedPassword });

  res.send(`User ${email} registered successfully`);
}

function login(req, res, next) {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).send(info.message);
    }
    req.login(user, (loginErr) => {
      if (loginErr) {
        return next(loginErr);
      }
      return res.send(`Logged in as ${user.email}`);
    });
  })(req, res, next);
}

function logout(req, res, next) {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.send("Logged out successfully");
  });
}

function protectedRoute(req, res) {
  res.send(`Protected route. Welcome, ${req.user.email}!`);
}

export { register, login, logout, protectedRoute };
