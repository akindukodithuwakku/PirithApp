import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { SUTHRA_DATA } from "../constants/suthraData";
import { Colors } from "../constants/Colors";

const { width } = Dimensions.get("window");

const SuthraScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const suthraList = Object.values(SUTHRA_DATA);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Text style={styles.subtitle}>
            වැදගත් සුත්‍ර දේශනාවන්, පාලි සහ එහි සිංහල අරුත සමගින්
          </Text>
        </View>
        {suthraList.map((suthra) => (
          <TouchableOpacity
            key={suthra.key}
            style={styles.card}
            activeOpacity={0.85}
            onPress={() =>
              navigation.navigate("SuthraDetail", { suthraKey: suthra.key })
            }
            accessibilityRole="button"
            accessibilityLabel={suthra.title}
          >
            <View style={styles.cardContent}>
              <Text style={styles.cardIcon}>{suthra.icon}</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{suthra.title}</Text>
                <Text style={styles.cardSubtext}>{suthra.subtext}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
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
    marginBottom: 24,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: "center",
    marginBottom: 10,
  },
  card: {
    width: width * 0.92,
    backgroundColor: Colors.overlay,
    borderRadius: 18,
    marginVertical: 10,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 6,
    borderWidth: 1,
    borderColor: Colors.semiTransparent,
    // transition: 'all 0.2s', // Removed, not supported in React Native
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardIcon: {
    fontSize: 32,
    marginRight: 18,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 2,
  },
  cardSubtext: {
    fontSize: 14,
    color: Colors.textSecondary,
    opacity: 0.85,
  },
});

export default SuthraScreen;
