import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/common/Header";
import { ScreenBackground } from "../../components/common/ScreenBackground";

export function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ScreenBackground>
      <Header title="Home" />
      <View style={styles.buttonGroup}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("JathakaKatha" as never)}
          accessibilityRole="button"
          accessibilityLabel="Go to Jathaka Katha"
        >
          <Text style={styles.buttonText}>Jathaka Katha</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Suuthra" as never)}
          accessibilityRole="button"
          accessibilityLabel="Go to Suuthra"
        >
          <Text style={styles.buttonText}>Suuthra</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("SethKavi" as never)}
          accessibilityRole="button"
          accessibilityLabel="Go to Seth Kavi"
        >
          <Text style={styles.buttonText}>Seth Kavi</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Pirith" as never)}
          accessibilityRole="button"
          accessibilityLabel="Go to Pirith"
        >
          <Text style={styles.buttonText}>Pirith</Text>
        </Pressable>
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
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 22,
    color: "#800000",
    fontWeight: "bold",
    marginBottom: 32,
  },
  buttonGroup: {
    width: "100%",
    gap: 16,
  },
  button: {
    backgroundColor: "#FFD700",
    borderRadius: 12,
    paddingVertical: 20,
    marginBottom: 16,
    alignItems: "center",
    width: 280,
    alignSelf: "center",
    elevation: 2,
  },
  buttonText: {
    color: "#800000",
    fontSize: 18,
    fontWeight: "600",
  },
});
