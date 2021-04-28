module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        100: "28rem",
      },
      colors: {
        dark: "#313131",
        dark001: "#414141",
        dark002: "#525252",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
