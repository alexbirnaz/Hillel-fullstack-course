import { articles } from "../data.js";

function getArticles(req, res) {
  res.render("articles.ejs", { articles });
}

function postArticles(req, res) {
  res.send("Post articles route");
}

function getArticleById(req, res) {
  const articleId = Number(req.params.articleId);
  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    return res.status(404).send("Article not found");
  }

  res.render("article.ejs", { article });
}

function updateArticleById(req, res) {
  res.send(`Put article by Id route: ${req.params.articleId}`);
}

function deleteArticleById(req, res) {
  res.send(`Delete article by Id route: ${req.params.articleId}`);
}

export {
  getArticles,
  postArticles,
  getArticleById,
  updateArticleById,
  deleteArticleById,
};
