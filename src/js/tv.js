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
const allContainer = document.getElementById("all");
const tvPreviewContainer = document.getElementById("tv-preview");
const tvDetailsContainer = document.getElementById("tv-details");
const tvTrailerContainer = document.getElementById("trailer");
const moreLikeThisContainer = document.getElementById("more-like-container");
tvPreviewContainer.innerHTML = `
<div class="group relative hidden lg:flex w-1/5 items-end overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-900 animate-pulse ">
<div
  class="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-900 rounded-xl animate-pulse -z-10">
</div>
</div>
<div class="group relative w-full lg:w-4/5 flex overflow-hidden rounded-xl md:col-span-1 ">
<div class="rounded-xl mx-auto h-96 items-center justify-center text-center  bg-gray-200 dark:bg-gray-900 animate-pulse w-full ">
</div>
</div>

`;
tvDetailsContainer.innerHTML = `   <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold  mb-6">Movie Info</h2>
<div class="py-2"></div>
<span class="block h-4 bg-gray-200 dark:bg-gray-900 w-3/4 mb-4 rounded-full animate-pulse"></span>
<span class="block h-4 bg-gray-200 dark:bg-gray-900 w-2/3 mb-4 rounded-full animate-pulse"></span>
<div class="py-2"></div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full ">
        <div class="bg-gray-200 dark:bg-gray-900 p-4 rounded-lg shadow-sm mx-auto h-80 w-full lg:w-11/12 animate-pulse">

        </div>
        <div class="bg-gray-200 dark:bg-gray-900 p-4 rounded-lg shadow-sm mx-auto h-80 w-full lg:w-11/12 animate-pulse">



        </div>
      </div>`;
tvTrailerContainer.innerHTML = `<div class="swiper-slide rounded-xl">
<div
class="absolute inset-0 flex items-center justify-center bg-gray-300 dark:bg-gray-800 -z-10 rounded-xl animate-pulse ">
</div>

</div>
<div class="swiper-slide rounded-xl">
<div
class="absolute inset-0 flex items-center justify-center bg-gray-300 dark:bg-gray-800 -z-10 rounded-xl animate-pulse ">
</div>

</div>
<div class="swiper-slide rounded-xl">
<div
class="absolute inset-0 flex items-center justify-center bg-gray-300 dark:bg-gray-800 -z-10 rounded-xl animate-pulse ">
</div>

</div>`;

fetch(
  `${BASE_URL}tv/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
)
  .then((response) => response.json())
  .then((movie) => {
    document.title = movie.title;
    const videos = movie.videos.results;
    const videoKeys = [];
    for (let i = 0; i < videos.length; i++) {
      videoKeys.push(videos[i].key);
    }
    const trailersHTML = videoKeys
      .map((videoKey) => {
        return `
<div class="swiper-slide rounded-xl">
    <div
    class="absolute inset-0 flex items-center justify-center bg-gray-300 dark:bg-gray-800 -z-10 rounded-xl animate-pulse ">
  </div>
    <iframe class="rounded-xl w-full h-96" src="https://www.youtube.com/embed/${videoKey}?autoplay=0"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen=""></iframe>
  </div>
    `;
      })
      .join("");
      console.log(trailersHTML);
    tvTrailerContainer.innerHTML = trailersHTML;
    // Make a request to get the trailer YouTube ID based on the IMDB ID
    fetch(`https://www.omdbapi.com/?t=${movie.original_name}&apikey=22b88799&plot=full`)
      .then((response) => response.json())
      .then((data) => {
        // let imdbRating, rottenTomatoesRating, metacriticRating;
        // for (const rating of data.Ratings) {
        //   if (rating.Source === "Internet Movie Database") {
        //     imdbRating = rating.Value;
        //   } else if (rating.Source === "Rotten Tomatoes") {
        //     rottenTomatoesRating = rating.Value;
        //   } else if (rating.Source === "Metacritic") {
        //     metacriticRating = rating.Value;
        //   }
        // }

        // Extract the numerical value of each rating
        // const imdbValue = parseFloat(imdbRating); // Convert to a 0-100 scale
        // const rottenTomatoesValue = parseInt(rottenTomatoesRating, 10);
        // const metacriticValue = parseInt(metacriticRating.split("/")[0], 10);

        // console.log("IMDb:", imdbValue);
        // console.log("Rotten Tomatoes:", rottenTomatoesValue);
        // console.log("Metacritic:", metacriticValue);

        // let rottenTomatoesLogo;
        // if (rottenTomatoesValue < 60) {
        //   rottenTomatoesLogo = "/Rotten.svg";
        // } else if(rottenTomatoesValue > 60) {
        //   rottenTomatoesLogo = "/Rotten_Tomatoes.svg";
        // }
        

        const moviePreviewHTML = `
        <div class="group relative hidden lg:flex w-1/5 items-end overflow-hidden rounded-xl bg-gray-200 ">
        <div
          class="absolute inset-0 flex items-center justify-center bg-gray-500 dark:bg-gray-950 rounded-xl animate-pulse -z-10">
        </div>
        <img
          src="${CDN}${IMAGE_URL}${movie.poster_path}"
          loading="lazy" alt="${data.Title}"
          class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
      </div>
      <div class="group relative w-full lg:w-4/5 flex overflow-hidden rounded-xl md:col-span-1 ">
        <div class="rounded-xl mx-auto h-96 items-center justify-center text-center text-black dark:text-gray-100  bg-gray-200 dark:bg-gray-900  w-full ">

          <div class="all-wraper flex flex-col space-y-5   items-center text-center  px-10 py-5 ">
            <div class="text-end ">
              <h1 class="title text-3xl md:text-4xl lg:text-5xl font-black ">
              ${data.Title}
              </h1>
              <div class="p-2"></div>
              <span class="items-end ">${movie.tagline}</span>
            </div>

            <div class="#row-2 flex flex-row space-x-5 text-xl md:text-2xl">


              <span class="px-1   border border-gray-500 rounded-md">${data.Rated}</span> 
              <span>${data.Year}</span> 
              <span>${data.Genre}</span> 
              <span>${data.Runtime}</span> 

            </div>

            <div class="#row-3 flex items-center space-x-3 text-xl font-black">
              <div class="imdb flex items-center space-x-3 ">
                <img class="w-10 h-10" src="/IMDB_Logo_2016.svg" alt="">
                <span>$/{imdbValue}/10</span>
              </div>
              <div class="imdb flex items-center space-x-3">
                <img class="w-8 h-8" src="$/{rottenTomatoesLogo}" alt="">
                <span>$/{rottenTomatoesValue}%</span>
              </div>
              <div class="imdb flex items-center space-x-3">
                <img class="w-8 h-8" src="/Metacritic_logo.svg" alt="">
                <span>$/{metacriticValue}/100</span>
              </div>
            </div>

            <div class="#row-4 pt-5">
              <span class="text-md md:text-xl">
              ${data.Plot}
              </span>
            </div>
          </div>
        </div>
      </div>
        
        `;
        tvPreviewContainer.innerHTML = moviePreviewHTML;

        let productionCompaniesHtml = movie.production_companies.map(company => {
          return `
            <li class="flex items-center mb-4 space-x-5 justify-between">
              <img src="${CDN}${IMAGE_URL}${company.logo_path}" alt="${company.name}" class=" h-10 rounded-md shadow-md drop-shadow-md bg-white p-1 ">
              <span class="">${company.name}(${company.origin_country})</span>
            </li>
          `;
        }).join('');

        const movieDetailsHTML = `
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold  mb-6">Movie Info</h2>
        <div class="py-2"></div>
              <span class="">${movie.overview}</span>
                <div class="py-2"></div>
        
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-gray-200 dark:bg-gray-900 p-5 rounded-lg shadow-sm">
        
                  <h1 class="text-xl font-semibold mb-2">Language</h1>
                  <p class="mb-2">${data.Language} (${movie.original_language})</p>
                  <h1 class="text-xl font-semibold mb-2">Release Date</h1>
                  <p class="mb-2">${data.Released}</p>
                  <h1 class="text-xl font-semibold mb-2">Budget</h1>
                  <p class="mb-2">$${movie.budget}</p>
                  <h1 class="text-xl font-semibold mb-2">Revenue</h1>
                  <p class="mb-2">$${movie.revenue}</p>
                </div>
                <div class="bg-gray-200 dark:bg-gray-900 p-5 rounded-lg shadow-sm">
                <h1 class="text-xl font-semibold mb-2">Production Countries</h1>
                <p class="mb-2">${data.Country}</p>
                  <h1 class="text-xl font-semibold mb-2">Awards</h1>
                  <p class="mb-2">${data.Awards}</p>
                  <h1 class="text-xl font-semibold mb-2">Production Companies</h1>
                  <ul class="list-none pr-40 md:pr-5 lg:pr-20 items-start">
                    ${productionCompaniesHtml}
                  </ul>
        
        
                </div>
              </div>
    `;
        // Display the movie details, including the trailer
   
        tvDetailsContainer.innerHTML = movieDetailsHTML;
      })
      .catch((error) => {
        // Display the error
        allContainer.innerHTML = `<p class="p-32 text-center">${error.message}</p>`;
     
      });

      

      const ids = movie.genres.map(genre => genre.id);

      fetch(`${BASE_URL}discover/tv?api_key=${API_KEY}&with_genres=${ids.join(',')}`)
        .then((response) => response.json())
        .then((data) => {
          const maxChars = 24;
      
          // Clear the movies container
          moreLikeThisContainer.innerHTML = "";
      
          // Display the movies
          data.results.forEach((trend) => {
            // const truncatedTitle =
            //   trend.title && trend.title.length > maxChars
            //     ? trend.title.substring(0, maxChars) + ".."
            //     : trend.title;
      
            // console.log(truncatedTitle);
      
            const movieElement = document.createElement('div');
            movieElement.classList.add('swiper-slide');
      
            movieElement.innerHTML = `
            <a href="movie.html?id=${trend.id}" class="group relative flex  items-end justify-end overflow-hidden  bg-gray-100 shadow-lg h-96 rounded-xl">
            <img src="${CDN}${IMAGE_URL}${trend.poster_path}"
            loading="lazy" alt="${trend.title}" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110">
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-70">
            <button class="opacity-0 group-hover:opacity-100 transition duration-100">
  
              <svg class="w-16 h-16 " viewBox="-1 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">  <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-65.000000, -3803.000000)" fill="#ef4444"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M18.074,3650.7335 L12.308,3654.6315 C10.903,3655.5815 9,3654.5835 9,3652.8985 L9,3645.1015 C9,3643.4155 10.903,3642.4185 12.308,3643.3685 L18.074,3647.2665 C19.306,3648.0995 19.306,3649.9005 18.074,3650.7335" id="play-[#ef4444]"> </path> </g> </g> </g> </g></svg>
            </button>
          </div>
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>  
            <span class="relative flex items-center gap-1.5   mr-3 mb-3 inline-block rounded-lg    border-blue-500 bg-blue-200 px-2 py-1 text-sm text-blue-700 dark:text-blue-500 border-[2px] 0 backdrop-blur md:px-3 ">$/{truncatedTitle}
            </span>

          </a>






            `;
      
            moreLikeThisContainer.appendChild(movieElement);
          });
        })
        .catch((error) => {
          // Display the error
          moreLikeThisContainer.innerHTML = `<p>${error.message}</p>`;
        });
      
  });


