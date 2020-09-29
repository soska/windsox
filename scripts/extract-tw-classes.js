const _ = require("lodash");
const path = require("path");
const fs = require("fs");

const fileName = path.resolve(__dirname, "tw.css");

const css = fs.readFileSync(fileName, { encoding: "utf-8" });

const classes = [];

css.split("\n").forEach((l) => {
  const isClass = l[0] === ".";
  if (isClass) {
    // ignore pseudo-selector clases as they are not relevant in RN
    if (l.indexOf(":") === -1) {
      // we remove the leading '.' for class selectors
      const selector = l.replace(/^\./, "").replace(/\{$/, "").trim();
      classes.push(selector);
    }
  }
});

fs.writeFileSync(
  path.resolve(__dirname, "all-tw-classes.json"),
  JSON.stringify(_.uniq(classes), null, 2),
  { encoding: "utf-8" }
);

// console.log(classes);
// console.log(topLevel);
// console.log(_.keys(rules));

// console.log(css);
