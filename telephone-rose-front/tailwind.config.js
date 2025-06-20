/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        roseFonce: '#AD1457',
        roseClair: '#F48FB1',
        pourpre: '#8E24AA',
        violetFonce: '#4A148C',
        noirElegant: '#1C1C1E',
        or: '#FFD700',
      },
      fontFamily: {
        glamour: ['"Playfair Display"', 'serif'],
        elegant: ['"Raleway"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
