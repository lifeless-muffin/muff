/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    screens: {
      sm: '480px',
      md: '655px',
      lg: '1024px',
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

    fontFamily: {
      jost: ["Jost", "Josefin Sans", "Times New Roman"],
      jostHelventica: ["Jost", "Josefin Sans", "Helvetica"],
      josefin: ["Josefin Sans", "Jost", "Georgia"],
      inter: ["Inter", "Lato", "Helvetica"]
    },

    fontSize: {
      nokiaXsm: 12,
      nokiaSm: 14,
      nokiaMd: 16,
      nokiaLg: 20,
      nokiaXl: 22,

      mobileXsm: 14,
      mobileSm: 16,
      mobileMd: 18,
      mobileLg: 22,
      mobileXl: 24,

      tabletXsm: 16,
      tabletSm: 18,
      tabletMd: 20,
      tabletLg: 22,
      tabletXl: 24,

      desktopXsm: 18,
      desktopSm: 20,
      desktopMd: 22,
      desktopLg: 24,
      desktopXl: 26,
    },

    extend: {},
  },
  plugins: [],
}
