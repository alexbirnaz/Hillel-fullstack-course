import { useState, useEffect } from "react";
import "./App.css";

const API_URL = "http://localhost:3000/api/articles";

function App() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const fetchArticles = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setArticles(data);
    } catch (err) {
      setError("Failed to load articles");
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Failed to create article");
        return;
      }

      setTitle("");
      setContent("");
      fetchArticles();
    } catch (err) {
      setError("Failed to create article");
    }
  };

  return (
    <div className="app">
      <h1>Articles</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add Article</button>
      </form>

      {error && <p className="error">{error}</p>}

      <ul className="list">
        {articles.map((article) => (
          <li key={article._id}>
            <strong>{article.title}</strong>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
