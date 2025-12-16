import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NativeStack from "./src/navigator/native-stack";

export default function App() {
  return (
    <NavigationContainer>
      <NativeStack />
    </NavigationContainer>
  );
}
