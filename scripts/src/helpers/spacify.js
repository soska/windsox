const each = require("lodash/each");

const spacify = (
  definitions,
  { themeKey = "spacing", includeNegativeRules = true } = {}
) => (theme) => {
  const selectors = {};
  const spacings = theme(themeKey);
  each(spacings, (spacingValue, spacingKey) => {
    each(definitions, (property, definition) => {
      const name = `${definition}-${spacingKey}`;
      selectors[name] = {
        [property]: spacingValue,
      };
      if (includeNegativeRules) {
        selectors[`-${name}`] = {
          [property]: -spacingValue,
        };
      }
    });
  });
  return selectors;
};

module.exports = spacify;
