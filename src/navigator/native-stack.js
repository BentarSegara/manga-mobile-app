import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BottomTabs from "./bottom-tab";
import Detail from "../tab/detail-tab";
import Read from "../tab/read-tab";

const Stack = createNativeStackNavigator();

const NativeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabs"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Read" component={Read} />
    </Stack.Navigator>
  );
};
export default NativeStack;
