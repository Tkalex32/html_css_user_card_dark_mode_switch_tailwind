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
      },
      boxShadow: {
        card: "0 15px 25px rgba(0, 0, 0, 0.025)"
      },
      fontSize: {
        imgtext: ["1.4em", "1.2em"],
        h3: "0.75em"
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
