import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Colors } from "../constants/Colors";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: string;
  style?: ViewStyle;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  icon,
  style,
}) => (
  <View style={[styles.container, style]}>
    {icon && <Text style={styles.icon}>{icon}</Text>}
    <Text style={styles.title}>{title}</Text>
    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
  </View>
);

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({ children, style }) => (
  <View style={[styles.card, style]}>{children}</View>
);

interface BadgeProps {
  text: string;
  color?: string;
  textColor?: string;
  style?: ViewStyle;
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  color = Colors.primary,
  textColor = Colors.surface,
  style,
}) => (
  <View style={[styles.badge, { backgroundColor: color }, style]}>
    <Text style={[styles.badgeText, { color: textColor }]}>{text}</Text>
  </View>
);

interface LoadingSpinnerProps {
  size?: "small" | "large";
  color?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "large",
  color = Colors.primary,
}) => (
  <View style={styles.loadingContainer}>
    <Text style={[styles.loadingText, { color }]}>
      {size === "large" ? "🔄" : "⏳"}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 15,
  },
  icon: {
    fontSize: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.text,
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: "center",
  },
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    alignSelf: "flex-start",
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
  },
  loadingText: {
    fontSize: 50,
  },
});

export default {
  SectionHeader,
  Card,
  Badge,
  LoadingSpinner,
};
