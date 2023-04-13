// Define variables
const API_KEY = 'f6f845f4c051289b806ce5fd5434aac1';
const BASE_URL = 'https://api.themoviedb.org/3/';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';

// Get the movie ID from the URL query string
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const movieId = urlParams.get('id');

// Select the movie details container from the DOM
const movieDetailsContainer = document.getElementById('movie-details');

// Fetch the movie details
fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
  .then(response => response.json())
  .then(movie => {
    document.title = movie.title;
    // Create the movie details HTML
    const movieDetailsHTML = `
      <div class="movie-poster my-4">
        <img src="${IMAGE_URL}${movie.poster_path}" alt="${movie.title}">
      </div>
      <div class="movie-details my-4">
        <h2 class="movie-title">${movie.title}</h2>
        <p class="movie-overview">${movie.overview}</p>
        <p class="movie-release-date"><strong>Release Date:</strong> ${movie.release_date}</p>
        <p class="movie-runtime"><strong>Runtime:</strong> ${movie.runtime} minutes</p>
        <p class="movie-rating"><strong>Rating:</strong> ${movie.vote_average} / 10</p>
      </div>
    `;

    // Display the movie details
    movieDetailsContainer.innerHTML = movieDetailsHTML;
  })
  .catch(error => {
    // Display the error
    movieDetailsContainer.innerHTML = `<p>${error.message}</p>`;
  });
