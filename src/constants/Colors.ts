export const Colors = {
  // Primary Buddhist Colors
  primary: "#8B4513", // Saffron/Dark Orange
  secondary: "#FFD700", // Golden Yellow
  accent: "#FF6B35", // Warm Orange

  // Background Colors
  background: "#1A1A2E", // Deep Navy Blue
  surface: "#16213E", // Dark Blue-Gray
  card: "#0F3460", // Darker Blue

  // Text Colors
  text: "#FFFFFF", // Pure White
  textSecondary: "#E8E8E8", // Light Gray
  textMuted: "#B0B0B0", // Muted Gray

  // Accent Colors
  success: "#4CAF50", // Green
  warning: "#FF9800", // Orange
  error: "#F44336", // Red
  info: "#2196F3", // Blue

  // Buddhist Theme Colors
  lotus: "#FF69B4", // Pink
  meditation: "#9370DB", // Purple
  wisdom: "#20B2AA", // Light Sea Green
  peace: "#87CEEB", // Sky Blue

  // Gradients
  gradientPrimary: ["#8B4513", "#FFD700"],
  gradientSecondary: ["#16213E", "#0F3460"],
  gradientAccent: ["#FF6B35", "#FFD700"],

  // Shadows and Effects
  shadow: "rgba(0, 0, 0, 0.3)",
  overlay: "rgba(26, 26, 46, 0.8)",

  // Transparent Colors
  transparent: "transparent",
  semiTransparent: "rgba(255, 255, 255, 0.1)",
} as const;

export type ColorScheme = typeof Colors;
