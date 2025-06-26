/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: 'rgb(234, 199, 1)',
        // gold: '#dbca86',
        lightBlue:"#50cde7",
        blue: '#0f33f3',
        yellow: '#ffa500',
        blue500: '#169bf1'
      },
      fontFamily: {
        cormorant: ['Cormorant', 'serif'],
        dmsans: ['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
  
}

