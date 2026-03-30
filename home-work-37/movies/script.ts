interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface ApiResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
  Error?: string;
}

const searchInput = document.getElementById("searchInput") as HTMLInputElement;
const results = document.getElementById("results") as HTMLDivElement;
const loading = document.getElementById("loading") as HTMLDivElement;
const error = document.getElementById("error") as HTMLDivElement;

const API_KEY: string = "b9a5e69d";
let timeoutId: number | null = null;

searchInput.addEventListener("input", (e: Event): void => {
  const target = e.target as HTMLInputElement;
  const query: string = target.value.trim();

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  if (!query) {
    results.innerHTML = "";
    error.textContent = "";
    return;
  }

  timeoutId = window.setTimeout((): void => {
    searchMovies(query);
  }, 500);
});

async function searchMovies(query: string): Promise<void> {
  loading.style.display = "block";
  error.textContent = "";
  results.innerHTML = "";

  try {
    const response: Response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
    );
    const data: ApiResponse = await response.json();

    loading.style.display = "none";

    if (data.Response === "True") {
      displayMovies(data.Search);
    } else {
      error.textContent = data.Error || "No movies found";
    }
  } catch (err) {
    loading.style.display = "none";
    error.textContent = "Error fetching data. Please try again.";
    console.log((err as Error).message);
  }
}

function displayMovies(movies: Movie[]): void {
  results.innerHTML = movies
    .map(
      (movie: Movie): string => `
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
