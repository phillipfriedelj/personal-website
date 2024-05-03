/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "inter-variable, Arial, sans-serif",
      },
      colors: {
        cream: "#FBF8F2",
        orange: "#FD5A1F",
        "mint-light": "#EEF6F0",
        "mint-dark": "#C7E5DF",
        "dark-gray": "#181818",
      },
      fontSize: {
        base: "16px",
        medium: "20px",
        large: "40px",
        "very-large": "60px",
        "extra-large": "85px",
      },
      keyframes: {
        underlineGrow: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
      },
      animation: {
        grow: "underlineGrow 0.25s ease-out forwards",
        wiggle: "wiggle 0.5s ease-in-out infinite",
        "spin-slow": "spin 5s linear infinite",
      },
      screens: {
        md: "812px",
      },
      boxShadow: {
        deep: "-2px -2px black;",
      },
      backgroundImage: {
        "noise-gradient":
          "url(./src/assets/noise-1000x500.png), linear-gradient(112deg, rgba(253,219,205,1) 0%, rgba(251,248,242,1) 100%);",
        "banner-image": "url(./src/assets/profile_bw.png)",
        "asterisk-image": "url(./src/assets/asterisk_big.png)",
      },
      gridTemplateRows: {
        16: "repeat(16, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
