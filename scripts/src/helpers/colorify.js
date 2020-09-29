const each = require("./each");

const colorify = (definitions, { themeKey = "colors" } = {}) => (theme) => {
  const selectors = {};
  const colors = theme(themeKey);
  each(colors, (colorName, colorValue) => {
    each(definitions, (definition, property) => {
      const name = `${definition}-${colorName}`;
      if (typeof colorValue === "string") {
        selectors[name] = {
          [property]: colorValue,
        };
      } else {
        each(colorValue, (shade, shadeValue) => {
          selectors[`${name}-${shade}`] = {
            [property]: shadeValue,
          };
        });
      }
    });
  });
  return selectors;
};

module.exports = colorify;
