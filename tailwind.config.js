/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFBFA",
      black: "#000",
      transparent: "transparent",
      gray: {
        900: "#6E5C76", // purple
      },
      pink: {
        700: "#C1AFC3",
      },
    },
    extend: {
      fontFamily: {
        sans: ["EB Garamond", "sans-serif"],
      },
      fontSize: {
        sm: ["20px", "1.3"],
      },
    },
  },
  plugins: [],
}
