const passThruify = require("../helpers/passthruify");

const fontWeights = passThruify(
  { font: "fontWeight" },
  { themeKey: "fontWeight" }
);

module.exports = fontWeights;
