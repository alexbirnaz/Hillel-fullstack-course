import express from "express";
import {
  register,
  login,
  logout,
  protectedRoute,
} from "../controllers/authController.js";

const router = express.Router();

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send("Access denied. Please log in.");
}

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/protected", ensureAuthenticated, protectedRoute);

export default router;
