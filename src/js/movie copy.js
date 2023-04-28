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
const movieTrailerContainer = document.getElementById('trailer');

// // Display loading message
// movieDetailsContainer.innerHTML = '<p>Loading...</p>';
// movieTrailerContainer.innerHTML = `<li class="rounded-xl">
// <div class="relative cursor-pointer inline-block rounded-xl">
//   <div class="w-full h-full rounded-xl bg-gray-300 animate-pulse"></div>
//   <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-70">
//     <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500">
//       <svg class="w-20 h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48">
//         <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/>
//         <path d="M45 24 27 14v20" fill="white"/>
//       </svg>
//     </div>
//   </div>
// </div>
// </li>
// `;





fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=videos`)
.then(response => response.json())
.then(movie => {
document.title = movie.title;
// const videos = movie.videos.results;
// const videoKeys = [];
// for (let i = 0; i < videos.length; i++) {
//     videoKeys.push(videos[i].key);
// }
// // Create the movie details HTML, including the trailers
// console.log(videoKeys);

const videos = movie.videos.results;
const videoKeys = [];
for (let i = 0; i < videos.length; i++) {
    videoKeys.push(videos[i].key);
}
// const trailersHTML = document.getElementById('youtube-trailers');
// Create the movie details HTML, including the trailers
const trailersHTML= videoKeys.map(videoKey => {
    // const youtubeUrl = `https://www.youtube.com/embed/${videoKey}`;
    return `
    <li class=" rounded-xl">
    <div class="relative cursor-pointer inline-block rounded-xl  " data-video-id="${videoKey}" onclick="loadVideo(this)">
    <img class="w-full h-full rounded-xl " load="lazy" src="https://img.youtube.com/vi/${videoKey}/maxresdefault.jpg" alt="${movie.poster_path}">
    <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-70 rounded-xl">
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500">
    <svg class="w-20 h-20 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/><path d="M45 24 27 14v20" fill="white"/></svg>
    </div>
  </div>
  </li>

  
    `;
}).join('');




console.log(trailersHTML);
// Make a request to get the trailer YouTube ID based on the IMDB ID
fetch(`https://www.omdbapi.com/?i=${movie.imdb_id}&apikey=22b88799`)
  .then(response => response.json())
  .then(data => {
    

    let imdbRating, rottenTomatoesRating, metacriticRating;
    for (const rating of data.Ratings) {
      if (rating.Source === "Internet Movie Database") {
        imdbRating = rating.Value;
      } else if (rating.Source === "Rotten Tomatoes") {
        rottenTomatoesRating = rating.Value;
      } else if (rating.Source === "Metacritic") {
        metacriticRating = rating.Value;
      }
    }
    
    // Extract the numerical value of each rating
    const imdbValue = parseFloat(imdbRating) * 10; // Convert to a 0-100 scale
    const rottenTomatoesValue = parseInt(rottenTomatoesRating, 10);
    const metacriticValue = parseInt(metacriticRating.split('/')[0], 10);
    
    console.log('IMDb:', imdbValue);
    console.log('Rotten Tomatoes:', rottenTomatoesValue);
    console.log('Metacritic:', metacriticValue);





    movieTrailerContainer.innerHTML = trailersHTML;
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
      </div>
      
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


// <iframe width="560" height="315" src="https://www.youtube.com/embed/${youtubeId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>







// const youtubeUrl = `https://www.youtube.com/embed/${videoKey}`;
//     return `
//         <div class="movie-trailer">
//             <iframe width="560" height="315" src="${youtubeUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//         </div>
//     `;