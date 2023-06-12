/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#051622",
        light: "#e7f0f8",
        primary: "#1ba098",
        secondary: "#deb992",
        tertiary: "#947b61",
      },
    },
  },
  plugins: [],
};
