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
      "white-color-3": "#A9A6A6",
      "white-color-4": "rgb(177, 177, 177)",

      "dark-color-1": "#101110",
      "dark-color-2": "#131413",
      "dark-color-3": "#202120",
      
      "gray-color-1": "#242424",
      "gray-color-2": "#2B2C2B",
      
      "yellow-color-1": "#E39600",
      "pink-color-1": "#EA4C89",
      "purple-color-1": "#8F48EB",
      "blue-color-1": "#1DA1F2",

      "dim-yellow-color": "rgba(247, 223, 30, 0.1)",
      "dim-blue-color": "rgba(97, 218, 251, 0.1)",
      "dim-green-color": "rgba(83, 158, 67, 0.1)",
      "dim-red-color": "rgba(227, 79, 38, 0.1)",
      "dim-cyan-color": "rgba(24, 186, 185, 0.1)", 
    },

    fontFamily: {
      jost: ['Jost', '"Josefin Sans"', '"Times New Roman"'],
      jostHelventica: ['"Jost"', '"Josefin Sans"', '"Helvetica"'],
      josefin: ['"Josefin Sans"', '"Jost"', 'Georgia'],
      inter: ['"Inter"', '"Lato"', '"Helvetica"']
    },

    fontSize: {
      nokiaXsm: 14,
      nokiaSm: 16,
      nokiaMd: 20,
      nokiaLg: 26,
      nokiaXl: 34,

      mobileXsm: 16,
      mobileSm: 18,
      mobileMd: 22,
      mobileLg: 28,
      mobileXl: 36,

      tabletXsm: 18,
      tabletSm: 20,
      tabletMd: 24,
      tabletLg: 30,
      tabletXl: 38,

      desktopXsm: 20,
      desktopSm: 22,
      desktopMd: 26,
      desktopLg: 32,
      desktopXl: 40,
    },

    extend: {},
  },
  plugins: [],
}
