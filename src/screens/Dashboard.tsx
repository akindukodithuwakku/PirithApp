import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from "react-native";
import DashboardCard from "../components/DashboardCard";
import { Colors } from "../constants/Colors";
import { ScreenNames } from "../constants/ScreenNames";

const { width, height } = Dimensions.get("window");

interface DashboardProps {
  navigation: any;
}

const Dashboard: React.FC<DashboardProps> = ({ navigation }) => {
  const handleNavigate = (screenName: string) => {
    navigation.navigate(screenName as any);
  };

  const dashboardItems = [
    {
      id: 1,
      title: "සුත්‍ර දේශනා",
      subtitle: "Sacred Buddhist Texts",
      icon: "📜",
      screen: ScreenNames.SUTHRA,
      gradientColors: [Colors.card, Colors.primary],
      iconColor: Colors.secondary,
    },
    {
      id: 2,
      title: "පිරිත්",
      subtitle: "Protective Chants",
      icon: "🕉️",
      screen: ScreenNames.PIRITH,
      gradientColors: [Colors.card, Colors.meditation],
      iconColor: Colors.lotus,
    },
    {
      id: 3,
      title: "බෝධි පූජා ක්‍රමය",
      subtitle: "Enlightenment Ceremonies",
      icon: "🌳",
      screen: ScreenNames.BODHI_POOJA,
      gradientColors: [Colors.card, Colors.wisdom],
      iconColor: Colors.peace,
    },
    {
      id: 4,
      title: "ජාතක කතා",
      subtitle: "Buddha's Life Stories",
      icon: "📖",
      screen: ScreenNames.JATHAKA_KATHA,
      gradientColors: [Colors.card, Colors.accent],
      iconColor: Colors.secondary,
    },
    {
      id: 5,
      title: "Reference",
      subtitle: "Buddhist Resources",
      icon: "🔍",
      screen: ScreenNames.REFERENCE,
      gradientColors: [Colors.card, Colors.info],
      iconColor: Colors.peace,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.background}
        translucent={false}
      />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.appTitle}>The Pirith App</Text>
          <Text style={styles.appSubtitle}>Buddhist Wisdom & Practice</Text>
        </View>
        <View style={styles.headerDecoration}>
          <Text style={styles.decorationIcon}>☸</Text>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>ධම්ම දාන 🙏</Text>
          <Text style={styles.welcomeText}>
            බුදුදහමේ පූජනීය ඉගැන්වීම් සහ පිළිවෙත් ගවේෂණය කරමු
          </Text>
        </View>

        <View style={styles.cardsContainer}>
          {dashboardItems.map((item) => (
            <DashboardCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
              onPress={() => handleNavigate(item.screen)}
              gradientColors={item.gradientColors}
              iconColor={item.iconColor}
            />
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>සබ්බදානං ධම්මදානං ජිනාති</Text>
          <Text style={styles.footerText}>
            © 2025 Akindu Kodithuwakku. Licensed under the MIT License.
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: Colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.semiTransparent,
  },
  headerContent: {
    flex: 1,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 2,
  },
  appSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    opacity: 0.8,
  },
  headerDecoration: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.semiTransparent,
    alignItems: "center",
    justifyContent: "center",
  },
  decorationIcon: {
    fontSize: 24,
    color: Colors.secondary,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  welcomeSection: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: "center",
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.text,
    textAlign: "center",
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: "center",
    lineHeight: 24,
    opacity: 0.9,
  },
  cardsContainer: {
    paddingTop: 20,
  },
  footer: {
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  footerText: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: "center",
    marginBottom: 10,
    opacity: 0.8
  },
  footerSubtext: {
    fontSize: 24,
  },
});

export default Dashboard;
