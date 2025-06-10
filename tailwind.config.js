/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
      },
      boxShdow: {
        top: "0px 12px 0px 0px rgba(0,0,0,0.9) inset"
      }
    },
  },
  plugins: [],
};
