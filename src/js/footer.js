
const footerHtml = `<div
class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24 items-center"
>


<div class="lg:flex lg:items-end lg:justify-between">
  <div>
    <div class="flex justify-center  lg:justify-start">
      <a href="/" class="text-gray-900 dark:text-gray-100 inline-flex items-center gap-4 text-3xl font-bold md:text-4xl lg:text-5xl font-sedgwick " aria-label="logo">
        <img class="w-10 h-10 lg:w-14 lg:h-14" src="/logo.png" alt="logo">
      
            Film Fanatic
           
          </a>
    </div>


  </div>

  <nav aria-label="Footer Nav" class="mt-12 lg:mt-0">
    <ul class="mt-12 flex justify-center gap-6 md:gap-8">
      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/SwastikDan" class="text-gray-400 hover:text-gray-500"><span class="sr-only">Facebook</span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z">
          </path>
      </svg></a>
      </li>

      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/swastikdan" class="text-gray-400 hover:text-gray-500"><span class="sr-only">linkedin</span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z">
          </path>
      </svg></a>
      </li>

      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Swastikdan" class="text-gray-400 hover:text-gray-500"><span class="sr-only">GitHub</span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
          </path>
      </svg></a>
      </li>

      
    </ul>
  </nav>
</div>
<p class="mt-12 ">
<p class="mt-8 text-base  leading-6 lg:text-right text-center dark:text-white text-black ">Copyright © <span id="year"></span>&nbsp;. &nbsp; Made with <span class="text-red-600" >❤</span> By <a target=" _blank" rel="noopener noreferrer" class="hover:underline hover:underline-offset-4" href="https://www.linkedin.com/in/swastikdan">Swastik Dan</span>
</span> 

</div>`;
document.getElementById("footer").innerHTML = footerHtml;
const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearElement.innerText = currentYear;
