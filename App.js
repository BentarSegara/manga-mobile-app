import { NavigationContainer } from "@react-navigation/native";
import NativeStack from "./src/navigator/native-stack";
import { AuthProvider } from "./src/context/auth-context";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <NativeStack />
      </NavigationContainer>
    </AuthProvider>
  );
}
