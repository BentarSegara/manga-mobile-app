import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BottomTabs from "./bottom-tab";

const Stack = createNativeStackNavigator();

const NativeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabs"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};
export default NativeStack;
