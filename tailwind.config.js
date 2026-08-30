/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide'
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
   plugins: [
    require('tailwind-scrollbar-hide')
   ],
};
