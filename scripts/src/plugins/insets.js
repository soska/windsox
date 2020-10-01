const each = require("lodash/each");

const insets = (theme) => {
  const selectors = {};
  const keys = theme("inset");
  const positions = ["top", "right", "bottom", "left"];
  each(keys, (value, key) => {
    selectors["inset-" + key] = {
      top: value,
      right: value,
      bottom: value,
      left: value,
    };
    selectors["inset-y-" + key] = {
      top: value,
      bottom: value,
    };
    selectors["inset-x-" + key] = {
      right: value,
      left: value,
    };
    positions.forEach((position) => {
      selectors[position + "-" + key] = {
        [position]: value,
      };
    });
  });

  return selectors;
};

module.exports = insets;
