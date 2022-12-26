const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
  ],
  theme: {
    colors: {
      primary: "#7AA65A",
      ...colors,
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
