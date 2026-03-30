"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const API_KEY = "b9a5e69d";
let timeoutId = null;
searchInput.addEventListener("input", (e) => {
    const target = e.target;
    const query = target.value.trim();
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    if (!query) {
        results.innerHTML = "";
        error.textContent = "";
        return;
    }
    timeoutId = window.setTimeout(() => {
        searchMovies(query);
    }, 500);
});
function searchMovies(query) {
    return __awaiter(this, void 0, void 0, function* () {
        loading.style.display = "block";
        error.textContent = "";
        results.innerHTML = "";
        try {
            const response = yield fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
            const data = yield response.json();
            loading.style.display = "none";
            if (data.Response === "True") {
                displayMovies(data.Search);
            }
            else {
                error.textContent = data.Error || "No movies found";
            }
        }
        catch (err) {
            loading.style.display = "none";
            error.textContent = "Error fetching data. Please try again.";
            console.log(err.message);
        }
    });
}
function displayMovies(movies) {
    results.innerHTML = movies
        .map((movie) => `
    <div class="movie-card">
      ${movie.Poster !== "N/A"
        ? `<img src="${movie.Poster}" alt="${movie.Title}">`
        : `<div class="no-poster">No Poster</div>`}
      <div class="movie-info">
        <h3>${movie.Title}</h3>
        <p class="year">${movie.Year}</p>
        <p>${movie.Type}</p>
      </div>
    </div>
  `)
        .join("");
}
