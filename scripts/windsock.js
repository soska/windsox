const config = require("./data/tw-config");
const core = require("./src/plugins");

const path = require("path");
const fs = require("fs");

const isFunction = require("lodash/isFunction");
const get = require("lodash/get");

const DIST = path.resolve(__dirname, "dist");

function createThemeGetter(config) {
  const { theme } = config;

  const themeGetter = (key) => {
    const value = get(theme, key);
    if (isFunction(value)) {
      return value(themeGetter);
    }
    return value;
  };

  return themeGetter;
}

function generateStylesheetWithConfig(config) {
  const theme = createThemeGetter(config);

  let styles = {};

  config.plugins.forEach((name) => {
    const plugin = core[name];
    styles = { ...styles, ...plugin(theme, config, styles) };
  });

  const sheet = `module.exports = ${JSON.stringify(styles, null, 2)};`;

  fs.writeFileSync(path.resolve(DIST, "windsock.styles.js"), sheet, {
    encoding: "utf-8",
  });
}

generateStylesheetWithConfig({
  ...config,
  plugins: [
    // "backgroundColors",
    // "borderColors",
    // "borderRadius",
    // "borderWidths",
    // "margins",
    // "paddings",
    // "widths",
    // "heights",
    "flex",
  ],
});
