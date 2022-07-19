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
  },
  plugins: [
    require('tailwindcss'),
    require('@tailwindcss/forms'),
    require('autoprefixer')
  ],
}