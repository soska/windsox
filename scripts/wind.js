const config = require("./tailwind-defaults");

const REM = 4;

function each(obj, fn) {
  return Object.keys(obj).forEach((key) => {
    const value = obj[key];
    return fn(key, value);
  });
}

function spacing(definitions) {
  return (config) => {
    const selectors = {};
    config.theme.spacing.forEach((spacing) => {
      each(definitions, (definition) => {
        const property = definitions[definition];
        const name = `${definition}-${spacing}`;
        const value = spacing === "px" ? 1 : spacing * REM;
        selectors[name] = {
          [property]: value,
        };
        selectors[`-${name}`] = {
          [property]: -value,
        };
      });
    });
    return selectors;
  };
}

const paddings = spacing({
  p: "padding",
  pl: "paddingLeft",
  pr: "paddingRight",
  pt: "paddingTop",
  pb: "paddingBottom",
  px: "paddingHorizontal",
  py: "paddingVertical",
});

const margins = spacing({
  m: "margin",
  ml: "marginLeft",
  mr: "marginRight",
  mt: "marginTop",
  mb: "marginBottom",
  mx: "marginHorizontal",
  my: "marginVertical",
});

const bordersWidths = (config) => {
  const definition = {
    border: "borderWidth",
    "border-l": "borderLeftWidth",
    "border-r": "borderRightWidth",
    "border-t": "borderTopWidth",
    "border-b": "borderBottomWidth",
    "border-x": "borderHorizontalWidth",
    "border-y": "borderVerticalWidth",
  };
  const selectors = {};
  each(config.theme.borderWidth, (key, value) => {
    each(definition, (definition, property) => {
      const name = `${definition}${key === "default" ? "" : `-${key}`}`;
      selectors[name] = {
        [property]: value,
      };
    });
  });
  return selectors;
};

function colorify(definitions) {
  return (config) => {
    const selectors = {};
    const { colors } = config.theme;
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
}

const backgrounds = colorify({
  bg: "backgroundColor",
  text: "color",
});

const borderColors = colorify({
  border: "borderColor",
});

const selectors = {
  ...backgrounds(config),
  ...paddings(config),
  ...margins(config),
  ...bordersWidths(config),
  ...borderColors(config),
};

console.log(selectors);
