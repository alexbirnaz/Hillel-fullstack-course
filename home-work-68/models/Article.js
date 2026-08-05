import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, default: "general" },
  views: { type: Number, default: 0 },
  updated: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Article = mongoose.model("Article", articleSchema);

export default Article;
