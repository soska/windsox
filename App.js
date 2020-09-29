import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "./windsock/view";

export default function App() {
  return (
    <View style={styles.container} classes={["bg-opacity-10", "bg-yellow-200"]}>
      <View
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
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
