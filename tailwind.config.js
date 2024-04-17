/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          inter: 'inter-variable, Arial, sans-serif',
      },
      colors: {
        "cream": "#FBF8F2",
        "orange": "#FD5A1F",
        "mint-light": "#EEF6F0",
        "mint-dark": "#C7E5DF",
      }, 
      fontSize: {
        "base": "16px", 
        "medium":"20px",
        "large": "30px",
        "extra-large": "95px",
      }, 
      keyframes: {
        underlineGrow: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        grow: 'underlineGrow 0.25s ease-out forwards',
      },
    },
  },
  plugins: [],
}

