import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import { Colors } from "../constants/Colors";

interface DashboardCardProps {
  title: string;
  subtitle: string;
  icon: string;
  onPress: () => void;
  gradientColors?: string[];
  iconColor?: string;
}

const { width } = Dimensions.get("window");

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  subtitle,
  icon,
  onPress,
  gradientColors = [Colors.card, Colors.surface],
  iconColor = Colors.secondary,
}) => {
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: gradientColors[0] }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.cardContent}>
        <View
          style={[styles.iconContainer, { backgroundColor: iconColor + "20" }]}
        >
          <Text style={[styles.icon, { color: iconColor }]}>{icon}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>→</Text>
        </View>
      </View>
      <View style={styles.glowEffect} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
    borderRadius: 20,
    marginVertical: 8,
    marginHorizontal: 20,
    padding: 20,
    elevation: 8,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: Colors.semiTransparent,
    position: "relative",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  icon: {
    fontSize: 28,
    fontWeight: "bold",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    opacity: 0.8,
  },
  arrowContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.semiTransparent,
    alignItems: "center",
    justifyContent: "center",
  },
  arrow: {
    fontSize: 18,
    color: Colors.secondary,
    fontWeight: "bold",
  },
  glowEffect: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.secondary + "30",
    opacity: 0.5,
  },
});

export default DashboardCard;
