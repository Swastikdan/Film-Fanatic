/*  <header id="header" class="font-maven top-0 sticky " >
</header>
 <hr>
  */

 const headerHtml = `

 <nav class="flex flex-wrap items-center justify-between  w-full py-3 md:py-4 px-5 md:px-10 text-lg text-gray-700 bg-gray-200 dark:text-gray-100 dark:bg-gray-950 ">
 <div>
   <a href="/" class="text-gray-900 dark:text-gray-100 inline-flex items-center gap-4 text-3xl font-bold md:text-4xl font-sedgwick " aria-label="logo">
   <img class="w-10 h-10" src="/logo.png" alt="logo">
 
       Film Fanatic
      
     </a>
     
 </div>
 
 
 <button id="menu-button" type="button" class="inline-flex items-center gap-2 rounded-lg bg-gray-300 px-2.5 py-2 text-sm font-semibold text-gray-500 hover:text-white hover:bg-gray-400 focus-visible:ring active:text-gray-700 md:text-base md:hidden block ">
   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
     <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
   </svg>
 
   Menu
 </button>
 
 <button id="close-button" type="button" class="inline-flex items-center gap-2 rounded-lg bg-gray-300 px-2.5 py-2 text-sm font-semibold text-gray-500 hover:text-white hover:bg-gray-400 focus-visible:ring active:text-gray-700 md:text-base md:hidden hidden">
   <svg xmlns="http://www.w3.org/2000/svg" id="close-button" class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
     </svg>
 
   Close
 </button>
 
 <div class="hidden w-full md:flex md:items-center md:w-auto px-5 py-2 md:p-0 rounded-md bg-gray-400 dark:bg-gray-600 md:bg-inherit dark:md:bg-inherit" id="menu">
   <ul class="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 items-center px-10 md:px-2">
     <li>
       <a href="#_Home" onclick="openPage('Home', this)"  id="defaultOpen" class=" p-4 py-2 block text-lg font-semibold text-black dark:text-gray-200 transition duration-100 hover:bg-gray-200 rounded-md md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent   md:hover:text-indigo-500 md:active:text-indigo-700 md:dark:hover:text-indigo-400 md:dark:active:text-indigo-600 ">Home</a>
     </li>
     <li>
       <a href="#_Now" onclick="openPage('Now', this)" class="p-4 py-2 block text-lg font-semibold text-black dark:text-gray-200 transition duration-100 hover:bg-gray-200 rounded-md md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent   md:hover:text-indigo-500 md:active:text-indigo-700 md:dark:hover:text-indigo-400 md:dark:active:text-indigo-600 ">Now showing</a>
     </li>
     <li>
       <a href="#_genre" onclick="openPage('Genre', this)" class=" p-4 py-2 block text-lg font-semibold text-black dark:text-gray-200 transition duration-100 hover:bg-gray-200 rounded-md md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent   md:hover:text-indigo-500 md:active:text-indigo-700 md:dark:hover:text-indigo-400 md:dark:active:text-indigo-600 ">Explore By Genre</a>
     </li>
     <li>
       <a href="#_Coming-Soon" onclick="openPage('Coming', this)" class=" p-4 py-2 block text-lg font-semibold text-black dark:text-gray-200 transition duration-100 hover:bg-gray-200 rounded-md md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent   md:hover:text-indigo-500 md:active:text-indigo-700 md:dark:hover:text-indigo-400 md:dark:active:text-indigo-600 ">Upcoming</a>
     </li>
     <button id="theme-toggle" type="button" class="my-2 rounded-lg border border-gray-950 dark:border-gray-200 ">
 
 
       <div id="theme-toggle-dark-icon" type="button" class=" hidden inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 hover:text-gray-100 ring-indigo-300 hover:bg-gray-400 focus-visible:ring  active:text-gray-700 md:text-base">
           <svg  class=" w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
   
         Light
       </div>
       <div id="theme-toggle-light-icon" type="button" class=" hidden inline-flex items-center gap-2 rounded-lg bg-gray-700 px-2.5 py-2 text-sm font-semibold text-gray-500 dark:text-gray-300 hover:text-gray-300 ring-indigo-300 hover:bg-gray-800 focus-visible:ring active:text-gray-200 md:text-base">
           <svg  class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
   
          Dark
       </div>
 
       
   </button> 
   </ul>
   
 </div>
 
 </nav>
 
 `
 document.getElementById("header").innerHTML = headerHtml;
 
 const menuButton = document.querySelector('#menu-button');
 const closeButton = document.querySelector('#close-button');
 const menu = document.querySelector('#menu');
 
 menuButton.addEventListener('click', () => {
   menu.classList.toggle('hidden');
   menuButton.classList.toggle('hidden');
   closeButton.classList.toggle('hidden');
 });
 
 closeButton.addEventListener('click', () => {
   menu.classList.toggle('hidden');
   menuButton.classList.toggle('hidden');
   closeButton.classList.toggle('hidden');
 });