// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: { dark: { 1: "#121212" } },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
