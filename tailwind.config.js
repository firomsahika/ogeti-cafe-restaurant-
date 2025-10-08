// tailwind.config.cjs
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "red-700",
      },
      fontFamily: {
        raleway: ["var(--font-raleway)", "sans-serif"],
      },
    },
  },
  plugins: [],
};