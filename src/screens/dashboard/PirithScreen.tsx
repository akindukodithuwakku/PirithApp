import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "../../components/common/Header";
import { ScreenBackground } from "../../components/common/ScreenBackground";

export function PirithScreen() {
  return (
    <ScreenBackground>
      <Header title="Pirith" />
      <View style={styles.content}>
        <Text style={styles.header}>Pirith</Text>
      </View>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  header: {
    fontSize: 22,
    color: "#800000",
    fontWeight: "bold",
  },
});
