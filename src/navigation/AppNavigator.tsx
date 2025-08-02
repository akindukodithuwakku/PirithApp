import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ScreenNames } from "../constants/ScreenNames";
import Dashboard from "../screens/Dashboard";
import PirithScreen from "../screens/PirithScreen";
import PirithDetailScreen from "../screens/PirithDetailScreen";
import SuthraScreen from "../screens/SuthraScreen";
import SuthraDetailScreen from "../screens/SuthraDetailScreen";
import BodhiPoojaScreen from "../screens/BodhiPoojaScreen";
import BodhiPoojaDetailScreen from "../screens/BodhiPoojaDetailScreen";
import JathakaKathaScreen from "../screens/JathakaKathaScreen";
import JatakaDetailScreen from "../screens/JatakaDetailScreen";
import ReferenceScreen from "../screens/Refference";

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.DASHBOARD}
      screenOptions={{
        headerShown: false,
        transitionSpec: {
          open: {
            animation: "timing",
            config: {
              duration: 300,
              easing: (t: number) => {
                return t * (2 - t); // Ease out cubic
              },
            },
          },
          close: {
            animation: "timing",
            config: {
              duration: 250,
              easing: (t: number) => {
                return t * t * (3 - 2 * t); // Smoothstep
              },
            },
          },
        },
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
              opacity: current.progress.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, 0.5, 1],
              }),
            },
            overlayStyle: {
              opacity: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
              }),
            },
          };
        },
        gestureEnabled: true,
        gestureDirection: "horizontal",
        gestureResponseDistance: 50,
        gestureVelocityImpact: 0.3,
      }}
    >
      <Stack.Screen name={ScreenNames.DASHBOARD} component={Dashboard} />
      <Stack.Screen name={ScreenNames.PIRITH} component={PirithScreen} />
      <Stack.Screen
        name={ScreenNames.PIRITH_DETAIL}
        component={PirithDetailScreen}
      />
      <Stack.Screen name={ScreenNames.SUTHRA} component={SuthraScreen} />
      <Stack.Screen
        name={ScreenNames.SUTHRA_DETAIL}
        component={SuthraDetailScreen}
      />
      <Stack.Screen
        name={ScreenNames.BODHI_POOJA}
        component={BodhiPoojaScreen}
      />
      <Stack.Screen
        name={ScreenNames.BODHI_POOJA_DETAIL}
        component={BodhiPoojaDetailScreen}
      />
      <Stack.Screen
        name={ScreenNames.JATHAKA_KATHA}
        component={JathakaKathaScreen}
      />
      <Stack.Screen
        name={ScreenNames.JATHAKA_DETAIL}
        component={JatakaDetailScreen}
      />
      <Stack.Screen name={ScreenNames.REFERENCE} component={ReferenceScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
