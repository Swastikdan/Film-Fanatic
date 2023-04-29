/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./index.html" ,"./search.html" ,"./movie.html","./tv.html","./src/**/*.{html,js}" , "node_modules/preline/dist/*.js"],

  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
   
],
}

