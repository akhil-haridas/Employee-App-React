module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f2f2f2",
          200: "#e8e8e8",
          300: "#e5e5e5",
          500: "#949c9e",
          900: "#1b1b2f",
          "900_01": "#1b1a2e",
        },
        blue: { 50: "#edf8ff", 500: "#1da1f2" },
        lime: { 900: "#a65b3c" },
        red: { 400: "#e3405a" },
        deep_orange: { 100: "#ffc89f", 300: "#f9996d" },
        blue_gray: { 800: "#1f4068", 900: "#323238" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { sfprodisplay: "SF Pro Display", roboto: "Roboto" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
