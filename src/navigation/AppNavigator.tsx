import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/LoginScreen";
import { RegisterScreen } from "../screens/auth/RegisterScreen";
import BottomTabs from "../components/navigation/BottomTabs";
import { JathakaKathaScreen } from "../screens/dashboard/JathakaKathaScreen";
import { SuuthraScreen } from "../screens/dashboard/SuuthraScreen";
import { SethKaviScreen } from "../screens/dashboard/SethKaviScreen";
import { PirithScreen } from "../screens/dashboard/PirithScreen";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
  JathakaKatha: undefined;
  Suuthra: undefined;
  SethKavi: undefined;
  Pirith: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Dashboard" component={BottomTabs} />
        <Stack.Screen name="JathakaKatha" component={JathakaKathaScreen} />
        <Stack.Screen name="Suuthra" component={SuuthraScreen} />
        <Stack.Screen name="SethKavi" component={SethKaviScreen} />
        <Stack.Screen name="Pirith" component={PirithScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
