import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  Dimensions,
} from "react-native";
import { Colors } from "../constants/Colors";

const { width } = Dimensions.get("window");

const ReferenceScreen: React.FC = () => {
  const handleLinkPress = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };

  const referenceLinks = [
    {
      id: 1,
      title: "Namo.lk - Buddhist Resources",
      description:
        "Comprehensive collection of Sutta Pitaka, Pirith, and Puja materials in Pali, Sinhala, and English",
      url: "https://namo.lk/resources/",
      icon: "📚",
      category: "Primary Source",
    },
    {
      id: 2,
      title: "Buddhism Vision",
      description:
        "Educational Buddhist content and teachings from authentic sources",
      url: "https://www.buddhismvision.com/",
      icon: "👁️",
      category: "Educational",
    },
    {
      id: 3,
      title: "Dhammadeepa.lk",
      description: "Sri Lankan Buddhist portal with extensive Dhamma resources",
      url: "https://dhammadeepa.lk/",
      icon: "🕯️",
      category: "Sri Lankan Buddhism",
    },
    {
      id: 4,
      title: "Dahamyathra - Pansiya Panas Jathakaya",
      description: "Collection of Jataka stories and Buddhist narratives",
      url: "https://dahamyathra.info/pansiya-panas-jathakaya/",
      icon: "📖",
      category: "Jataka Stories",
    },
  ];

  const ReferenceCard: React.FC<{ reference: any }> = ({ reference }) => {
    return (
      <TouchableOpacity
        style={styles.referenceCard}
        onPress={() => handleLinkPress(reference.url)}
        activeOpacity={0.8}
      >
        <View style={styles.cardHeader}>
          <Text style={styles.cardIcon}>{reference.icon}</Text>
          <View style={styles.cardTitleContainer}>
            <Text style={styles.cardTitle}>{reference.title}</Text>
            <Text style={styles.cardCategory}>{reference.category}</Text>
          </View>
        </View>
        <Text style={styles.cardDescription}>{reference.description}</Text>
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>Visit Resource →</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Buddhist Resources</Text>
          <Text style={styles.subtitle}>Reference Collection & Credits</Text>
        </View>

        <View style={styles.acknowledgmentSection}>
          <Text style={styles.sectionTitle}>🙏 ස්තුතීයි - Acknowledgments</Text>
          <Text style={styles.acknowledgmentText}>
            The content in this app has been compiled from authentic Buddhist
            sources. We extend our deepest gratitude to the following
            organizations and websites for making these sacred texts and
            teachings accessible to all.
          </Text>
        </View>

        <View style={styles.referencesSection}>
          <Text style={styles.sectionTitle}>📚 Reference Sources</Text>
          <Text style={styles.sectionDescription}>
            Explore these authentic Buddhist resources for deeper understanding
            and additional materials.
          </Text>

          {referenceLinks.map((reference) => (
            <ReferenceCard key={reference.id} reference={reference} />
          ))}
        </View>

        <View style={styles.sharingSection}>
          <Text style={styles.sectionTitle}>🌱 Share the Dhamma</Text>
          <Text style={styles.sharingText}>
            "සබ්බදානං ධම්මදානං ජිනාති" - The gift of Dhamma excels all gifts.
          </Text>
          <Text style={styles.sharingDescription}>
            We encourage you to share this knowledge with others. The teachings
            of the Buddha are meant to be shared for the benefit of all beings.
            Use this app to learn, practice, and spread the wisdom of the
            Dhamma.
          </Text>
        </View>

        <View style={styles.appInfoSection}>
          <Text style={styles.sectionTitle}>📱 About This App</Text>
          <Text style={styles.appInfoText}>
            The Pirith App is designed to make Buddhist texts and practices
            accessible to everyone. All content is carefully curated from
            authentic sources and presented in a user-friendly format.
          </Text>
          <Text style={styles.copyrightText}>
            © 2025 Akindu Kodithuwakku. Licensed under the MIT License.
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>සබ්බදානං ධම්මදානං ජිනාති</Text>
          <Text style={styles.footerSubtext}>
            The gift of Dhamma excels all gifts
          </Text>
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
    paddingBottom: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.text,
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: "center",
  },
  acknowledgmentSection: {
    backgroundColor: Colors.card,
    borderRadius: 15,
    padding: 20,
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.wisdom,
    marginBottom: 15,
    textAlign: "center",
  },
  acknowledgmentText: {
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 24,
    textAlign: "center",
  },
  referencesSection: {
    marginBottom: 25,
  },
  sectionDescription: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
  },
  referenceCard: {
    backgroundColor: Colors.overlay,
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: Colors.semiTransparent,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  cardIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  cardTitleContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 2,
  },
  cardCategory: {
    fontSize: 12,
    color: Colors.secondary,
    fontWeight: "500",
  },
  cardDescription: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginBottom: 12,
  },
  linkContainer: {
    alignItems: "flex-end",
  },
  linkText: {
    fontSize: 14,
    color: Colors.secondary,
    fontWeight: "600",
  },
  sharingSection: {
    backgroundColor: Colors.card,
    borderRadius: 15,
    padding: 20,
    marginBottom: 25,
  },
  sharingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.peace,
    textAlign: "center",
    marginBottom: 12,
    fontStyle: "italic",
  },
  sharingDescription: {
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 24,
    textAlign: "center",
  },
  appInfoSection: {
    backgroundColor: Colors.surface,
    borderRadius: 15,
    padding: 20,
    marginBottom: 25,
  },
  appInfoText: {
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 15,
  },
  copyrightText: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: "center",
    opacity: 0.8,
  },
  footer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  footerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.secondary,
    textAlign: "center",
    marginBottom: 5,
  },
  footerSubtext: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: "center",
    opacity: 0.8,
  },
});

export default ReferenceScreen;
