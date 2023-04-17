//  Youtube video import 
 // Create the movie details HTML
 const videos = movie.videos.results;
 const videoContainer = document.getElementById("video-container");
 let videoHTML = '';
 for (let i = 0; i < videos.length; i++) {
   const videoKey = videos[i].key;
   videoHTML += `
     <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoKey}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   `;
 }
 console.log(videoHTML)



 // Display loading message
movieDetailsContainer.innerHTML = `       <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<defs>
  <clipPath id="ldio-af1yijtnohj-cp">
    <rect x="0" y="0" width="100" height="50">
      <animate attributeName="y" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" values="0;50;0;0;0" keyTimes="0;0.4;0.5;0.9;1" keySplines="0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7"></animate>
      <animate attributeName="height" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" values="50;0;0;50;50" keyTimes="0;0.4;0.5;0.9;1" keySplines="0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7"></animate>
    </rect>
    <rect x="0" y="50" width="100" height="50">
      <animate attributeName="y" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" values="100;50;50;50;50" keyTimes="0;0.4;0.5;0.9;1" keySplines="0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7"></animate>
      <animate attributeName="height" repeatCount="indefinite" dur="2.2222222222222223s" calcMode="spline" values="0;50;50;0;0" keyTimes="0;0.4;0.5;0.9;1" keySplines="0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7"></animate>
    </rect>
  </clipPath>
</defs>
<g transform="translate(50 50)"><g transform="scale(0.9)"><g transform="translate(-50 -50)">
  <g>
    <animateTransform attributeName="transform" type="rotate" dur="2.2222222222222223s" repeatCount="indefinite" values="0 50 50;0 50 50;180 50 50;180 50 50;360 50 50" keyTimes="0;0.4;0.5;0.9;1"></animateTransform>
    <path clip-path="url(#ldio-af1yijtnohj-cp)" fill="#BBCEDD" d="M54.864 50L54.864 50c0-1.291 0.689-2.412 1.671-2.729c9.624-3.107 17.154-12.911 19.347-25.296 c0.681-3.844-1.698-7.475-4.791-7.475H28.908c-3.093 0-5.472 3.631-4.791 7.475c2.194 12.385 9.723 22.189 19.347 25.296 c0.982 0.317 1.671 1.438 1.671 2.729v0c0 1.291-0.689 2.412-1.671 2.729C33.84 55.836 26.311 65.64 24.117 78.025 c-0.681 3.844 1.698 7.475 4.791 7.475h42.184c3.093 0 5.472-3.631 4.791-7.475C73.689 65.64 66.16 55.836 56.536 52.729 C55.553 52.412 54.864 51.291 54.864 50z"></path>
    <path fill="#85A2B6" d="M81 81.5h-2.724l0.091-0.578c0.178-1.122 0.17-2.243-0.022-3.333C76.013 64.42 68.103 54.033 57.703 50.483l-0.339-0.116 v-0.715l0.339-0.135c10.399-3.552 18.31-13.938 20.642-27.107c0.192-1.089 0.2-2.211 0.022-3.333L78.276 18.5H81 c2.481 0 4.5-2.019 4.5-4.5S83.481 9.5 81 9.5H19c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5h2.724l-0.092 0.578 c-0.178 1.122-0.17 2.243 0.023 3.333c2.333 13.168 10.242 23.555 20.642 27.107l0.338 0.116v0.715l-0.338 0.135 c-10.4 3.551-18.31 13.938-20.642 27.106c-0.193 1.09-0.201 2.211-0.023 3.333l0.092 0.578H19c-2.481 0-4.5 2.019-4.5 4.5 s2.019 4.5 4.5 4.5h62c2.481 0 4.5-2.019 4.5-4.5S83.481 81.5 81 81.5z M73.14 81.191L73.012 81.5H26.988l-0.128-0.309 c-0.244-0.588-0.491-1.538-0.28-2.729c2.014-11.375 8.944-20.542 17.654-23.354c2.035-0.658 3.402-2.711 3.402-5.108 c0-2.398-1.368-4.451-3.403-5.108c-8.71-2.812-15.639-11.979-17.653-23.353c-0.211-1.191 0.036-2.143 0.281-2.731l0.128-0.308 h46.024l0.128 0.308c0.244 0.589 0.492 1.541 0.281 2.731c-2.015 11.375-8.944 20.541-17.654 23.353 c-2.035 0.658-3.402 2.71-3.402 5.108c0 2.397 1.368 4.45 3.403 5.108c8.71 2.812 15.64 11.979 17.653 23.354 C73.632 79.651 73.384 80.604 73.14 81.191z"></path>
  </g>
</g></g></g>
</svg>`;


















/*
// Define variables
const API_KEY = "f6f845f4c051289b806ce5fd5434aac1";
const BASE_URL = "https://api.themoviedb.org/3/";
const IMAGE_URL = "https://image.tmdb.org/t/p/original/";
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
 */
/*
// Define variables
const API_KEY = "f6f845f4c051289b806ce5fd5434aac1";
const BASE_URL = "https://api.themoviedb.org/3/";
const IMAGE_URL = "https://image.tmdb.org/t/p/original/";
const CDN = "https://res.cloudinary.com/dubqnzagc/image/fetch/f_auto,q_auto/"
// Get the movie ID from the URL query string
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const movieId = urlParams.get('id');

// Select the movie details container from the DOM
const movieDetailsContainer = document.getElementById('movie-details');

// Display loading message
movieDetailsContainer.innerHTML = '<p>Loading...</p>';

// Fetch the movie details
fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=videos`)
.then(response => response.json())
.then(movie => {
document.title = movie.title;
// Make a request to get the trailer YouTube ID based on the IMDB ID
fetch(`https://www.omdbapi.com/?i=${movie.imdb_id}&apikey=22b88799`)
  .then(response => response.json())
  .then(data => {

    // console.log(movie.videos.results)
    // const videoKey = movie.videos.results[0].key;
    // console.log(videoKey);
//     const videos = movie.videos.results;
// const videoKeys = [];

// for (let i = 0; i < videos.length; i++) {
//   const videoKey = videos[i].key;
//   videoKeys.push(videoKey);
// }
const videos = movie.videos.results; // assuming you have already retrieved the videos array from the API

// get a reference to the HTML element where you want to insert the videos
const videoContainer = document.getElementById("video-container");

// loop through the videos array and create an HTML element for each video
for (let i = 0; i < videos.length; i++) {
  const videoKey = videos[i].key;
  const iframe = document.createElement("iframe");
  iframe.width = "560";
  iframe.height = "315";
  iframe.src = `https://www.youtube.com/embed/${videoKey}`;
  iframe.frameborder = "0";
  iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;
  videoContainer.appendChild(iframe);
}

console.log(videoKey); // This will log an array of video keys in the order they appear in the `videos` array.

    // Create the movie details HTML, including the trailer
   
    const movieDetailsHTML = `
      <div class="movie-poster my-4 ">
        <img class="w-60" src="${CDN}${IMAGE_URL}${movie.poster_path}" alt="${movie.title}">
      </div>
      <div class="movie-details my-4">
        <h2 class="movie-title">${movie.title}</h2>
        <p class="movie-overview">${movie.overview}</p>
        <p class="movie-release-date"><strong>Release Date:</strong> ${movie.release_date}</p>
        <p class="movie-runtime"><strong>Runtime:</strong> ${movie.runtime} minutes</p>
        <p class="movie-rating"><strong>Rating:</strong> ${movie.vote_average} / 10</p>
        <p> ${data.Rated}</P>
        <div class="movie-trailer" id="video-container">
        
        </div>
      </div>
    `;
    // Display the movie details, including the trailer
    movieDetailsContainer.innerHTML = movieDetailsHTML;
  })
  .catch(error => {
    // Display the error
    movieDetailsContainer.innerHTML = `<p>${error.message}</p>`;
  });
})
.catch(error => {
// Display the error
movieDetailsContainer.innerHTML = `<p>${error.message}</p>`;
}); */

// Define variables
const API_KEY = "f6f845f4c051289b806ce5fd5434aac1";
const BASE_URL = "https://api.themoviedb.org/3/";
const IMAGE_URL = "https://image.tmdb.org/t/p/original/";
const CDN = "https://res.cloudinary.com/dubqnzagc/image/fetch/f_auto,q_auto/"

// Get the movie ID from the URL query string
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const movieId = urlParams.get('id');

// Select the movie details container from the DOM
const movieDetailsContainer = document.getElementById('movie-details');

// Display loading message
movieDetailsContainer.innerHTML = '<p>Loading...</p>';

// Fetch the movie details
fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=videos`)
.then(response => response.json())
.then(movie => {
  document.title = movie.title;
  
  // Make a request to get the trailer YouTube ID based on the IMDB ID
  fetch(`https://www.omdbapi.com/?i=${movie.imdb_id}&apikey=22b88799`)
    .then(response => response.json())
    .then(data => {
      
      const videos = movie.videos.results; // assuming you have already retrieved the videos array from the API

      // get a reference to the HTML element where you want to insert the videos
      const videoContainer = document.getElementById("video-container");

      // loop through the videos array and create an HTML element for each video
      for (let i = 0; i < videos.length; i++) {
        const videoKey = videos[i].key;
        const iframe = document.createElement("iframe");
        iframe.width = "560";
        iframe.height = "315";
        iframe.src = `https://www.youtube.com/embed/${videoKey}`;
        iframe.frameborder = "0";
        iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        videoContainer.appendChild(iframe);
      }

      // Create the movie details HTML, including the trailer
      const movieDetailsHTML = `
        <div class="movie-poster my-4 ">
          <img class="w-60" src="${CDN}${IMAGE_URL}${movie.poster_path}" alt="${movie.title}">
        </div>
        <div class="movie-details my-4">
          <h2 class="movie-title">${movie.title}</h2>
          <p class="movie-overview">${movie.overview}</p>
          <p class="movie-release-date"><strong>Release Date:</strong> ${movie.release_date}</p>
          <p class="movie-runtime"><strong>Runtime:</strong> ${movie.runtime} minutes</p>
          <p class="movie-rating"><strong>Rating:</strong> ${movie.vote_average} / 10</p>
          <p> ${data.Rated}</p>
          <div class="movie-trailer" id="video-container"></div>
        </div>
      `;
      // Display the movie details, including the trailer

// Display the movie details, including the trailer
movieDetailsContainer.innerHTML = movieDetailsHTML;
})
.catch(error => {
// Display the error
movieDetailsContainer.innerHTML = <p>${error.message}</p>;
});
})
.catch(error => {
// Display the error
movieDetailsContainer.innerHTML = <p>${error.message}</p>;
});

// Function to convert minutes to hours and minutes


