const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "f6f845f4c051289b806ce5fd5434aac1";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const urlParams = new URLSearchParams(window.location.search);
const searchTerm = urlParams.get("query");

if (searchTerm) {
  searchMovies(`${BASE_URL}search/multi?api_key=${API_KEY}&query=${searchTerm}`);
}

// Search function
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value;
  if (searchTerm) {
    window.location.href = `search.html?query=${searchTerm}`;
  }
});

function searchMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showMovies(data.results);
    });
}

function showMovies(movies) {
  const movieContainer = document.querySelector("#movie-container");
  movieContainer.innerHTML = "";

  if (movies.length === 0) {
    movieContainer.innerHTML = `<h2>No movies found</h2>`;
  }
  else {

  movies.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
      <img src="${IMG_URL + movie.poster_path}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <span class="${getColor(movie.vote_average)}">${movie.vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${movie.overview}
      </div>
    `;
    movieContainer.appendChild(movieEl);
  });
}
}
function getColor(vote) {
  if (vote >= 8) {
    return "text-green-600";
  } else if (vote >= 5) {
    return "text-orange-600";
  } else {
    return "text-red-600";
  }
}
