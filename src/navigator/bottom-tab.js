import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../tab/home-tab";
import { BookOpen, Compass, HomeIcon, User } from "lucide-react-native";
import { StatusBar, useWindowDimensions, View } from "react-native";
import Explore from "../tab/explore-tab";
import Library from "../tab/library-tab";
import Profile from "../tab/profile-tab";

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let Icon;
          if (route.name === "Home") Icon = HomeIcon;
          else if (route.name === "Explore") Icon = Compass;
          else if (route.name === "Library") Icon = BookOpen;
          else Icon = User;

          return (
            <View
              style={{
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                elevation: focused ? 5 : 0,
                borderRadius: 10,
                backgroundColor: focused ? "#6EC1D1" : "#1E5470",
              }}
            >
              <Icon color={focused ? "#1E5470" : "#6CB1DA"} />
            </View>
          );
        },
        tabBarActiveTintColor: "#6EC1D1",
        tabBarInactiveTintColor: "#1E5470",
        tabBarLabelStyle: {
          marginTop: 10,
        },
        tabBarStyle: {
          height: 90,
          paddingTop: 15,
          paddingBottom: 15,
          backgroundColor: "#1E5470",
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
