const config = require("./tailwind-defaults");

const REM = 4;

function spacing(definitions) {
  return (config) => {
    const selectors = {};
    config.theme.spacing.forEach((spacing) => {
      Object.keys(definitions).forEach((definition) => {
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

const padding = spacing({
  p: "padding",
  pl: "paddingLeft",
  pr: "paddingRight",
  pt: "paddingTop",
  pb: "paddingBottom",
  px: "paddingHorizontal",
  py: "paddingVertical",
});

const margin = spacing({
  m: "margin",
  ml: "marginLeft",
  mr: "marginRight",
  mt: "marginTop",
  mb: "marginBottom",
  mx: "marginHorizontal",
  my: "marginVertical",
});

const selectors = {
  ...padding(config),
  ...margin(config),
};

console.log(selectors);
