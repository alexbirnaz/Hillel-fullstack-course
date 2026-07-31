import express from "express";
import {
  getUsers,
  postUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../controllers/usersController.js";
import { basicAuth } from "../middleware/auth.js";
import { validateUserInput } from "../middleware/validate.js";

const router = express.Router();

router.get("/", basicAuth, getUsers);
router.post("/", basicAuth, validateUserInput, postUsers);
router.get("/:userId", basicAuth, getUserById);
router.put("/:userId", basicAuth, validateUserInput, updateUserById);
router.delete("/:userId", basicAuth, deleteUserById);

export default router;
