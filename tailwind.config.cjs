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
      },
      keyframes: {
        menuTransitionUp: {
          '0%': {
            right: '10%',
            top: '45%',
            'font-size': '4.5rem'
          },
          '100%': {
            right: '1.5rem',
            top: '1.5rem',
            'font-size': '1.25rem'

          }
        },
        menuTransitionDown: {
          '0%': {
            right: '1.5rem',
            top: '1.5rem',
            'font-size': '1.25rem'

          },
          '100%': {
            right: '10%',
            top: '45%',
            'font-size': '4.5rem'
          }
        },
        homeSlide: {
          '0%': {
            left:'-100rem'
          },
          '100%': {
            left: '12rem'
          }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        'menuTransitionUp': 'menuTransitionUp 400ms linear',
        'menuTransitionDown': 'menuTransitionDown 400ms linear',
        'homeSlide': 'homeSlide 500ms ease-in-out',
        'wiggle': 'wiggle 400ms ease-in-out 3',
        'fade': 'fade 900ms ease-in-out',
      },
    },
  },
  plugins: [],
}
