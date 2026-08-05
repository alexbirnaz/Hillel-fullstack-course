import Article from "../models/Article.js";

// READ with projection
async function getArticles(req, res) {
  try {
    const articles = await Article.find({}, { title: 1, content: 1, _id: 0 });
    res.json(articles);
  } catch (error) {
    res.status(500).send("Error fetching articles");
  }
}

// CREATE one
async function createArticle(req, res) {
  try {
    const { title, content } = req.body || {};
    if (!title || !content) {
      return res.status(400).send("Title and content are required");
    }
    const article = await Article.create({ title, content });
    res.status(201).json(article);
  } catch (error) {
    res.status(500).send("Error creating article");
  }
}

// CREATE many
async function createManyArticles(req, res) {
  try {
    const articles = req.body.articles;
    if (!Array.isArray(articles) || articles.length === 0) {
      return res.status(400).send("Articles array is required");
    }
    const created = await Article.insertMany(articles);
    res.status(201).json(created);
  } catch (error) {
    res.status(500).send("Error creating articles");
  }
}

// UPDATE one
async function updateArticle(req, res) {
  try {
    const { id } = req.params;
    const result = await Article.updateOne({ _id: id }, { $set: req.body });
    res.json(result);
  } catch (error) {
    res.status(500).send("Error updating article");
  }
}

// UPDATE many
// UPDATE many
async function updateManyArticles(req, res) {
  try {
    const result = await Article.updateMany(
      { content: { $exists: true } },
      { $set: { updated: true } },
    );
    res.json(result);
  } catch (error) {
    res.status(500).send("Error updating articles");
  }
}

// REPLACE one
async function replaceArticle(req, res) {
  try {
    const { id } = req.params;
    const { title, content } = req.body || {};
    const result = await Article.replaceOne({ _id: id }, { title, content });
    res.json(result);
  } catch (error) {
    res.status(500).send("Error replacing article");
  }
}

// DELETE one
async function deleteArticle(req, res) {
  try {
    const { id } = req.params;
    const result = await Article.deleteOne({ _id: id });
    res.json(result);
  } catch (error) {
    res.status(500).send("Error deleting article");
  }
}

// DELETE many
async function deleteManyArticles(req, res) {
  try {
    const result = await Article.deleteMany({ updated: true });
    res.json(result);
  } catch (error) {
    res.status(500).send("Error deleting articles");
  }
}

export {
  getArticles,
  createArticle,
  createManyArticles,
  updateArticle,
  updateManyArticles,
  replaceArticle,
  deleteArticle,
  deleteManyArticles,
};
