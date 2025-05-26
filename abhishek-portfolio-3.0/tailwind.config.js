/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      concert: ['"Concert One"', "cursive"],
      josefin: ["Josefin Sans", "sans-serif"],
      kolker: ["Kolker Brush", "cursive"],
      inria: ["Inria Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
