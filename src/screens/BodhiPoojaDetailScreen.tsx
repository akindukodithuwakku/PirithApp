import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Dimensions,
  StyleSheet,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Colors } from "../constants/Colors";
import { BodhiPoojaData } from "../constants/BodhiPooja";

interface BodhiPoojaDetailRouteParams {
  bodhiPooja: BodhiPoojaData;
}

type BodhiPoojaDetailRouteProp = RouteProp<
  { params: BodhiPoojaDetailRouteParams },
  "params"
>;

function splitStanzas(text: string): string[] {
  // Split by < > tags, trim, and filter empty
  return text
    .split(/<([^>]*)>/g)
    .map((s) => s.replace(/^[\s\n]+|[\s\n]+$/g, ""))
    .filter((s) => s.length > 0);
}

const { width } = Dimensions.get("window");

const BodhiPoojaDetailScreen: React.FC = () => {
  const route = useRoute<BodhiPoojaDetailRouteProp>();
  const { bodhiPooja } = route.params;

  if (!bodhiPooja) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Bodhi Pooja not found.</Text>
        </View>
      </SafeAreaView>
    );
  }

  // Determine if this is a Pali or Sinhala screen
  const isPaliScreen = bodhiPooja.pali && bodhiPooja.pali.length > 0;
  const isSinhalaScreen = bodhiPooja.sinhala && bodhiPooja.sinhala.length > 0;

  const paliStanzas = isPaliScreen ? splitStanzas(bodhiPooja.pali) : [];
  const sinhalaStanzas =
    isSinhalaScreen && bodhiPooja.sinhala
      ? splitStanzas(bodhiPooja.sinhala)
      : [];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>{bodhiPooja.title}</Text>
          <Text style={styles.subtext}>{bodhiPooja.subtext}</Text>
        </View>

        {/* Pali Section - Only show on Pali screens */}
        {isPaliScreen && paliStanzas.length > 0 && (
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
        )}

        {/* Sinhala Section - Only show on Sinhala screens */}
        {isSinhalaScreen && sinhalaStanzas.length > 0 && (
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
        )}
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
    padding: 16,
    alignItems: "center",
    marginBottom: 18,
    paddingTop: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.text,
    textAlign: "center",
  },
  subtext: {
    fontSize: 16,
    color: Colors.text,
    textAlign: "center",
    marginTop: 8,
  },
  sectionFull: {
    padding: 16,
    backgroundColor: Colors.card,
    borderRadius: 12,
    marginBottom: 16,
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 8,
  },
  stanzaBlock: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: Colors.surface,
    borderRadius: 8,
  },
  stanzaText: {
    fontSize: 16,
    color: Colors.text,
    lineHeight: 24,
    textAlign: "justify",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: Colors.text,
    textAlign: "center",
  },
});

export default BodhiPoojaDetailScreen;
