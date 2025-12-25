import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BottomTabs from "./bottom-tab";
import Detail from "../tab/detail-tab";
import Read from "../tab/read-tab";
import Login from "../tab/login-tab";
import Register from "../tab/register-tab";
import SplashScreen from "../tab/splash-tab";
import ResetPassword from "../tab/reset-password";
import ForgotPassword from "../tab/forgot-password";

const Stack = createNativeStackNavigator();

const NativeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Read" component={Read} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};
export default NativeStack;
