/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      "white-color-1": "#D7D7D7",
      "white-color-2": "#BCBCBC",
      "white-color-2": "#A9A6A6",

      "dark-color-1": "#101110",
      "dark-color-2": "#131413",
      "dark-color-3": "#202120",

      "dim-yellow-color": "rgba(247, 223, 30, 0.1)",
      "dim-blue-color": "rgba(97, 218, 251, 0.1)",
      "dim-green-color": "rgba(83, 158, 67, 0.1)",
      "dim-red-color": "rgba(227, 79, 38, 0.1)",
      "dim-cyan-color": "rgba(24, 186, 185, 0.1);"
    },
    extend: {},
  },
  plugins: [],
}
