const spacify = require("../helpers/spacify");

const heights = spacify(
  {
    h: "height",
  },
  { themeKey: "height", includeNegativeRules: false }
);

module.exports = heights;
