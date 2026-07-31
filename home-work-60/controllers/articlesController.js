function getArticles(req, res) {
  res.send("Get articles route");
}

function postArticles(req, res) {
  res.send("Post articles route");
}

function getArticleById(req, res) {
  res.send(`Get article by Id route: ${req.params.articleId}`);
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
