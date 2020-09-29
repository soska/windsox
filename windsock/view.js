import React from "react";
import isFunction from "lodash/isFunction";
import { View as RNView, StyleSheet, Dimensions } from "react-native";
import windsock from "./windsock.styles";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const createEnvironment = (initial = {}) => {
  const values = initial;

  const get = (name) => {
    return values[name];
  };

  const set = (name, value) => {
    return (values[name] = value);
  };

  return {
    get,
    set,
  };
};

const getStyles = (classes, initialStyles = {}) => {
  let styles = {};

  const env = createEnvironment({
    screenWidth,
    screenHeight,
    backgroundOpacity: "ff",
  });

  classes.forEach((selector) => {
    let style = windsock[selector];
    if (isFunction(style)) {
      style = style(env);
    }

    styles = { ...styles, ...style };
  });

  // console.log(styles);

  return StyleSheet.compose(styles, initialStyles);
};

export const View = ({ classes = [], style: passedStyle, ...props }) => {
  const style = getStyles(classes, passedStyle);
  return <RNView {...props} style={style} />;
};
