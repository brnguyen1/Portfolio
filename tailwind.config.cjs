/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown': '#7F4707',
        'light-brown': '#BFA694',
        'dark-blue': '#2C3B59',
        'light-blue': '#415E8C',
        'light-orange': '#D97B59',
        'tan': '#f9f9f7',
      },
      spacing: {
      'landing': '42rem',
      }
    },
  },
  plugins: [],
}
