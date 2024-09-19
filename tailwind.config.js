/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx,css}'],
  theme: {
    extend: {
      boxShadow: {
        'onboarding-btn': '0px 2px 12px 8px rgba(150, 161, 253, 0.12)',
      },

      colors: {
        white: '#ffffff',
        primary: '#1E1F22',
        darken: {
          100: '#1A1A1E',
          200: '#17161A',
          300: '#141315',
          400: '#100F11',
        },
        lighten: {
          100: '#3C3E40',
          200: '#5A5C5D',
          300: '#787A7B',
          400: '#969898',
          500: '#B4B5B5',
          600: '#D2D3D3',
        },
        brand: '#203AAC', // 여기서 따옴표 수정
        error: '#FD686B',
      },
    },
  },
};
