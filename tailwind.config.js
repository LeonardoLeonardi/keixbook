// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: { colors: { darkM: { 1: "#121212" } } },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
