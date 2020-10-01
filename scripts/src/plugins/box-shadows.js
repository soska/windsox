const each = require("lodash/each");

// Yes, I need a better name
const passThruify = (theme) => {
  const selectors = {};
  const keys = theme("boxShadow");

  each(keys, (shadowProps, key) => {
    const name = `shadow${key === "default" ? "" : `-${key}`}`;
    selectors[name] = shadowProps;
  });

  return selectors;
};

module.exports = passThruify;
