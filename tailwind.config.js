/** @type {import('tailwindcss').Config} */
/*global module*/
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: {
        100: "#CBB1D3",
        200: "#E7ADFF",
        300: "#C133FF",
        400: "#B100FF",
        500: "#8E00CC",
      },
    },
  },
  plugins: [],
};
