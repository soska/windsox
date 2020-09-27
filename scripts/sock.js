const _ = require("lodash");
const path = require("path");
const fs = require("fs");

const fileName = path.resolve(__dirname, "tw.css");

const css = fs.readFileSync(fileName, { encoding: "utf-8" });

const classes = new Set();
const topLevel = {};

css.split("\n").forEach((l) => {
  const isClass = l[0] === ".";
  if (isClass) {
    if (l.indexOf(":") === -1) {
      // console.log(l);
      // const selector = l.replace(/^\./, "").replace(/\{$/, "").trim();
      const selector = l.replace(/^\./, "").replace(/\{$/, "").trim();
      let tlKey = "";

      if (selector[0] === "-") {
        tlKey = "-" + selector.substr(1).split("-")[0];
      } else {
        tlKey = selector.split("-")[0];
      }

      if (_.isUndefined(topLevel[tlKey])) {
        topLevel[tlKey] = [];
      }

      topLevel[tlKey].push(selector);
      // classes.add(selector);
      // topLevel.add(tlKey);
      // const path = classs.replace(/\-/g, ".");
      // _.set(rules, path, path);
    }
  }
});

fs.writeFileSync(
  path.resolve(__dirname, "top-level.json"),
  JSON.stringify(topLevel, null, 2),
  { encoding: "utf-8" }
);

// console.log(classes);
// console.log(topLevel);
// console.log(_.keys(rules));

// console.log(css);
