const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx,js}",
    "./public/**/*.{html,js}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // screens: {
    //   sm: "640px",

    //   md: "768px",

    //   lg: "1024px",

    //   xl: "1280px",

    //   "2xl": "1536px",
    // },
  },
  darkMode: "class",
  plugins: [nextui()],
};
