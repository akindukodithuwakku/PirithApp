import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import { Colors } from "../constants/Colors";

const { width, height } = Dimensions.get("window");

const SplashScreen: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const spinAnim = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
    // Optionally auto-finish after 2.5s
    const timer = setTimeout(() => onFinish && onFinish(), 1500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });

  return (
    <View style={styles.container}>
      {/* Gradient background */}
      <View style={styles.gradientBg} />
      {/* Glowing Dharma wheel */}
      <Animated.View
        style={[styles.dharmaContainer, { transform: [{ rotate: spin }] }]}
      >
        <Text style={styles.dharmaIcon} accessibilityLabel="Dharma Wheel">
          ☸
        </Text>
        <View style={styles.glow} />
      </Animated.View>
      {/* App name */}
      <Text style={styles.title}>The Pirith App</Text>
      <Text style={styles.subtitle}>Buddhist Wisdom & Practice</Text>
      {/* Loading dots */}
      <View style={styles.loadingContainer}>
        <Animated.Text style={[styles.dot, { opacity: spinAnim }]}>
          •
        </Animated.Text>
        <Animated.Text
          style={[
            styles.dot,
            {
              opacity: spinAnim.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0.2, 1, 0.2],
              }),
            },
          ]}
        >
          •
        </Animated.Text>
        <Animated.Text
          style={[
            styles.dot,
            {
              opacity: spinAnim.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [1, 0.2, 1],
              }),
            },
          ]}
        >
          •
        </Animated.Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
    position: "relative",
  },
  gradientBg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.background,
    opacity: 0.95,
  },
  dharmaContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
    position: "relative",
  },
  dharmaIcon: {
    fontSize: 64,
    color: Colors.secondary,
    textShadowColor: Colors.lotus,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 16,
    zIndex: 2,
  },
  glow: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.lotus,
    opacity: 0.18,
    zIndex: 1,
    shadowColor: Colors.lotus,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 8,
    letterSpacing: 1.2,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 32,
    textAlign: "center",
    opacity: 0.85,
  },
  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  dot: {
    fontSize: 32,
    color: Colors.secondary,
    marginHorizontal: 4,
    opacity: 0.7,
  },
});

export default SplashScreen;
