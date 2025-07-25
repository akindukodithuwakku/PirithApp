import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Colors } from "../constants/Colors";
import { PirithData } from "../constants/pirithData";

interface PirithDetailRouteParams {
  pirith: PirithData;
}

type PirithDetailRouteProp = RouteProp<
  { params: PirithDetailRouteParams },
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

const PirithDetailScreen: React.FC = () => {
  const route = useRoute<PirithDetailRouteProp>();
  const { pirith } = route.params;

  if (!pirith) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Pirith not found.</Text>
        </View>
      </SafeAreaView>
    );
  }

  const paliStanzas = splitStanzas(pirith.pali);
  const sinhalaStanzas = splitStanzas(pirith.sinhala);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>{pirith.title}</Text>
          <Text style={styles.subtext}>{pirith.subtext}</Text>
        </View>

        {/* Pali Section */}
        <View style={styles.sectionFull}>
          <Text style={styles.sectionLabel}>පාලි භාෂාවෙන්</Text>
          {paliStanzas.map((stanza, idx) => (
            <View key={idx} style={styles.stanzaBlock}>
              <Text style={styles.stanzaText} selectable={true}>
                {stanza}
              </Text>
            </View>
          ))}
        </View>

        {/* Sinhala Section */}
        <View style={styles.sectionFull}>
          <Text style={styles.sectionLabel}>සිංහල අරුත්</Text>
          {sinhalaStanzas.map((stanza, idx) => (
            <View key={idx} style={styles.stanzaBlock}>
              <Text style={styles.stanzaText} selectable={true}>
                {stanza}
              </Text>
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

export { PirithDetailScreen };
export default PirithDetailScreen;
