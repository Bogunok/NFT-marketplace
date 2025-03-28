/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}', // Враховує всі компоненти у папці src
    ],
    theme: {
      extend: {
        colors: {
          yellow: "FFA400", 
          blue: "009FFD", 
          darkBlue: "2A2A72", 
          black: "232528", 
          white: "EAF6FF"
        }
      },
      
    },
    plugins: [],
  }
  