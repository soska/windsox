const each = require("lodash/each");

// Yes, I need a better name
const passThruify = (definitions, { themeKey } = {}) => (theme) => {
  const selectors = {};
  const keys = theme(themeKey);
  each(keys, (value, key) => {
    each(definitions, (property, definition) => {
      const name = `${definition}${key === "default" ? "" : `-${key}`}`;
      selectors[name] = {
        [property]: value,
      };
    });
  });

  return selectors;
};

module.exports = passThruify;
