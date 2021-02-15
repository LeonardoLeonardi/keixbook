// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: { colors: { darkM: { 1: "#242526", 2: "#3a3b3c", 3: "#18191a" } } },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
