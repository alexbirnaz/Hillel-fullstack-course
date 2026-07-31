import express from "express";
import {
  getArticles,
  postArticles,
  getArticleById,
  updateArticleById,
  deleteArticleById,
} from "../controllers/articlesController.js";
import { checkArticleAccess } from "../middleware/auth.js";

const router = express.Router();

router.get("/", checkArticleAccess, getArticles);
router.post("/", checkArticleAccess, postArticles);
router.get("/:articleId", checkArticleAccess, getArticleById);
router.put("/:articleId", checkArticleAccess, updateArticleById);
router.delete("/:articleId", checkArticleAccess, deleteArticleById);

export default router;
