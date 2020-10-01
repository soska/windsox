const passThruify = require("../helpers/passthruify");

const zIndexes = passThruify({ z: "zIndex" }, { themeKey: "zIndex" });

module.exports = zIndexes;
