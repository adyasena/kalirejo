/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      'green-primary': '#609966',
      'green-light': '#EDF1D6',
      'green-dark': '#40513B',
      'orange-primary': '#FE8402',
      'blue-light': '#0093DD',
      'red-primary': '#D91C1C',
      'black': '#151515',
      'grey': '#CCCCCC',
      'white': '#F9FAFB'
    },
    extend: {},
    screens: {
      xm: "350px",
      sm: "640px",
      md: "913px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
}

