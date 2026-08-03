import express from "express";
import cookieParser from "cookie-parser";
import ejs from "ejs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import usersRoutes from "./routes/usersRoutes.js";
import articlesRoutes from "./routes/articlesRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import themeRoutes from "./routes/themeRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", join(__dirname, "views"));
app.set("view engine", "pug");
app.engine("ejs", ejs.renderFile);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Get root route");
});

app.use("/auth", authRoutes);
app.use("/theme", themeRoutes);
app.use("/users", usersRoutes);
app.use("/articles", articlesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
