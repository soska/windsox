const spacify = require("../helpers/spacify");

const paddings = spacify({
  p: "padding",
  pl: "paddingLeft",
  pr: "paddingRight",
  pt: "paddingTop",
  pb: "paddingBottom",
  px: "paddingHorizontal",
  py: "paddingVertical",
});

module.exports = paddings;
