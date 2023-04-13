// Define variables
const API_KEY = "f6f845f4c051289b806ce5fd5434aac1";
const BASE_URL = "https://api.themoviedb.org/3/";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

const moviesContainer = document.getElementById("movies-container");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");


// Fetch the trending movies
fetch(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`)
  .then((response) => response.json())
  .then((data) => {
    // Display the movies
    data.results.forEach((movie) => {
      const maxChars = 18;
      const truncatedTitle =
        movie.title.length > maxChars
          ? movie.title.substring(0, maxChars) + ".."
          : movie.title;

          const releaseDate =movie.release_date;
          const year = releaseDate.substring(0, 4);
          
          

      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");
      movieElement.innerHTML = `
    <div class="w-full max-w-xs h-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-900 drop-shadow-lg font-maven">
    <a href="movie.html?id=${
      movie.id
    }" class="group relative flex  items-end justify-end overflow-hidden  bg-gray-100 shadow-lg h-96">
      <img src="${IMAGE_URL}${movie.poster_path}" loading="lazy" alt="${
        movie.title
      }" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
    
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>  
      <span class="relative flex items-center gap-1.5  mr-3 mb-3 inline-block rounded-lg  px-[3px] py-[2px] ${getColor(movie.vote_average)} font-bold text-md bg-green-100 border-[2px] border-green-300 backdrop-blur md:px-3 "><svg aria-hidden="true" class="w-5 h-5  text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>${Math.round(
        movie.vote_average * 10
      )
        .toString()
        .replace(".", "")}
      </span>
    </a>
    
    <div class="py-5 text-left px-5 flex flex-col ">
     
        <span class="text-2xl text-black dark:text-gray-100 font-semibold  ">${truncatedTitle}</span> 
    
      <div class="flex justify-between pt-5">
        <span class="text-sm text-gray-700 dark:text-gray-200">${year}</span>
        <span class="relative  inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-600 dark:text-gray-200 backdrop-blur md:px-3 md:text-sm uppercase">${
          movie.original_language
        }</span></div>
    </div>
    </div>
      `;
      moviesContainer.appendChild(movieElement);
    });
  })
  .catch((error) => {
    // Display the error
    moviesContainer.innerHTML = `<p>${error.message}</p>`;
  });

// Search for movies
function getColor(vote) {
  if (vote >= 8) {
    return "text-green-600";
  } else if (vote >= 5) {
    return "text-orange-600";
  } else {
    return "text-red-600";
  }
}

// Search for movies
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
        moviesContainer.innerHTML = `<p>${error.message}</p>`;
      });
  }
});
