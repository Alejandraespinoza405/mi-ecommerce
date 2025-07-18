/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          //"arbusto de perla"
          50: "#f9f7f3",
          100: "#f0ece4",
          200: "#e6dfd3",
          300: "#ccbda5",
          400: "#b69e81",
          500: "#a78868",
          600: "#9a775c",
          700: "#81614d",
          800: "#695043",
          900: "#564338",
          950: "#2d221d",
        },
        secondary: { //"tahuna-sands"
          50: "#f8f9ec",
          100: "#e9edca",
          200: "#dee4b2",
          300: "#c7d284",
          400: "#aebe5d",
          500: "#91a33f",
          600: "#70812f",
          700: "#576427",
          800: "#465024",
          900: "#3c4522",
          950: "#1f250e",
        },
      },
    },
  },
  plugins: [],
};
