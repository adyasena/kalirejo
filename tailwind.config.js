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
      'green': '#41644a',
      'green-dark': '#263a29',
      'orange': '#e86a33',
      'cream': '#f2e3db',
      'blue': '#114477',
      'yellow': '#ffcc33',
      'red': '#D91C1C',
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

