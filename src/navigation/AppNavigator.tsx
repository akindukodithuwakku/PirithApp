import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Colors } from "../constants/Colors";
import { ScreenNames } from "../constants/ScreenNames";

// Import screens
import Dashboard from "../screens/Dashboard";
import SuthraScreen from "../screens/SuthraScreen";
import PirithScreen from "../screens/PirithScreen";
import PirithDetailWrapper from "../screens/PirithDetailWrapper";
import BodhiPoojaScreen from "../screens/BodhiPoojaScreen";
import BodhiPoojaDetailScreen from "../screens/BodhiPoojaDetailScreen";
import JathakaKathaScreen from "../screens/JathakaKathaScreen";
import ReferenceScreen from "../screens/Refference";
import SuthraDetailScreen from "../screens/SuthraDetailScreen";

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.DASHBOARD}
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.surface,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: Colors.text,
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 18,
        },
        cardStyle: {
          backgroundColor: Colors.background,
        },
        // Smooth transition configurations
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
      <Stack.Screen
        name={ScreenNames.DASHBOARD}
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ScreenNames.SUTHRA}
        component={SuthraScreen}
        options={{
          title: "Suthra",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name={ScreenNames.PIRITH}
        component={PirithScreen}
        options={{
          title: "Pirith",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name={ScreenNames.BODHI_POOJA}
        component={BodhiPoojaScreen}
        options={{
          title: "Bodhi Pooja",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name={ScreenNames.JATHAKA_KATHA}
        component={JathakaKathaScreen}
        options={{
          title: "Jathaka Katha",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name={ScreenNames.REFERENCE}
        component={ReferenceScreen}
        options={{
          title: "Reference",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="SuthraDetail"
        component={SuthraDetailScreen}
        options={{
          title: "",
          headerTitleAlign: "center",
          headerTintColor: Colors.text,
          headerStyle: { backgroundColor: Colors.surface },
        }}
      />
      <Stack.Screen
        name="PirithDetail"
        component={PirithDetailWrapper}
        options={{
          title: "",
          headerTitleAlign: "center",
          headerTintColor: Colors.text,
          headerStyle: { backgroundColor: Colors.surface },
        }}
      />
      <Stack.Screen
        name={ScreenNames.BODHI_POOJA_DETAIL}
        component={BodhiPoojaDetailScreen}
        options={{
          title: "",
          headerTitleAlign: "center",
          headerTintColor: Colors.text,
          headerStyle: { backgroundColor: Colors.surface },
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
