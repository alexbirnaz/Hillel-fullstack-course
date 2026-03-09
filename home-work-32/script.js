const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

const API_KEY = "dbedae8b";
let timeoutId = null;

// LiveSearch - search as user types
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.trim();

  // Clear previous timeout
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  // Clear results if empty
  if (!query) {
    results.innerHTML = "";
    error.textContent = "";
    return;
  }

  // Wait 500ms after user stops typing
  timeoutId = setTimeout(() => {
    searchMovies(query);
  }, 500);
});

async function searchMovies(query) {
  loading.style.display = "block";
  error.textContent = "";
  results.innerHTML = "";

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
    );
    const data = await response.json();

    loading.style.display = "none";

    if (data.Response === "True") {
      displayMovies(data.Search);
    } else {
      error.textContent = data.Error || "No movies found";
    }
  } catch (err) {
    loading.style.display = "none";
    error.textContent = "Error fetching data. Please try again.";
    console.log(err.message);
  }
}

function displayMovies(movies) {
  results.innerHTML = movies
    .map(
      (movie) => `
    <div class="movie-card">
      ${
        movie.Poster !== "N/A"
          ? `<img src="${movie.Poster}" alt="${movie.Title}">`
          : `<div class="no-poster">No Poster</div>`
      }
      <div class="movie-info">
        <h3>${movie.Title}</h3>
        <p class="year">${movie.Year}</p>
        <p>${movie.Type}</p>
      </div>
    </div>
  `,
    )
    .join("");
}
