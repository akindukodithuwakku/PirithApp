import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <LinearGradient
      colors={["#FFD700", "#FFF8E1", "#800000"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.header}
    >
      <Text
        style={styles.title}
        accessibilityRole="header"
        accessibilityLabel={title}
      >
        {title}
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    paddingTop: Platform.OS === "ios" ? 56 : 36,
    paddingBottom: 18,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: "#FFD700",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 8,
  },
  title: {
    color: "#800000",
    fontFamily: "NotoSerif-Regular",
    fontWeight: "700",
    fontSize: 24,
    letterSpacing: 1,
    textShadowColor: "rgba(255, 215, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
});

export default Header;
