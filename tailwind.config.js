module.exports = {
  mode: "jit",
  purge: [
    "./public/index.html"
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      }
    },
  },
  variants: {
    extend: {
      translate: ['dark'],
      display: ['dark'],
    },
  },
  plugins: [],
}
