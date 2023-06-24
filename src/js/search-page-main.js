const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "f6f845f4c051289b806ce5fd5434aac1";
const IMG_URL = "https://image.tmdb.org/t/p/original";
const CDN = "https://res.cloudinary.com/demo/image/fetch/f_auto,q_10/";

const urlParams = new URLSearchParams(window.location.search);
const searchTerm = urlParams.get("query");

if (searchTerm) {
  searchMovies(
    `${BASE_URL}search/multi?api_key=${API_KEY}&query=${searchTerm}`
  );
}
const genreList = {
  genres: [
    { id: 28, name: "🏃‍♂️ Action" },
    { id: 12, name: "🎒 Adventure" },
    { id: 16, name: "🖌️ Animation" },
    { id: 35, name: "🤪 Comedy" },
    { id: 80, name: "🚨 Crime" },
    { id: 99, name: "📹 Documentary" },
    { id: 18, name: "🎭 Drama" },
    { id: 10751, name: "🏠 Family" },
    { id: 14, name: "🦄 Fantasy" },
    { id: 36, name: "🏛️ History" },
    { id: 27, name: "👻 Horror" },
    { id: 10402, name: "🎵 Music" },
    { id: 9648, name: "🕵️‍♂️Mystery" },
    { id: 10749, name: "💘 Romance" },
    { id: 878, name: "🤖 Science Fiction" },
    { id: 10770, name: "📺 TV Movie" },
    { id: 53, name: "🔪 Thriller" },
    { id: 10752, name: "⚔️ War" },
    { id: 37, name: "🤠 Western" },
  ],
};
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
  const movieContainer = document.querySelector("#movie-container");
  movieContainer.innerHTML = `       <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
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

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showMovies(data.results);
    })
    .catch((error) => {
      movieContainer.innerHTML = `
          <span class="text-md md:text-2xl font-light text-black dark:text-white">
            Oops! 😬 Something went wrong! 🙈 Please try again later! 🕒 <span>
            <h2>Error: ${error.message}</h2>
            <p>Line: ${error.line}</p>
            <p>Column: ${error.column}</p>
            <p>Stack Trace: ${error.stack}</p>
          </span>`;
    });
}

function showMovies(movies) {
  const movieContainer = document.querySelector("#movie-container");
  movieContainer.innerHTML = "";

  if (movies.length === 0) {
    movieContainer.innerHTML = `
      <div class=" py-10 flex flex-col space-y-5 text-center ">
      <h2 class=" text-2xl font-semibold  text-black dark:text-white" >Oops! 🙇🏽‍♂️ Nothing found </h2>
      <span class="text-sm md:text-md font-light text-black dark:text-white"  > Did you spell it right? Double check and try again! ☕️</span> </div>  `;
  } else {
    const Title = movies[0].title || movies[0].name;
    const movieData = { genre_ids: movies[0].genre_ids };
    const genreNames = movieData.genre_ids
      ? movieData.genre_ids
        .map((id) => genreList.genres.find((genre) => genre.id === id)?.name)
        .filter((name) => name)
      : [];

    const genre = genreNames.length === 0 ? "Not Found" : genreNames.join(", ");

    genre;

    const innerHtml = genreNames
      .map(
        (genre) => `
          <span class="inline-flex items-center justify-center p-[0.15rem] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-full backdrop-blur">
            <span class="bg-gray-50 text-[12px] rounded-full px-2 py-1 text-black text-center uppercase">${genre}</span>
          </span>`
      )
      .join("");

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    let imagePath;
    let overview;
    let votecount;
    let voteaverage;
    let mediatype;
    let originallanguage;
    let displayMediatype;
    movies[0].poster_path;
    if (movies[0].poster_path === undefined) {
      imagePath =
        CDN + "https://via.placeholder.com/300x450?text=Image+Not+Found";
    } else {
      imagePath = CDN + IMG_URL + movies[0].poster_path;
    }
    if (movies[0].overview === undefined) {
      overview = "No Description Found";
    } else {
      overview = movies[0].overview;
    }
    if (movies[0].vote_count === undefined) {
      votecount = "0";
    } else {
      votecount = movies[0].vote_count;
    }
    if (movies[0].vote_average === undefined) {
      voteaverage = "0";
    } else {
      voteaverage = movies[0].vote_average;
    }
    if (movies[0].media_type === undefined) {
      mediatype = "Not Found";
    } else {
      mediatype = movies[0].media_type;
    }
    if (movies[0].original_language === undefined) {
      originallanguage = "en";
    } else {
      originallanguage = movies[0].original_language;
    }
    if (mediatype === "movie") {
      displayMediatype = "Movie";
    } else {
      displayMediatype = "TV";
    }

    movieEl.innerHTML = `
   

    <div
    class="font-maven relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-3xl shadow-lg p-3 max-w-sm md:max-w-5xl mx-auto border border-white bg-gray-100 dark:bg-gray-900 block overflow-hidden"
  >
    <span
      class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
    ></span>
    <div
      class="w-full md:w-1/3 bg-g-gray-100 dark:bg-gray-900 block grid place-items-center py-3"
    >
      <img
        src="${imagePath}"
        alt="${Title}"
        class="rounded-3xl max-h-96 w-96 object-cover"
      />
    </div>
    <div
      class="w-full md:w-2/3 bg-g-gray-100 dark:bg-gray-900 block flex flex-col space-y-2 p-3"
    >
      <h3
        class="font-black text-gray-800 dark:text-gray-200 md:text-4xl text-3xl pt-5"
      >
      ${Title}
      </h3>

      <p class="md:text-xl text-gray-500 dark:text-gary-300 text-lg pb-3">
      ${truncateOverview(overview)}
      </p>
      <div class="flex justify-between  items-center justify-start text-xs md:text-sm pb-3">
      <div class="flex flex-col sm:flex-row items-center px-2 md:px-3 py-2 ring-1 ring-gray-950 dark:ring-1 dark:ring-gray-100 bg-gray-100 rounded-xl max-w-[11rem] md:max-w-[13rem]">
      <div class="items-center flex ">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
        <span class=" ${getColor(voteaverage)} font-bold  sm:ml-1">
        ${Math.round(voteaverage * 10)
        .toString()
        .replace(".", "") / 10
      }/10
          
          </span>
          </div><span class="text-gray-500 font-bold sm:ml-1 ">(${votecount} reviews)</span>
      </div>




      <div class="flex items-center space-x-3">
      <span  class="relative   inline-block rounded-xl border  px-3  md:px-6 py-2 border-blue-500 bg-blue-200   text-blue-700 dark:text-blue-500 backdrop-blur   uppercase">${mediatype}</span>
      <span  class="relative   inline-block rounded-xl border  px-3 md:px-6 py-2 border-blue-500 bg-blue-200   text-blue-700 dark:text-blue-500 backdrop-blur   uppercase">
      ${originallanguage}
      </span></div>
      

      </div>

      <div class=" space-x-2 space-y-3 items-start font-thin pt-3  ">
${innerHtml}
        
      </div>
<br>

      <a
      href="${mediatype}.html?id=${movies[0].id}"
      class="group flex flex-col rounded-xl hover:dark:bg-gray-200 hover:bg-gray-950 px-5 py-3   hover:transition-shadow hover:shadow-lg w-60  text-blue-600 hover:text-gray-50 dark:text-gray-50 hover:dark:text-black"
    >
      <div
        class=" inline-flex items-center gap-2 "
      >
        <p class="font-bold sm:text-lg ">Visit ${displayMediatype} Page</p>
    
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 transition group-hover:translate-x-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </a>
    


    </div>
  </div>

    `;
    movieContainer.appendChild(movieEl);

    if (movies.length > 1) {
      const viewMoreButton = document.querySelector("#view-more-button");
      viewMoreButton.addEventListener("click", () => {
        let number_movies;
        if (movies.length < 10) {
          number_movies = movies.length;
        } else {
          number_movies = 11;
        }

        for (let i = 1; i < number_movies; i++) {
          const movieEl = document.createElement("div");
          movieEl.classList.add("movie");

          const Title = movies[i].title || movies[i].name;
          const movieData = { genre_ids: movies[i].genre_ids };
          const genreNames = movieData.genre_ids
            ? movieData.genre_ids
              .map(
                (id) =>
                  genreList.genres.find((genre) => genre.id === id)?.name
              )
              .filter((name) => name)
            : [];

          const genre =
            genreNames.length === 0 ? "Not Found" : genreNames.join(", ");

          // (genre);

          const innerHtml = genreNames
            .map(
              (genre) => `
            <span class="inline-flex items-center justify-center p-[0.15rem] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-full backdrop-blur">
              <span class="bg-gray-50 text-[12px] rounded-full px-2 py-1 text-black text-center uppercase">${genre}</span>
            </span>`
            )
            .join("");

          movies[i].poster_path;
          if (movies[i].poster_path === undefined) {
            imagePath =
              CDN + "https://via.placeholder.com/300x450?text=Image+Not+Found";
          } else {
            imagePath = CDN + IMG_URL + movies[i].poster_path;
          }
          if (movies[i].overview === undefined) {
            overview = "No Description Found";
          } else {
            overview = movies[i].overview;
          }
          if (movies[i].vote_count === undefined) {
            votecount = "0";
          } else {
            votecount = movies[i].vote_count;
          }
          if (movies[i].vote_average === undefined) {
            voteaverage = "0";
          } else {
            voteaverage = movies[i].vote_average;
          }
          if (movies[i].media_type === undefined) {
            mediatype = "Not Found";
          } else {
            mediatype = movies[i].media_type;
          }
          if (movies[i].original_language === undefined) {
            originallanguage = "en";
          } else {
            originallanguage = movies[i].original_language;
          }

          movieEl.innerHTML = `

          <div
          class="font-maven relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-3xl shadow-lg p-3 max-w-sm md:max-w-5xl mx-auto border border-white bg-gray-100 dark:bg-gray-900 block overflow-hidden"
        >
          <span
            class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
          ></span>
          <div
            class="w-full md:w-1/3 bg-g-gray-100 dark:bg-gray-900 block grid place-items-center py-3"
          >
            <img
              src="${imagePath}"
              alt="${Title}"
              class="rounded-3xl max-h-96 w-96 object-cover"
            />
          </div>
          <div
            class="w-full md:w-2/3 bg-g-gray-100 dark:bg-gray-900 block flex flex-col space-y-2 p-3"
          >
            <h3
              class="font-black text-gray-800 dark:text-gray-200 md:text-4xl text-3xl pt-5"
            >
            ${Title}
            </h3>
      
            <p class="md:text-xl text-gray-500 dark:text-gary-300 text-lg pb-3">
            ${overview}
            </p>
            <div class="flex justify-between  items-start text-xs md:text-sm pb-3">
            <div class="flex flex-col sm:flex-row items-center px-2 md:px-3 py-2 ring-1 ring-gray-950 dark:ring-1 dark:ring-gray-100 bg-gray-100 rounded-xl  ">
            <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
              <span class=" ${getColor(voteaverage)} font-bold  sm:ml-1">
              ${Math.round(voteaverage * 10)
              .toString()
              .replace(".", "") / 10
            }/10
    </span> </div>            <span class="text-gray-500 font-bold sm:ml-1">(${votecount} reviews)
              </span>
            </div>
            <div class="flex items-center space-x-3">
            <span  class="relative   inline-block rounded-xl border px-4 md:px-6 py-2 border-blue-500 bg-blue-200   text-blue-700 dark:text-blue-500 backdrop-blur   uppercase">${mediatype}</span>
            <span  class="relative   inline-block rounded-xl border px-4 md:px-6 py-2 border-blue-500 bg-blue-200   text-blue-700 dark:text-blue-500 backdrop-blur   uppercase">${originallanguage}</span></div>
            
      
            </div>
      
            <div class=" space-x-2 space-y-3 items-start font-thin pt-3  ">
      ${innerHtml}
              
            </div>
      <br>
            <a
            href="${mediatype}.html?id=${movies[i].id}"
            class="group flex flex-col rounded-xl hover:bg-white dark:hover:bg-black  px-5 py-3   hover:transition-shadow hover:shadow-lg w-60"
          >
            <div
              class=" inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 dark:text-blue-200 hover:dark:text-white "
            >
              <p class="font-bold sm:text-lg ">Visit Movie Page</p>
          
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 transition group-hover:translate-x-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </a>

          </div>
        </div>
         
          `;
          movieContainer.appendChild(movieEl);
        }
        viewMoreButton.style.display = "none";
      });
      viewMoreButton.style.display = "block";
    }
  }
}
function truncateOverview(overview) {
  if (overview && overview.split(" ").length > 25) {
    return overview.split(" ").slice(0, 25).join(" ") + " ...";
  } else {
    return overview;
  }
}

function getColor(vote) {
  if (vote >= 7) {
    return "text-green-600";
  } else if (vote >= 5) {
    return "text-orange-600";
  } else {
    return "text-red-600";
  }
}
