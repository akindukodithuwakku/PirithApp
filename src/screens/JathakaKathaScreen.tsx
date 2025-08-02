import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { JATAKA_DATA, getJatakaCategories } from "../constants/jatakaData";
import { ScreenNames } from "../constants/ScreenNames";
import { Colors } from "../constants/Colors";

const { width } = Dimensions.get("window");

const JathakaKathaScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const jatakaList = Object.values(JATAKA_DATA);
  const categories = getJatakaCategories();

  const JatakaCard: React.FC<{ jataka: any; index: number }> = ({
    jataka,
    index,
  }) => {
    const [scaleValue] = useState(new Animated.Value(1));
    const [fadeValue] = useState(new Animated.Value(0));
    const [translateY] = useState(new Animated.Value(20));

    useEffect(() => {
      // Staggered animation for cards appearing
      Animated.parallel([
        Animated.timing(fadeValue, {
          toValue: 1,
          duration: 400,
          delay: index * 80,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 400,
          delay: index * 80,
          useNativeDriver: true,
        }),
      ]).start();
    }, [fadeValue, translateY, index]);

    const handlePressIn = () => {
      Animated.spring(scaleValue, {
        toValue: 0.96,
        useNativeDriver: true,
        tension: 100,
        friction: 8,
      }).start();
    };

    const handlePressOut = () => {
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
        tension: 100,
        friction: 8,
      }).start();
    };

    const handlePress = () => {
      setTimeout(() => {
        navigation.navigate(ScreenNames.JATHAKA_DETAIL, { jataka: jataka });
      }, 50);
    };

    return (
      <Animated.View
        style={{
          transform: [{ scale: scaleValue }, { translateY: translateY }],
          opacity: fadeValue,
        }}
      >
        <TouchableOpacity
          style={styles.card}
          onPress={handlePress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          activeOpacity={1}
          accessibilityRole="button"
          accessibilityLabel={jataka.title}
        >
          <View style={styles.cardContent}>
            <Text style={styles.cardIcon}>{jataka.icon}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>{jataka.title}</Text>
              <Text style={styles.cardSubtext}>{jataka.subtext}</Text>
              <Text style={styles.cardCategory}>{jataka.category}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const CategoryFilter: React.FC<{ category: string }> = ({ category }) => {
    const isSelected = selectedCategory === category;

    return (
      <TouchableOpacity
        style={[
          styles.categoryButton,
          isSelected && styles.categoryButtonSelected,
        ]}
        onPress={() => setSelectedCategory(category)}
      >
        <Text
          style={[
            styles.categoryText,
            isSelected && styles.categoryTextSelected,
          ]}
        >
          {category === "all"
            ? "All"
            : category.charAt(0).toUpperCase() + category.slice(1)}
        </Text>
      </TouchableOpacity>
    );
  };

  const filteredJataka =
    selectedCategory === "all"
      ? jatakaList
      : jatakaList.filter((jataka) => jataka.category === selectedCategory);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>ජාතක කතා</Text>
          <Text style={styles.subtitle}>
            Buddha's Previous Life Stories - Moral Lessons & Wisdom
          </Text>
        </View>

        {/* Category Filters */}
        <View style={styles.categoryContainer}>
          <CategoryFilter category="all" />
          {categories.map((category) => (
            <CategoryFilter key={category} category={category} />
          ))}
        </View>

        {/* Jataka Stories */}
        <View style={styles.storiesContainer}>
          {filteredJataka.length > 0 ? (
            filteredJataka.map((jataka, index) => (
              <JatakaCard key={jataka.key} jataka={jataka} index={index} />
            ))
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>
                No Jataka stories available in this category yet.
              </Text>
              <Text style={styles.emptyStateSubtext}>
                We're working on adding more stories from authentic sources.
              </Text>
            </View>
          )}
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
    marginBottom: 24,
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
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 24,
    gap: 8,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.semiTransparent,
  },
  categoryButtonSelected: {
    backgroundColor: Colors.secondary,
    borderColor: Colors.secondary,
  },
  categoryText: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: "500",
  },
  categoryTextSelected: {
    color: Colors.background,
  },
  storiesContainer: {
    marginTop: 10,
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
    marginBottom: 4,
  },
  cardCategory: {
    fontSize: 12,
    color: Colors.secondary,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 40,
  },
  emptyStateText: {
    fontSize: 18,
    color: Colors.textSecondary,
    textAlign: "center",
    marginBottom: 8,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: "center",
    opacity: 0.7,
  },
});

export default JathakaKathaScreen;
