import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/SplashScreen";
import AppNavigator from "./AppNavigator";

const RootStack = createStackNavigator();

const RootNavigator: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          // Smooth transition configurations for root navigator
          transitionSpec: {
            open: {
              animation: "timing",
              config: {
                duration: 400,
                easing: (t: number) => {
                  return t * t * (3 - 2 * t); // Smoothstep
                },
              },
            },
            close: {
              animation: "timing",
              config: {
                duration: 300,
                easing: (t: number) => {
                  return t * (2 - t); // Ease out cubic
                },
              },
            },
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateY: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.height * 0.1, 0],
                    }),
                  },
                ],
                opacity: current.progress.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [0, 0.8, 1],
                }),
              },
            };
          },
        }}
      >
        {showSplash ? (
          <RootStack.Screen name="Splash">
            {() => <SplashScreen onFinish={() => setShowSplash(false)} />}
          </RootStack.Screen>
        ) : (
          <RootStack.Screen name="MainApp" component={AppNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
