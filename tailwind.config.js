/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.handlebars',
    './public/**/*.{css,js}'
  ],
  theme: {
    extend: {
      width: {
        '128': '64rem'
      }
    },
    screens: {
      'mtme': {'max': '299px'},
    }
  },
  plugins: [
    require('tailwindcss'),
    require('@tailwindcss/forms'),
    require('autoprefixer')
  ],
}