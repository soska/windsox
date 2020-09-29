const each = require("../helpers/each");

const rounded = (theme) => {
  const definition = {
    rounded: ["borderRadius"],
    "rounded-tl": ["borderTopLeftRadius"],
    "rounded-tr": ["borderTopRightRadius"],
    "rounded-br": ["borderBottomRightRadius"],
    "rounded-bl": ["borderBottomLeftRadius"],
    "rounded-t": ["borderTopLeftRadius", "borderTopRightRadius"],
    "rounded-r": ["borderTopRightRadius", "borderBottomRightRadius"],
    "rounded-b": ["borderBottomRightRadius", "borderBottomLeftRadius"],
    "rounded-l": ["borderTopLeftRadius", "borderBottomLeftRadius"],
  };
  const selectors = {};
  const borderRadius = theme("borderRadius");
  each(borderRadius, (key, value) => {
    each(definition, (definition, properties) => {
      const name = `${definition}${key === "default" ? "" : `-${key}`}`;
      properties.forEach((property) => {
        selectors[name] = {
          [property]: value,
        };
      });
    });
  });
  return selectors;
};

module.exports = rounded;
