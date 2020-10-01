const passThruify = require("../helpers/passthruify");

const fontFamilies = passThruify(
  { font: "fontFamily" },
  { themeKey: "fontFamily" }
);

module.exports = fontFamilies;
