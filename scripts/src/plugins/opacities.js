const passThruify = require("../helpers/passthruify");

const opacities = passThruify({ opacity: "opacity" }, { themeKey: "opacity" });

module.exports = opacities;
