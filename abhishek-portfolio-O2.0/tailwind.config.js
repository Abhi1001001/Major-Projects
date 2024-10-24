const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}","./public/**/*.{html,js}","./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'concert': ['Concert One', 'sans-serif'],
      'josefin': ['Josefin Sans', 'sans-serif'],
      'kolker': ["Kolker Brush", 'cursive'],
      'inria': ["Inria Sans", 'sans-serif']
    },
    screens: {
      'media900': '900px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      boxShadow: {
        'blue': '0 35px 60px -15px #0078ff ',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

