/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige': '#fff8ed',
        'dark-green': '#0c382f',
        'bright-green': '#e4f223',
        'orange': '#ff9816',
        'light-green': '#027a48',
      },
    },
  },
  plugins: [],
}

