import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import Article from "./models/Article.js";

async function seed() {
  await connectDB();

  await Article.deleteMany();

  await Article.insertMany([
    {
      title: "First DB Article",
      content: "This article is stored in MongoDB Atlas.",
    },
    {
      title: "Second DB Article",
      content: "Data is fetched from the cloud database.",
    },
    {
      title: "Third DB Article",
      content: "Mongoose makes it easy to work with MongoDB.",
    },
  ]);

  console.log("Database seeded successfully");
  await mongoose.connection.close();
}

seed();
