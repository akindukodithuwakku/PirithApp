import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Switch,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { SuthraData } from "../constants/suthraData";
import { Colors } from "../constants/Colors";

interface SuthraDetailRouteParams {
  suthra: SuthraData;
}

type SuthraDetailRouteProp = RouteProp<
  { params: SuthraDetailRouteParams },
  "params"
>;

const { width } = Dimensions.get("window");

function splitStanzas(text: string): string[] {
  // Split by < > tags, trim, and filter empty
  return text
    .split(/<([^>]*)>/g)
    .map((s) => s.replace(/^[\s\n]+|[\s\n]+$/g, ""))
    .filter((s) => s.length > 0);
}

const SuthraDetailScreen: React.FC = () => {
  const route = useRoute<SuthraDetailRouteProp>();
  const { suthra } = route.params;
  const [showSinhala, setShowSinhala] = useState(true);

  if (!suthra) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Suthra not found.</Text>
        </View>
      </SafeAreaView>
    );
  }

  const paliStanzas = splitStanzas(suthra.pali);
  const sinhalaStanzas = splitStanzas(suthra.sinhala);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>{suthra.title}</Text>
          <Text style={styles.subtext}>{suthra.subtext}</Text>
        </View>

        {/* Toggle Switch */}
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleLabel}>සිංහල අරුත් පෙන්වන්න</Text>
          <Switch
            value={showSinhala}
            onValueChange={setShowSinhala}
            trackColor={{ false: Colors.surface, true: Colors.secondary }}
            thumbColor={showSinhala ? Colors.primary : Colors.textSecondary}
          />
        </View>

        {/* Combined Pali and Sinhala Section */}
        <View style={styles.sectionFull}>
          <Text style={styles.sectionLabel}>පාලි භාෂාවෙන් සහ සිංහල අරුත්</Text>
          {paliStanzas.map((stanza, idx) => (
            <View key={idx} style={styles.stanzaBlock}>
              <Text style={styles.stanzaText} selectable={true}>
                {stanza}
              </Text>
              {showSinhala && sinhalaStanzas[idx] && (
                <View style={styles.sinhalaTranslation}>
                  <Text style={styles.sinhalaText} selectable={true}>
                    {sinhalaStanzas[idx]}
                  </Text>
                </View>
              )}
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
  scrollContent: {
    padding: 0,
    paddingBottom: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 18,
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  icon: {
    fontSize: 48,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.text,
    textAlign: "center",
    marginBottom: 6,
  },
  subtext: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: "center",
    marginBottom: 10,
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom: 24,
    backgroundColor: Colors.surface,
    marginHorizontal: 24,
    borderRadius: 12,
    paddingVertical: 16,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  toggleLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
  },
  sectionFull: {
    width: "100%",
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionLabel: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.secondary,
    marginBottom: 16,
    letterSpacing: 0.5,
    textAlign: "left",
  },
  stanzaBlock: {
    marginBottom: 18,
    backgroundColor: Colors.surface,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  stanzaText: {
    fontSize: 15,
    color: Colors.text,
    lineHeight: 28,
    textAlign: "left",
    fontFamily: "System",
    marginBottom: 8,
  },
  sinhalaTranslation: {
    borderTopWidth: 1,
    borderTopColor: Colors.textMuted,
    paddingTop: 8,
    marginTop: 8,
  },
  sinhalaText: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 24,
    textAlign: "left",
    fontFamily: "System",
    fontStyle: "italic",
  },
  errorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    color: Colors.error,
    fontSize: 18,
  },
});

export default SuthraDetailScreen;
