import express from "express";

const router = express.Router();

router.get("/set/:theme", (req, res) => {
  const theme = req.params.theme;

  if (theme !== "light" && theme !== "dark") {
    return res.status(400).send("Theme must be 'light' or 'dark'");
  }

  res.cookie("theme", theme, { maxAge: 900000 });
  res.send(`Theme saved: ${theme}`);
});

router.get("/get", (req, res) => {
  const theme = req.cookies.theme || "light";
  res.send(`Current theme: ${theme}`);
});

export default router;
