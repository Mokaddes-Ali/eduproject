/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '40': '10rem',
        '50': '12.5rem',
        '60': '15rem',
        '70': '17.5rem',
        '80': '20rem',
        '90': '22.5rem',
      },
      height: {
        '20': '5rem',
        '25': '6.25rem',
        '30': '7.5rem',
        '35': '8.75rem',
        '40': '10rem',
        '45': '11.25rem',
      }
    },
  },
  plugins: [],
}

