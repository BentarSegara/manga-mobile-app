import { NavigationContainer } from "@react-navigation/native";
import NativeStack from "./src/navigator/native-stack";
import { AuthProvider, useAuth } from "./src/context/auth-context";
import { View, Text, StyleSheet, Animated, StatusBar } from "react-native";
import { useEffect, useRef, useState } from "react";
import SplashScreen from "./src/tab/splash-tab";

// const AppNav = () => {
//   return (
//     <NavigationContainer>
//       <NativeStack />
//     </NavigationContainer>
//   );
// };

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <NativeStack />
      </NavigationContainer>
    </AuthProvider>
  );
}
