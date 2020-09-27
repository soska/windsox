import React from "react";
import { get, set } from "lodash";
import { View as RNView, StyleSheet } from "react-native";

const UNIT = 4;

const bg = {
  red: {
    backgroundColor: "red",
  },
  blue: {
    backgroundColor: "blue",
  },
  yellow: {
    backgroundColor: "yellow",
  },
  green: {
    backgroundColor: "green",
  },
  pink: {
    backgroundColor: "pink",
  },
};

const p = {
  1: {
    padding: UNIT,
  },
  2: {
    padding: UNIT * 2,
  },
  3: {
    padding: UNIT * 3,
  },
  4: {
    padding: UNIT * 4,
  },
  5: {
    padding: UNIT * 5,
  },
};

const sock = { bg, p };

export const View = ({ classes = [], style: passedStyle, ...props }) => {
  let styles = {};
  classes.forEach((c) => {
    console.log(c);
    const style = get(sock, c);
    styles = { ...styles, ...style };
    console.log(styles);
  });

  const appliedStyle = StyleSheet.compose(passedStyle, styles);

  return <RNView {...props} style={appliedStyle} />;
};
