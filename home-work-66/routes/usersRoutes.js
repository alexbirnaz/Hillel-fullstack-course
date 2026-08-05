import express from "express";
import {
  getUsers,
  postUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../controllers/usersController.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", postUsers);
router.get("/:userId", getUserById);
router.put("/:userId", updateUserById);
router.delete("/:userId", deleteUserById);

export default router;
