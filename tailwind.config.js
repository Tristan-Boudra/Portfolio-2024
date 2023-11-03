/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#6463F6',
        'secondary': '#292935',
        // dark
        'dark-primary': '#BAA7FF',
        'dark-secondary': '#FFFFFF',
        'dark-background': '#14121F',
      },
    },
  },
  plugins: [],
}

