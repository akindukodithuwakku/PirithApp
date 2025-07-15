import React from "react";
import { View, Text, StyleSheet, Pressable, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface StoryBoxProps {
  title: string;
  onPress: () => void;
}

export function StoryBox({ title, onPress }: StoryBoxProps) {
  const scale = React.useRef(new Animated.Value(1)).current;
  const glowOpacity = React.useRef(new Animated.Value(0)).current;

  function handlePressIn() {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 0.95,
        speed: 20,
        bounciness: 8,
        useNativeDriver: true,
      }),
      Animated.timing(glowOpacity, {
        toValue: 0.7,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }

  function handlePressOut() {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 1,
        speed: 20,
        bounciness: 8,
        useNativeDriver: true,
      }),
      Animated.timing(glowOpacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={styles.container}
      accessibilityRole="button"
      accessibilityLabel={`Open story: ${title}`}
    >
      <Animated.View style={[styles.glow, { opacity: glowOpacity }]} />
      <Animated.View style={[styles.box, { transform: [{ scale }] }]}>
        <LinearGradient
          colors={["#FFD700", "#FFF8E1", "#800000"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    marginHorizontal: 12,
  },
  box: {
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255, 215, 0, 0.5)", // Subtle gold border
    shadowColor: "#FFD700",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  glow: {
    position: "absolute",
    top: -10,
    left: -10,
    right: -10,
    bottom: -10,
    borderRadius: 24,
    backgroundColor: "rgba(255, 215, 0, 0.2)", // Gold glow effect
    zIndex: -1,
  },
  gradient: {
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 200,
    minHeight: 90,
  },
  title: {
    color: "#800000",
    fontFamily: "NotoSerif-Regular", // Fallback to a Buddhist-inspired font
    fontWeight: "600",
    fontSize: 20,
    letterSpacing: 0.5,
    textShadowColor: "rgba(255, 215, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
});

export default StoryBox;
