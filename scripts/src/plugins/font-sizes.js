const passThruify = require("../helpers/passthruify");

const fontSizes = passThruify({ text: "fontSize" }, { themeKey: "fontSize" });

module.exports = fontSizes;
