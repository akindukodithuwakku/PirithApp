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
import { BODHI_POOJA_DATA } from "../constants/BodhiPooja";
import { ScreenNames } from "../constants/ScreenNames";
import { Colors } from "../constants/Colors";

const { width } = Dimensions.get("window");

const BodhiPoojaScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const bodhiPoojaList = Object.values(BODHI_POOJA_DATA);

  const BodhiPoojaCard: React.FC<{ bodhiPooja: any; index: number }> = ({
    bodhiPooja,
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
        navigation.navigate(ScreenNames.BODHI_POOJA_DETAIL, {
          bodhiPooja: bodhiPooja,
        });
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
          accessibilityLabel={bodhiPooja.title}
        >
          <View style={styles.cardContent}>
            <Text style={styles.cardIcon}>{bodhiPooja.icon}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>{bodhiPooja.title}</Text>
              <Text style={styles.cardSubtext}>{bodhiPooja.subtext}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Text style={styles.subtitle}>
            බෝධි පූජා ක්‍රමය, පාලි සහ එහි සිංහල අරුත සමගින්
          </Text>
        </View>
        {bodhiPoojaList.map((bodhiPooja, index) => (
          <BodhiPoojaCard
            key={bodhiPooja.key}
            bodhiPooja={bodhiPooja}
            index={index}
          />
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

export default BodhiPoojaScreen;
