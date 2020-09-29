const each = require("lodash/each");
// const fp = require("lodash/fp");
// console.log(fp);

const passTrough = (definitions, { themeKey } = {}) => (theme) => {
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

const flex = passTrough({ flex: "flex" }, { themeKey: "flex" });
const flexGrow = passTrough(
  { "flex-grow": "flexGrow" },
  { themeKey: "flexGrow" }
);
const flexShrink = passTrough(
  { "flex-shrink": "flexShrink" },
  { themeKey: "flexShrink" }
);

const justifyContent = passTrough(
  { justify: "justifyContent" },
  { themeKey: "justify" }
);

module.exports = (theme) => ({
  ...flex(theme),
  ...flexGrow(theme),
  ...flexShrink(theme),
  ...justifyContent(theme),
});
