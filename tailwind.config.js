const defaultTheme = require('tailwindcss/defaultTheme')

let colors = require('tailwindcss/colors')

delete colors.lightBlue

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ...colors,
        primary: colors.blue,
        secondary: colors.sky,
      },
      minHeight: {
        '1/4': '25%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
