// const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "index.html",
    "login/index.html",
    "room/index.html",
    "./**/*.{js,jsx,ts,tsx,vue,html}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: "1600px",
      },
    },
  },
  plugins: [],
};
