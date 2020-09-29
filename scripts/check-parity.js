const tw = require("./data/possible-tw-classes");
const sockStylesheet = require("./dist/windsock.styles");

const path = require("path");
const fs = require("fs");

const DIST = path.resolve(__dirname, "dist");
let lines = "";

for (let i = 0; i < tw.length; i++) {
  const klass = tw[i].replace("\\/", "/");
  const done = !!sockStylesheet[klass];
  const prefix = done ? " [x] " : " [ ] ";

  // if (!done) {
  lines += prefix + klass + "\n";
  // }

  // console.log(prefix + klass);
}

fs.writeFileSync(path.resolve(DIST, "windsock.todo"), lines, {
  encoding: "utf-8",
});
