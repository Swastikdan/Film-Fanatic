// Define variables
const API_KEY = "f6f845f4c051289b806ce5fd5434aac1";
const BASE_URL = "https://api.themoviedb.org/3/";
const IMAGE_URL = "https://image.tmdb.org/t/p/original/";
const CDN = "https://res.cloudinary.com/dubqnzagc/image/fetch/f_auto,q_10/"
const trendingContainer = document.getElementById("trending-container");
const nowplayingContainer = document.getElementById("now-playing-container");
const upcomingContainer = document.getElementById("upcoming-container");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const prevButton1 = document.getElementById("prev-button1");
const nextButton1 = document.getElementById("next-button1");
const prevButton2 = document.getElementById("prev-button2");
const nextButton2 = document.getElementById("next-button2");
let currentPage = 1;
let totalPages = 1;




// Fetch the trending movies
function fetchTrendingMovies(page) {
  var contentDiv = document.getElementById("loading");
  var mainDiv = document.getElementById("mian-content");
  contentDiv.style.display = "block";
  mainDiv.style.display = "none";
  fetch(`${BASE_URL}trending/all/week?api_key=${API_KEY}&page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      // Set the total pages
      totalPages = data.total_pages;

      // Clear the movies container
      trendingContainer.innerHTML = "";
     
      // Display the movies
      data.results.forEach((movie) => {
        contentDiv.style.display = "none";
        mainDiv.style.display = "block";
        const maxChars = 18;
        const movieTitle = movie.name || movie.title; // Use the first available property to get movie title
        const truncatedTitle =
          movieTitle && movieTitle.length > maxChars
            ? movieTitle.substring(0, maxChars) + ".."
            : movieTitle;

            const releaseDate = movie.release_date && movie.release_date.substring(0, 4);
            const year = releaseDate || "Ongoing";
          

        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
      
        movieElement.innerHTML = `
        <div class="w-full max-w-xs h-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-black drop-shadow-lg font-maven">
        <a href="movie.html?id=${
          movie.id
        }" class="group relative flex  items-end justify-end overflow-hidden  bg-gray-100 shadow-lg h-96">
          <img src="${CDN}${IMAGE_URL}${movie.poster_path}" loading="lazy" alt="${
          movie.title
        }" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-70">
          <button class="opacity-0 group-hover:opacity-100 transition duration-100">

            <svg  class="w-16 h-16 " viewBox="-1 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>play [#ef4444]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-65.000000, -3803.000000)" fill="#ef4444"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M18.074,3650.7335 L12.308,3654.6315 C10.903,3655.5815 9,3654.5835 9,3652.8985 L9,3645.1015 C9,3643.4155 10.903,3642.4185 12.308,3643.3685 L18.074,3647.2665 C19.306,3648.0995 19.306,3649.9005 18.074,3650.7335" id="play-[#ef4444]"> </path> </g> </g> </g> </g></svg>
          </button>
        </div>
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>  
          <span class="relative flex items-center gap-1.5 text-${getColor(movie.vote_average)}-600  mr-3 mb-3 inline-block rounded-lg  px-[3px] py-[3px] ${
            movie.vote_average
          } font-bold text-md bg-${getColor(movie.vote_average)}-100 border-[2px] border-${getColor(movie.vote_average)}-300 backdrop-blur md:px-3 "><svg aria-hidden="true" class="w-5 h-5  text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>${
          Math.round(movie.vote_average * 10)
            .toString()
            .replace(".", "") / 10
        }/10
          </span>
        </a>
        
        <div class="py-5 text-left px-5 flex flex-col font-semibold ">
         
            <span class=" text-2xl text-black dark:text-gray-100 font-semibold  ">${truncatedTitle}</span> 
        
          <div class="flex justify-between pt-5">
            <span class="text-sm  text-black dark:text-gray-100">${year}</span>
            <div class="flex space-x-5 ">
            <span  class="relative   inline-block rounded-lg border border-blue-500 bg-blue-200 px-2 py-1 text-xs text-blue-700 dark:text-blue-500 backdrop-blur md:px-3 md:text-sm uppercase">${movie.media_type}</span>
            <span class="relative  inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-black dark:text-gray-100 backdrop-blur md:px-3 md:text-sm uppercase">${
              movie.original_language
            }</span>
    
            </div></div>
        </div>
        </div>
        `;
        
        trendingContainer.appendChild(movieElement);
      });

      // Disable the prev/next buttons if necessary
      if (currentPage === 1) {
        prevButton.disabled = true;
      } else {
        prevButton.disabled = false;
      }
      if (currentPage === totalPages) {
        nextButton.disabled = true;
      } else {
        nextButton.disabled = false;
      }
    })
    .catch((error) => {
      // Display the error
      trendingContainer.innerHTML = `<p>${error.message}</p>`;
    });
}

// Display the first page of trending movies by default
fetchTrendingMovies(currentPage);

// Add event listeners for the prev/next buttons
prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchTrendingMovies(currentPage);
  }
});

nextButton.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    fetchTrendingMovies(currentPage);
  }
});

// now playing

function fetchnowplayingMovies(page) {
  fetch(`${BASE_URL}movie/now_playing?api_key=${API_KEY}&page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      // Set the total pages
      totalPages = data.total_pages;

      // Clear the movies container
      nowplayingContainer.innerHTML = "";

      // Display the movies
      data.results.forEach((movie1) => {
        const maxChars = 18;
        const truncatedTitle =
          movie1.title && movie1.title.length > maxChars
            ? movie1.title.substring(0, maxChars) + ".."
            : movie1.title;
        const releaseDate =
          movie1.release_date && movie1.release_date.substring(0, 4);
        const year = releaseDate || "";

        // do something with truncatedTitle and year
      

        const movieElement1 = document.createElement("div");
        movieElement1.classList.add("movie1");
        movieElement1.innerHTML = `
        <div class="w-full max-w-xs h-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-black drop-shadow-lg font-maven">
        <a href="movie.html?id=${
          movie1.id
        }" class="group relative flex  items-end justify-end overflow-hidden  bg-gray-100 shadow-lg h-96">
          <img src="${CDN}${IMAGE_URL}${movie1.poster_path}" loading="lazy" alt="${
          movie1.title
        }" class="absolute inset-0 h-full w-full object-cover object-center transition duration-100 group-hover:scale-110" />
          <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-70">
          <button class="opacity-0 group-hover:opacity-100 transition duration-100">

            <svg  class="w-16 h-16 " viewBox="-1 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>play [#ef4444]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-65.000000, -3803.000000)" fill="#ef4444"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M18.074,3650.7335 L12.308,3654.6315 C10.903,3655.5815 9,3654.5835 9,3652.8985 L9,3645.1015 C9,3643.4155 10.903,3642.4185 12.308,3643.3685 L18.074,3647.2665 C19.306,3648.0995 19.306,3649.9005 18.074,3650.7335" id="play-[#ef4444]"> </path> </g> </g> </g> </g></svg>
          </button>
        </div>
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>  
          <span class="relative flex items-center gap-1.5 text-${getColor(movie1.vote_average)}-600  mr-3 mb-3 inline-block rounded-lg  px-[3px] py-[3px] ${
            movie1.vote_average
          } font-bold text-md bg-${getColor(movie1.vote_average)}-100 border-[2px] border-${getColor(movie1.vote_average)}-300 backdrop-blur md:px-3 "><svg aria-hidden="true" class="w-5 h-5  text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>${
          Math.round(movie1.vote_average * 10)
            .toString()
            .replace(".", "") / 10
        }/10
          </span>
        </a>
        
        <div class="py-5 text-left px-5 flex flex-col font-semibold ">
         
            <span class=" text-2xl text-black dark:text-gray-100 font-semibold  ">${truncatedTitle}</span> 
        
          <div class="flex justify-between pt-5">
            <span class="text-sm  text-black dark:text-gray-100">${year}</span>
            <div class="flex space-x-5 ">
            <span  class="relative   inline-block rounded-lg border border-blue-500 bg-blue-200 px-2 py-1 text-xs text-blue-700 dark:text-blue-500 backdrop-blur md:px-3 md:text-sm uppercase">${movie1.media_type}</span>
            <span class="relative  inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-black dark:text-gray-100 backdrop-blur md:px-3 md:text-sm uppercase">${
              movie1.original_language
            }</span>
    
            </div></div>
        </div>
        </div>
        `;
        nowplayingContainer.appendChild(movieElement1);
      });

      // Disable the prev/next buttons if necessary
      if (currentPage === 1) {
        prevButton1.disabled = true;
      } else {
        prevButton1.disabled = false;
      }
      if (currentPage === totalPages) {
        nextButton1.disabled = true;
      } else {
        nextButton1.disabled = false;
      }
    })
    .catch((error) => {
      // Display the error
      nowplayingContainer.innerHTML = `<p>${error.message}</p>`;
    });
}

// Display the first page of trending movies by default
fetchnowplayingMovies(currentPage);

// Add event listeners for the prev/next buttons
prevButton1.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchnowplayingMovies(currentPage);
  }
});

nextButton1.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    fetchnowplayingMovies(currentPage);
  }
});


function upcomingMovies(page) {
  fetch(`${BASE_URL}movie/upcoming?api_key=${API_KEY}&page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      // Set the total pages
      totalPages = data.total_pages;

      // Clear the movies container
      upcomingContainer.innerHTML = "";

      // Display the movies
      data.results.forEach((movie2) => {
        const maxChars = 18;
        const truncatedTitle =
          movie2.title && movie2.title.length > maxChars
            ? movie2.title.substring(0, maxChars) + ".."
            : movie2.title;
        const releaseDate =
          movie2.release_date && movie2.release_date.substring(0, 4);
        const year = releaseDate || "";

        // do something with truncatedTitle and year
      

        const movieElement2 = document.createElement("div");
        movieElement2.classList.add("movie2");
        movieElement2.innerHTML = `
        <div class="w-full max-w-xs h-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-black drop-shadow-lg font-maven">
        <a href="movie.html?id=${
          movie2.id
        }" class="group relative flex  items-end justify-end overflow-hidden  bg-gray-100 shadow-lg h-96">
          <img src="${CDN}${IMAGE_URL}${movie2.poster_path}" loading="lazy" alt="${
          movie2.title
        }" class="absolute inset-0 h-full w-full object-cover object-center transition duration-100 group-hover:scale-110" />
          <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-70">
          <button class="opacity-0 group-hover:opacity-100 transition duration-100">

            <svg  class="w-16 h-16 " viewBox="-1 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>play [#ef4444]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-65.000000, -3803.000000)" fill="#ef4444"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M18.074,3650.7335 L12.308,3654.6315 C10.903,3655.5815 9,3654.5835 9,3652.8985 L9,3645.1015 C9,3643.4155 10.903,3642.4185 12.308,3643.3685 L18.074,3647.2665 C19.306,3648.0995 19.306,3649.9005 18.074,3650.7335" id="play-[#ef4444]"> </path> </g> </g> </g> </g></svg>
          </button>
        </div>
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>  
          <span class="relative flex items-center gap-1.5 text-${getColor(movie2.vote_average)}-600  mr-3 mb-3 inline-block rounded-lg  px-[3px] py-[3px] ${
            movie2.vote_average
          } font-bold text-md bg-${getColor(movie2.vote_average)}-100 border-[2px] border-${getColor(movie2.vote_average)}-300 backdrop-blur md:px-3 "><svg aria-hidden="true" class="w-5 h-5  text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>${
          Math.round(movie2.vote_average * 10)
            .toString()
            .replace(".", "") / 10
        }/10
          </span>
        </a>
        
        <div class="py-5 text-left px-5 flex flex-col font-semibold ">
         
            <span class=" text-2xl text-black dark:text-gray-100 font-semibold  ">${truncatedTitle}</span> 
        
          <div class="flex justify-between pt-5">
            <span class="text-sm  text-black dark:text-gray-100">${year}</span>
            <div class="flex space-x-5 ">
            <span  class="relative   inline-block rounded-lg border border-blue-500 bg-blue-200 px-2 py-1 text-xs text-blue-700 dark:text-blue-500 backdrop-blur md:px-3 md:text-sm uppercase">${movie2.media_type}</span>
            <span class="relative  inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-black dark:text-gray-100 backdrop-blur md:px-3 md:text-sm uppercase">${
              movie2.original_language
            }</span>
    
            </div></div>
        </div>
        </div>
        `;
        upcomingContainer.appendChild(movieElement2);
      });

      // Disable the prev/next buttons if necessary
      if (currentPage === 1) {
        prevButton2.disabled = true;
      } else {
        prevButton2.disabled = false;
      }
      if (currentPage === totalPages) {
        nextButton2.disabled = true;
      } else {
        nextButton2.disabled = false;
      }
    })
    .catch((error) => {
      // Display the error
      upcomingContainer.innerHTML = `<p>${error.message}</p>`;
    });
}

// Display the first page of trending movies by default
upcomingMovies(currentPage);

// Add event listeners for the prev/next buttons
prevButton2.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    upcomingMovies(currentPage);
  }
});

nextButton2.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    upcomingMovies(currentPage);
  }
});


// Search for movies
function getColor(vote) {
  if (vote >= 7) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}


searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value;

  if (searchTerm) {
    // Fetch the search results
    fetch(`${BASE_URL}search/multi?api_key=${API_KEY}&query=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        // Redirect to the search results page
        window.location.href = `search.html?query=${searchTerm}`;
      })
      .catch((error) => {
        // Display the error
        trendingContainer.innerHTML = `<p>${error.message}</p>`;
      });
  }
});

/*             // Example genre list data
const genreList = {"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]};

// Example movie data with genre IDs
const movieData = {"genre_ids":movie.genre_ids};

// Find genre names for the given movie
const genreNames = movieData.genre_ids.map(id => genreList.genres.find(genre => genre.id === id).name); */
