const spacify = require("../helpers/spacify");

const widths = spacify(
  {
    w: "width",
  },
  { themeKey: "width", includeNegativeRules: false }
);

module.exports = widths;
