//@type {import('tailwindcss').Config}
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainPurple: "#9933FF",
        greenish: "#45FCE5",
        offwhite: "#FAF9F6"
      },
      fontFamily: {
        title: ['Libre Baskerville'],
        alt: ["Roboto"]
      }
    },
  },
  plugins: [],
}
