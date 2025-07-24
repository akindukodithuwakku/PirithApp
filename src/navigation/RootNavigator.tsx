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
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
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
