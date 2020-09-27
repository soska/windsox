import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "./windsock/view";

export default function App() {
  return (
    <View style={styles.container}>
      <View classes={["bg.pink", "p.4"]}>
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
