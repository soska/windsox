const each = require("../helpers/each");

const borderWidths = (theme) => {
  const definition = {
    border: "borderWidth",
    "border-l": "borderLeftWidth",
    "border-r": "borderRightWidth",
    "border-t": "borderTopWidth",
    "border-b": "borderBottomWidth",
  };
  const selectors = {};
  const borderWidths = theme("borderWidth");
  each(borderWidths, (key, value) => {
    each(definition, (definition, property) => {
      const name = `${definition}${key === "default" ? "" : `-${key}`}`;
      selectors[name] = {
        [property]: value,
      };
    });
  });
  return selectors;
};

module.exports = borderWidths;
