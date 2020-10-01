import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "./windsock/view";

export default function App() {
  return (
    <View style={styles.container} classes={["bg-opacity-10", "bg-yellow-200"]}>
      {/* <View
        classes={[
          "bg-pink-100",
          "p-4",
          "border",
          "border-pink-500",
          "rounded",
          "h-32",
          "w-screen",
        ]}
      >
        <Text style={styles.text}>
          Open up App.js to start working on your app!
        </Text>
      </View> */}
      <View classes={["bg-red-700", "w-5", "h-5", "m-5"]} style={styles.a} />
      <View classes={["bg-red-700", "w-5", "h-5", "m-5"]} style={styles.b} />
      <View
        classes={["bg-red-700", "w-5", "h-5", "m-5"]}
        style={[styles.a, styles.b]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "System",
  },
  a: {
    transform: [{ scale: 2 }],
    backgroundColor: "blue",
  },
  b: {
    transform: [{ rotate: "45deg" }],
  },
});
