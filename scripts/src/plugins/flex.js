const passThruify = require("../helpers/passthruify");

const flex = passThruify({ flex: "flex" }, { themeKey: "flex" });
const flexGrow = passThruify(
  { "flex-grow": "flexGrow" },
  { themeKey: "flexGrow" }
);
const flexShrink = passThruify(
  { "flex-shrink": "flexShrink" },
  { themeKey: "flexShrink" }
);

const justifyContent = passThruify(
  { justify: "justifyContent" },
  { themeKey: "justify" }
);

const alignContent = passThruify(
  { content: "alignContent" },
  { themeKey: "alignContent" }
);

const alignSelf = passThruify({ self: "alignSelf" }, { themeKey: "alignSelf" });

const alignItems = passThruify(
  { items: "alignItems" },
  { themeKey: "alignItems" }
);

const flexOrder = () => {
  const selectors = {};
  for (let i = 1; i < 13; i++) {
    const className = "order-" + i;
    selectors[className] = {
      order: i,
    };
  }

  selectors["order-first"] = { order: -999 };
  selectors["order-last"] = { order: 999 };
  selectors["order-none"] = { order: 0 };

  return selectors;
};

const flexDirection = () => {
  return {
    "flex-row": {
      flexDirection: "row",
    },
    "flex-row-reverse": {
      flexDirection: "row-reverse",
    },
    "flex-col": {
      flexDirection: "column",
    },
    "flex-col-reverse": {
      flexDirection: "column-reverse",
    },
  };
};

const flexWrap = () => {
  return {
    "flex-wrap": {
      flexWrap: "wrap",
    },
    "flex-wrap-reverse": {
      flexWrap: "wrap-reverse",
    },
    "flex-no-wrap": {
      flexWrap: "nowrap",
    },
  };
};

const compose = (fns) => (...args) => {
  let selectors = {};
  fns.forEach((fn) => {
    selectors = {
      ...selectors,
      ...fn(...args),
    };
  });
  return selectors;
};

module.exports = compose([
  flex,
  flexGrow,
  flexShrink,
  justifyContent,
  alignContent,
  alignSelf,
  alignItems,
  flexOrder,
  flexDirection,
  flexWrap,
]);

// module.exports = (theme) => ({
//   ...flex(theme),
//   ...flexGrow(theme),
//   ...flexShrink(theme),
//   ...justifyContent(theme),
//   ...alignContent(theme),
//   ...alignSelf(theme),
//   ...alignItems(theme),
//   ...flexOrder(theme),
//   ...flexDirection(theme),
//   ...flexWrap(theme),
// });
