import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Pirith App Dashboard!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  text: {
    fontSize: 20,
    color: "#800000",
    fontWeight: "bold",
  },
});
