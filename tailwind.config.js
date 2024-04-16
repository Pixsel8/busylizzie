/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#323031",
      transparent: "transparent",
      gray: {
        900: "#6E5C76", // purple
      },
      red: {
        700: "#B6121B",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        sm: ["20px", "1.3"],
      },
    },
  },
  plugins: [],
}
