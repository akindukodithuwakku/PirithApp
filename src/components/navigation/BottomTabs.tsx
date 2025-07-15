import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../../screens/dashboard/HomeScreen";
import { PlayerScreen } from "../../screens/dashboard/PlayerScreen";
import { PlaylistScreen } from "../../screens/dashboard/PlaylistScreen";
import { LibraryScreen } from "../../screens/dashboard/LibraryScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#800000",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: { backgroundColor: "#F5F5F5" },
        tabBarIcon: ({ color, size }) => {
          let iconName = "home";
          if (route.name === "Home") iconName = "home";
          else if (route.name === "Player") iconName = "play-circle";
          else if (route.name === "Playlist") iconName = "list";
          else if (route.name === "Library") iconName = "library";
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Player" component={PlayerScreen} />
      <Tab.Screen name="Playlist" component={PlaylistScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
