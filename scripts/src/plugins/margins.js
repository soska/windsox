const spacify = require("../helpers/spacify");

const margins = spacify({
  m: "margin",
  ml: "marginLeft",
  mr: "marginRight",
  mt: "marginTop",
  mb: "marginBottom",
  mx: "marginHorizontal",
  my: "marginVertical",
});

module.exports = margins;
