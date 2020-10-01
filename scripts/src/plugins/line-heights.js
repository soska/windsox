const passThruify = require("../helpers/passthruify");

const lineHeights = passThruify(
  { leading: "lineHeight" },
  { themeKey: "lineHeight" }
);

module.exports = lineHeights;
