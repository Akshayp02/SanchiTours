/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:
      {
        primary: "#4CAF50",
        secondary: "#FF9800",
        accent: "#009688",
        button: "#FE9A03FC",
      }
    },
  },
  plugins: [],
}

