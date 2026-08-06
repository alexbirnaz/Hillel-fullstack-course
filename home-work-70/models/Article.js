import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters"],
      maxlength: [100, "Title must not exceed 100 characters"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      trim: true,
      minlength: [5, "Content must be at least 5 characters"],
    },
    category: {
      type: String,
      enum: ["tech", "lifestyle", "travel", "general"],
      default: "general",
      index: true,
    },
    views: {
      type: Number,
      default: 0,
      min: [0, "Views cannot be negative"],
    },
    updated: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Article = mongoose.model("Article", articleSchema);

export default Article;
