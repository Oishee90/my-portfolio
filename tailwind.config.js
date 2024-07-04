/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tech-background': "url('/src/assets/66441.jpg')",
      },
    },
  },
  plugins: [  require('daisyui'),],
}

