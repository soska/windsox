const colorify = require("../helpers/colorify");

const backgroundColors = colorify(
  {
    bg: "backgroundColor",
    text: "color",
  },
  { themeKey: "backgroundColor" }
);

module.exports = backgroundColors;
