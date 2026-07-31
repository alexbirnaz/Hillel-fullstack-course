import express from "express";
import usersRoutes from "./routes/usersRoutes.js";
import articlesRoutes from "./routes/articlesRoutes.js";
import { logRequests } from "./middleware/logger.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logRequests);

app.get("/", (req, res) => {
  res.send("Get root route");
});

app.use("/users", usersRoutes);
app.use("/articles", articlesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
