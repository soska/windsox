import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import { View } from "./windsock/view";

const txt = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem vel
similique asperiores laborum rem sed dolor quaerat a nemo voluptas
porro optio et suscipit possimus.`;

export default function App() {
  const lhs = ["3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <ScrollView>
      <View style={styles.container} classes={["bg-gray-200"]}>
        {lhs.map((lh) => (
          <View classes={["bg-white", "p-4", "mx-2", "mb-4"]} key={lh}>
            <Text style={styles[lh]}>{txt}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "25%",
    margin: "auto",
  },
  text: {
    fontFamily: "System",
  },

  3: { lineHeight: 12 },
  4: { lineHeight: 16 },
  5: { lineHeight: 20 },
  6: { lineHeight: 24 },
  7: { lineHeight: 28 },
  8: { lineHeight: 32 },
  9: { lineHeight: 36 },
  10: { lineHeight: 40 },
});
