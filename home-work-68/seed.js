import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import Article from "./models/Article.js";

async function seed() {
  await connectDB();

  await Article.deleteMany();

  await Article.insertMany([
    {
      title: "JS Basics",
      content: "Intro to JavaScript",
      category: "tech",
      views: 150,
    },
    {
      title: "Node Guide",
      content: "Server-side JavaScript",
      category: "tech",
      views: 300,
    },
    {
      title: "MongoDB Tips",
      content: "Working with databases",
      category: "tech",
      views: 250,
    },
    {
      title: "Healthy Food",
      content: "Eat well, live well",
      category: "lifestyle",
      views: 80,
    },
    {
      title: "Morning Routine",
      content: "Start your day right",
      category: "lifestyle",
      views: 120,
    },
    {
      title: "Travel Japan",
      content: "Exploring Tokyo",
      category: "travel",
      views: 500,
    },
  ]);

  console.log("Database seeded successfully");
  await mongoose.connection.close();
}

seed();
