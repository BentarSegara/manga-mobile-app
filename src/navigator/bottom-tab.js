import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../tab/home-tab";
import { BookOpen, Compass, HomeIcon, User } from "lucide-react-native";
import { StyleSheet, View } from "react-native";
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
              style={[
                styles.tabIconContainer,
                {
                  elevation: focused ? 5 : 0,
                  backgroundColor: focused ? "#38BDF8" : "#0F172A",
                },
              ]}
            >
              <Icon color={focused ? "#0F172A" : "#38BDF8"} />
            </View>
          );
        },
        tabBarActiveTintColor: "#38BDF8",
        tabBarInactiveTintColor: "#94A3B8",
        tabBarLabelStyle: {
          marginTop: 10,
        },
        tabBarStyle: {
          height: 90,
          paddingTop: 15,
          paddingBottom: 15,
          backgroundColor: "#0F172A",
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

const styles = StyleSheet.create({
  tabIconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default BottomTabs;
