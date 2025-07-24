import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Colors } from "../constants/Colors";
import { ScreenNames } from "../constants/ScreenNames";

// Import screens
import Dashboard from "../screens/Dashboard";
import SuthraScreen from "../screens/SuthraScreen";
import PirithScreen from "../screens/PirithScreen";
import BodhiPoojaScreen from "../screens/BodhiPoojaScreen";
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
        headerBackTitleVisible: false,
        cardStyle: {
          backgroundColor: Colors.background,
        },
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
          headerBackTitleVisible: false,
          headerTintColor: Colors.text,
          headerStyle: { backgroundColor: Colors.surface },
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
