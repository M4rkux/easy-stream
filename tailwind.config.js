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
      gray: {
        200: "#4F4752",
        300: "#38313A",
        400: "#2A262C",
        500: "#161316",
      },
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
