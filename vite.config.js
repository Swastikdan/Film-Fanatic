// vite.config.js
const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        movie: resolve(__dirname, 'movie.html'),
        search: resolve(__dirname, 'search.html'),
        tv: resolve(__dirname, 'tv.html')
      }
    }
  }
}