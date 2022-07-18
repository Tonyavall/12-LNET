/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
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