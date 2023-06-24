// Nav
const headerHtml = `

<nav
    class="flex flex-wrap items-center justify-between w-full py-3 md:py-4 px-5 md:px-10 text-lg text-gray-700 bg-gray-200 dark:text-gray-100 dark:bg-gray-950">
    <div>
        <a href="/"
            class="text-gray-900 dark:text-gray-100 inline-flex items-center gap-4 text-3xl font-black md:text-4xl"
            aria-label="logo"><img class="w-10 h-10"
                src="https://res.cloudinary.com/dytlajwyl/image/upload/v1687588157/Film-Fanatic/logo_wr8if9.png"
                alt="logo" />
            Film Fanatic</a>
    </div>
    <div class="mobile-buttons flex space-x-10">

        <div type="button" class="hs-dropdown  md:hidden py-3 px-4 " data-hs-dropdown-placement="bottom-right" data-hs-dropdown-offset="30">
            <a class="hs-dropdown-toggle hs-dark-mode group flex items-center text-gray-600  font-medium dark:text-gray-400 " href="javascript:;">
              <svg class="hs-dark-mode-active:hidden block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
              </svg>
              <svg class="hs-dark-mode-active:block hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
              </svg>
            </a>
          
            <div id="selectThemeDropdown" class="hs-dropdown-menu hs-dropdown-open:opacity-100 mt-2 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 origin-bottom-left bg-white shadow-md rounded-lg p-2 space-y-1 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700">
              <a class="hs-auto-mode-active:bg-gray-100 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="javascript:;" data-hs-theme-click-value="auto">
                Auto (system default)
              </a>
              <a class="hs-default-mode-active:bg-gray-100 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="javascript:;" data-hs-theme-click-value="default">
                Default (light mode)
              </a>
              <a class="hs-dark-mode-active:bg-gray-700 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="javascript:;" data-hs-theme-click-value="dark">
                Dark
              </a>
            
          </div>
</div>
    <button id="menu-button" type="button"
        class="inline-flex items-center gap-2 rounded-lg bg-gray-300 px-2.5 py-2 text-sm font-semibold text-gray-500 hover:text-white hover:bg-gray-400 focus-visible:ring active:text-gray-700 md:text-base lg:hidden block">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd" />
        </svg>Menu</button><button id="close-button" type="button"
        class="inline-flex items-center gap-2 rounded-lg bg-gray-300 px-2.5 py-2 text-sm font-semibold text-gray-500 hover:text-white hover:bg-gray-400 focus-visible:ring active:text-gray-700 md:text-base lg:hidden hidden">
        <svg xmlns="http://www.w3.org/2000/svg" id="close-button" class="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>Close
    </button></div>
    <div class="hidden w-full lg:flex lg:items-center lg:w-auto px-5 py-2 lg:p-0 rounded-md bg-gray-400 dark:bg-gray-600 lg:bg-inherit dark:lg:bg-inherit"
        id="menu">
        <ul class="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 items-center px-10 md:px-2">
            <li>
                <a href="#_Home" onclick='openPage("Home",this)' id="defaultOpen"
                    class="p-4 py-2 block text-lg font-semibold text-black dark:text-gray-200 transition duration-100 hover:bg-gray-200 rounded-md md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent md:hover:text-indigo-500 md:active:text-indigo-700 md:dark:hover:text-indigo-400 md:dark:active:text-indigo-600">Home</a>
            </li>
            <li>
                <a href="#_Now" onclick='openPage("Now",this)'
                    class="p-4 py-2 block text-lg font-semibold text-black dark:text-gray-200 transition duration-100 hover:bg-gray-200 rounded-md md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent md:hover:text-indigo-500 md:active:text-indigo-700 md:dark:hover:text-indigo-400 md:dark:active:text-indigo-600">Now
                    showing</a>
            </li>
            <li>
                <a href="#_genre" onclick='openPage("Genre",this)'
                    class="p-4 py-2 block text-lg font-semibold text-black dark:text-gray-200 transition duration-100 hover:bg-gray-200 rounded-md md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent md:hover:text-indigo-500 md:active:text-indigo-700 md:dark:hover:text-indigo-400 md:dark:active:text-indigo-600">Explore
                    By Genre</a>
            </li>
            <li>
                <a href="#_Coming-Soon" onclick='openPage("Coming",this)'
                    class="p-4 py-2 block text-lg font-semibold text-black dark:text-gray-200 transition duration-100 hover:bg-gray-200 rounded-md md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent md:hover:text-indigo-500 md:active:text-indigo-700 md:dark:hover:text-indigo-400 md:dark:active:text-indigo-600">Upcoming</a>
            </li>

            <div type="button" class="hs-dropdown  hidden md:block py-3 px-4 " data-hs-dropdown-placement="bottom-right" data-hs-dropdown-offset="30">
                <a class="hs-dropdown-toggle hs-dark-mode group flex items-center text-gray-600  font-medium dark:text-gray-400 " href="javascript:;">
                  <svg class="hs-dark-mode-active:hidden block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                  </svg>
                  <svg class="hs-dark-mode-active:block hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                  </svg>
                </a>
              
                <div id="selectThemeDropdown" class="hs-dropdown-menu hs-dropdown-open:opacity-100 mt-2 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 origin-bottom-left bg-white shadow-md rounded-lg p-2 space-y-1 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700">
                  <a class="hs-auto-mode-active:bg-gray-100 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="javascript:;" data-hs-theme-click-value="auto">
                    System Default
                  </a>
                  <a class="hs-default-mode-active:bg-gray-100 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="javascript:;" data-hs-theme-click-value="default">
                   Light Mode
                  </a>
                  <a class="hs-dark-mode-active:bg-gray-700 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="javascript:;" data-hs-theme-click-value="dark">
                    Dark
                  </a>
                
              </div>
</div>
        </ul>
    </div>
</nav>


`;

document.getElementById("header").innerHTML = headerHtml;
