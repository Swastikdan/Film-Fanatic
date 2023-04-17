// Define variables
const API_KEY = "f6f845f4c051289b806ce5fd5434aac1";
const BASE_URL = "https://api.themoviedb.org/3/";
const IMAGE_URL = "https://image.tmdb.org/t/p/original/";
const CDN = "https://res.cloudinary.com/dubqnzagc/image/fetch/f_auto,q_auto/";

// Get the movie ID from the URL query string
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const movieId = urlParams.get("id");

// Select the movie details container from the DOM
const movieDetailsContainer = document.getElementById("movie-details");

// Display loading message
movieDetailsContainer.innerHTML = "<p>Loading...</p>";

// youtube video code 
document.querySelector('.youtube-video').addEventListener('click', function () {
  const videoId = this.getAttribute('data-video-id');
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('class', 'w-full h-56 rounded-xl');
  this.innerHTML = '';
  this.appendChild(iframe);
});


// Fetch the movie details
fetch(
  `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
)
  .then((response) => response.json())
  .then((movie) => {
    document.title = movie.title;

    // Make a request to get the trailer YouTube ID based on the IMDB ID
    fetch(`https://www.omdbapi.com/?i=${movie.imdb_id}&apikey=22b88799`)
      .then((response) => response.json())
      .then((data) => {
        const videos = movie.videos.results;
        const videoContainer = document.getElementById("video-container");
        let videoHTML = "";
        for (let i = 0; i < videos.length; i++) {
          const videoKey = videos[i].key;
          videoHTML += `
          <li>
            <div class="youtube-video relative cursor-pointer inline-block w-full  " data-video-id="gardMnJszqc">
      <img class="rounded-xl object-cover w-full  h-96" src="https://i.ytimg.com/vi/${videoKey}/maxresdefault.jpg" alt="Video Thumbnail">
      <div class="play-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 "></div>
    </div>
        </li>
          `;
        }
        console.log(videoHTML); 
        
        const movieDetailsHTML = `    <div class=" w-full  lg:w-4/5 xl:w-3/5   h-96  rounded-xl"> 
        <div class="swiffy-slider slider-item-reveal slider-item-snapstart slider-nav-caretfill slider-nav-outside slider-item-first-visible slider-indicators-dark slider-indicators-outside slider-indicators-highlight  rounded-xl">
    
          <ul class="slider-container  rounded-xl">
          ${ videoHTML}
          
          </ul>

    <button type="button" class="slider-nav"></button>
    <button type="button" class="slider-nav slider-nav-next"></button>

    <ul class="slider-indicators">
        <li class=""></li>
        <li></li>
        <li class=""></li>
        <li></li>
        <li></li>
        <li class="active"></li>
        <li class=""></li>
        <li class=""></li>
        <li class=""></li>
    </ul>

      </div>
    </div>
          `;



        // Display the movie details, including the trailer
        movieDetailsContainer.innerHTML = movieDetailsHTML;
      })
      .catch((error) => {
        // Display the error
        movieDetailsContainer.innerHTML = `<p>${error.message}</p>`;
      });
  });



//   <div class="pl-20 w-2/3 h-1/3" >
 
// <div class="swiffy-slider h-100 slider-item-reveal slider-indicators-outside slider-indicators-round slider-nav-outside-expand slider-nav-visible slider-nav-animation slider-nav-animation-scale slider-item-first-visible" data-slider-nav-animation-threshold="0.4">
//  <ul class="slider-container">
// ${videoHTML}
// </ul>
// <button type="button" class="slider-nav"></button>
// <button type="button" class="slider-nav slider-nav-next"></button>
//                        </div>


//                        <div class="movie-poster my-4 ">
//                            <img class="w-60" src="${CDN}${IMAGE_URL}${movie.poster_path}" alt="${movie.title}">
//                          </div>
//                          <div class="movie-details my-4">
//                            <h2 class="movie-title">${movie.title}</h2>
//                            <p class="movie-overview">${movie.overview}</p>
//                            <p class="movie-release-date"><strong>Release Date:</strong> ${movie.release_date}</p>
//                            <p class="movie-runtime"><strong>Runtime:</strong> ${movie.runtime} minutes</p>
//                            <p class="movie-rating"><strong>Rating:</strong> ${movie.vote_average} / 10</p>
//                            <p> ${data.Rated}</p>
//                            <div class="movie-trailer" id="video-container">${videoHTML}</div>
//                          </div>

//                      </div>






        // set the innerHTML property of the videoContainer to the videoHTML string
        // videoContainer.innerHTML = videoHTML;

        // const videos = movie.videos.results; // assuming you have already retrieved the videos array from the API

        // // get a reference to the HTML element where you want to insert the videos
        // const videoContainer = document.getElementById("video-container");

        // // create an array of HTML strings for each video
        // const videoHTML = videos.map(video => `
        //   <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.key}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        // `);

        // set the innerHTML property of the videoContainer to the array of HTML strings
        // videoContainer.innerHTML = videoHTML.join("");

        // Create the movie details HTML, including the trailer
        //   const movieDetailsHTML = `
        //   <div class="movie-poster my-4 ">
        //     <img class="w-60" src="${CDN}${IMAGE_URL}${movie.poster_path}" alt="${movie.title}">
        //   </div>
        //   <div class="movie-details my-4">
        //     <h2 class="movie-title">${movie.title}</h2>
        //     <p class="movie-overview">${movie.overview}</p>
        //     <p class="movie-release-date"><strong>Release Date:</strong> ${movie.release_date}</p>
        //     <p class="movie-runtime"><strong>Runtime:</strong> ${movie.runtime} minutes</p>
        //     <p class="movie-rating"><strong>Rating:</strong> ${movie.vote_average} / 10</p>
        //     <p> ${data.Rated}</p>
        //     <div class="movie-trailer" id="video-container">${videoHTML}</div>
        //   </div>
        // `;

       
        // Display the movie details, including the trailer