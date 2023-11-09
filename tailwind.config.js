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
        'background-secondary': '#FAF8FF',
        'background-tertiary': '#EBE4FF',
        'border-hover': "#AA99EC",
        'border': '#D4CAFE',
        // dark
        'dark-primary': '#BAA7FF',
        'dark-secondary': '#FFFFFF',
        'dark-background': '#14121F',
        'dark-background-secondary': '#1B1525',
        'dark-background-tertiary': '#33255B',
        'dark-border-hover': '#6958AD',
        'dark-border': '#473876',
      },
    },
  },
  plugins: [],
}

