import express from "express";
import {
  getArticles,
  createArticle,
  createManyArticles,
  updateArticle,
  updateManyArticles,
  replaceArticle,
  deleteArticle,
  deleteManyArticles,
  getArticlesCursor,
  getArticlesStats,
} from "../controllers/dbArticlesController.js";

const router = express.Router();

router.get("/", getArticles);
router.get("/cursor", getArticlesCursor);
router.get("/stats", getArticlesStats);
router.post("/", createArticle);
router.post("/many", createManyArticles);
router.put("/many", updateManyArticles);
router.put("/:id", updateArticle);
router.patch("/:id", replaceArticle);
router.delete("/many", deleteManyArticles);
router.delete("/:id", deleteArticle);

export default router;
