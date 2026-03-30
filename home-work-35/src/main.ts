import "./style.scss";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <div class="container">
    <header class="header">
      <h1>Vite Project</h1>
      <p>TypeScript + SCSS + ESLint</p>
    </header>

    <main class="main">
      <section class="features">
        <h2>Features</h2>
        <div class="features__grid">
          <div class="card">
            <h3>Vite</h3>
            <p>Fast dev server</p>
          </div>
          <div class="card">
            <h3>TypeScript</h3>
            <p>Type safety</p>
          </div>
          <div class="card">
            <h3>SCSS</h3>
            <p>CSS preprocessor</p>
          </div>
          <div class="card">
            <h3>ESLint</h3>
            <p>Code quality</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>&copy; 2026 Vite Project</p>
    </footer>
  </div>
`;
