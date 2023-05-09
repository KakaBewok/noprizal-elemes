// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "6rem",
      maxWidth: "1280px",
    },
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        "dark-green-500": "#8BAC3E",
        "dark-green-100": "#F0FEEB",
        "green-500": "#A4B441",
        "green-100": "#F3F7D9",
        "purple-500": "#B33F74",
        "purple-100": "#F9EEF3",
        "dark-blue-500": "#405EB6",
        "dark-blue-100": "#EAEEFA",
        "sky-blue-500": "#40A2B1",
        "sky-blue-100": "#E6F3F5",
      },
    },
  },
  plugins: [],
};
