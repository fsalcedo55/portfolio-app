module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      //dark green
      darkGreen: "#2D352A",
      darkLightGreen: "#354030",
      white: "#F3DCCC",
      gray: "#8A8C80",
      darkSand: "#A66E4E",
      lightSand: "#E5B189",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
