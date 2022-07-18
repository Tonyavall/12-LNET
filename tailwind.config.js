/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.handlebars',
    './public/**/*.{css,js}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('@tailwindcss/forms'),
    require('autoprefixer')
  ],
}