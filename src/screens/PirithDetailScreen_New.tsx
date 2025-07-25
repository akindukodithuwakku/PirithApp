import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Colors } from "../constants/Colors";
import { PirithData } from "../constants/pirithData";

const { width } = Dimensions.get("window");

interface PirithDetailRouteParams {
  pirith: PirithData;
}

type PirithDetailRouteProp = RouteProp<
  { params: PirithDetailRouteParams },
  "params"
>;

function splitStanzas(text: string): string[] {
  // Split by < > tags, trim, and filter empty
  return text
    .split(/<([^>]*)>/g)
    .map((s) => s.replace(/^[\s\n]+|[\s\n]+$/g, ""))
    .filter((s) => s.length > 0);
}

const PirithDetailScreen: React.FC = () => {
  const route = useRoute<PirithDetailRouteProp>();
  const { pirith } = route.params;
  const [selectedLanguage, setSelectedLanguage] = useState<"pali" | "sinhala">(
    "sinhala"
  );

  if (!pirith) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Pirith not found.</Text>
        </View>
      </SafeAreaView>
    );
  }

  const currentText =
    selectedLanguage === "pali" ? pirith.pali : pirith.sinhala;
  const stanzas = splitStanzas(currentText);

  const getCategoryColor = (category: PirithData["category"]) => {
    switch (category) {
      case "protection":
        return Colors.primary;
      case "healing":
        return Colors.success;
      case "blessing":
        return Colors.secondary;
      case "general":
        return Colors.info;
      default:
        return Colors.primary;
    }
  };

  const getCategoryLabel = (category: PirithData["category"]) => {
    switch (category) {
      case "protection":
        return "ආරක්ෂාව";
      case "healing":
        return "සුව කිරීම";
      case "blessing":
        return "ආශිර්වාදය";
      case "general":
        return "සාමාන්‍ය";
      default:
        return "සාමාන්‍ය";
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.icon}>{pirith.icon}</Text>
          <Text style={styles.title}>{pirith.title}</Text>
          <Text style={styles.subtitle}>{pirith.subtext}</Text>

          {/* Category Badge */}
          <View
            style={[
              styles.categoryBadge,
              { backgroundColor: getCategoryColor(pirith.category) },
            ]}
          >
            <Text style={styles.categoryText}>
              {getCategoryLabel(pirith.category)}
            </Text>
          </View>

          {/* Benefits */}
          {pirith.benefits && (
            <View style={styles.benefitsContainer}>
              <Text style={styles.benefitsTitle}>ප්‍රතිලාභ:</Text>
              <Text style={styles.benefitsText}>{pirith.benefits}</Text>
            </View>
          )}
        </View>

        {/* Language Toggle */}
        <View style={styles.languageSection}>
          <TouchableOpacity
            style={[
              styles.languageButton,
              selectedLanguage === "sinhala" && styles.activeLanguageButton,
            ]}
            onPress={() => setSelectedLanguage("sinhala")}
          >
            <Text
              style={[
                styles.languageButtonText,
                selectedLanguage === "sinhala" &&
                  styles.activeLanguageButtonText,
              ]}
            >
              සිංහල
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.languageButton,
              selectedLanguage === "pali" && styles.activeLanguageButton,
            ]}
            onPress={() => setSelectedLanguage("pali")}
          >
            <Text
              style={[
                styles.languageButtonText,
                selectedLanguage === "pali" && styles.activeLanguageButtonText,
              ]}
            >
              පාලි
            </Text>
          </TouchableOpacity>
        </View>

        {/* Content Section */}
        <View style={styles.contentSection}>
          {stanzas.map((stanza, index) => (
            <View key={index} style={styles.stanza}>
              <Text style={styles.stanzaText}>{stanza}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: Colors.error,
    textAlign: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
    backgroundColor: Colors.surface,
    borderRadius: 15,
    padding: 20,
  },
  icon: {
    fontSize: 60,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.text,
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: "center",
    marginBottom: 15,
  },
  categoryBadge: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 15,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.surface,
  },
  benefitsContainer: {
    backgroundColor: Colors.card,
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary,
    width: "100%",
  },
  benefitsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 5,
  },
  benefitsText: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  languageSection: {
    flexDirection: "row",
    backgroundColor: Colors.surface,
    borderRadius: 25,
    padding: 5,
    marginBottom: 20,
  },
  languageButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 20,
  },
  activeLanguageButton: {
    backgroundColor: Colors.primary,
  },
  languageButtonText: {
    fontSize: 16,
    color: Colors.textSecondary,
    fontWeight: "500",
  },
  activeLanguageButtonText: {
    color: Colors.surface,
    fontWeight: "bold",
  },
  contentSection: {
    backgroundColor: Colors.surface,
    borderRadius: 15,
    padding: 20,
  },
  stanza: {
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: Colors.card,
    borderRadius: 10,
  },
  stanzaText: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.text,
    textAlign: "left",
  },
});

export default PirithDetailScreen;
