/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // customRed: '#ff2c2c', // Add your custom color here
        customRed: '#fa003f', // Add your custom color here
      },
    },
  },
  plugins: [],
}