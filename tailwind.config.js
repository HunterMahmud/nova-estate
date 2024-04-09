/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main":'#1D232A',
        "sub":'#202020'
      }
    },
    fontFamily:{
      'poppins': ['"Poppins", sans-serif']
    }
  },
  plugins: [require("daisyui")],
}

