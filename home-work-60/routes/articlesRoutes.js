import express from "express";
import {
  getArticles,
  postArticles,
  getArticleById,
  updateArticleById,
  deleteArticleById,
} from "../controllers/articlesController.js";

const router = express.Router();

router.get("/", getArticles);
router.post("/", postArticles);
router.get("/:articleId", getArticleById);
router.put("/:articleId", updateArticleById);
router.delete("/:articleId", deleteArticleById);

export default router;
