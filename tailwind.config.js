
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: () => ({
      white: "#ffffff",
      primary: "#F4F7FE",
      darken: {
        100: "#1A1A1E",
        200: "#17161A",
        300: "#141315",
        400: "#100F11",
      },
      lighten: {
        100: "#3C3E40",
        200: "#5A5C5D",
        300: "#787A7B",
        400: "#969898",
        500: "#B4B5B5",
        600: "#D2D3D3",
      },
      brand: '203AAC'
    }),
  },
}