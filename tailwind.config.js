/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'greenblue': '#37ad80',
      'red': '#ff4444',
      'black': '#242424',
      'white': '#ffffff',
      'grey': '#aaaaaa',
      'darkpink': '#ff8a8a',
      'lightpink': '#ffbbbb'
    },
    extend: {},
    fontFamily: {
      decor: ["Lit-Decor"],
    },
  
  },
  plugins: [],
}