import {
  ArrowRight,
  Chrome,
  Eye,
  EyeClosed,
  Facebook,
  Lock,
  Mail,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Modal,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useAuth } from "../context/auth-context";

const Login = ({ navigation }) => {
  const { login } = useAuth();
  const [passVisible, setPassVisible] = useState(false);
  const [PassIcon, setPassIcon] = useState(Eye);
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    email: "",
    password: "",
  });

  const seePasword = () => {
    if (!passVisible) setPassIcon(EyeClosed);
    else setPassIcon(Eye);
    setPassVisible(!passVisible);
  };

  const onInputUser = (field, newText) => {
    setUserInput({ ...userInput, [field]: newText });
  };

  const onLoginPress = async () => {
    setIsLoading(true);
    try {
      await login(userInput);
      navigation.reset({
        index: 0,
        routes: [{ name: "BottomTabs" }],
      });
    } catch (err) {
      setValidationErrors(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={["#1E293B", "#0F172A"]}
      style={styles.mainContainer}
    >
      <StatusBar hidden={true} />
      <Modal visible={isLoading} transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={"small"} />
            <Text style={{ fontSize: 16, color: "#94A3B8" }}>
              {"  "}
              Login User
            </Text>
          </View>
        </View>
      </Modal>
      <View>
        <Text style={styles.titleText}>Welcome Back!</Text>
        <Text style={styles.subtitleText}>
          Lanjutkan progres membaca Anda hari ini.
        </Text>
      </View>

      <View style={{ marginTop: 50, marginBottom: 25 }}>
        <View>
          <View>
            <Text style={styles.labelText}>EMAIL</Text>
          </View>
          <View style={styles.inputContainer}>
            <Mail size={20} color={"#94A3B8"} style={{ marginRight: 5 }} />
            <TextInput
              style={{ flex: 1, color: "#FFFFFF" }}
              keyboardType="email-address"
              value={userInput.email}
              onChangeText={(newText) => onInputUser("email", newText)}
              placeholder="nama@gmail.com"
              placeholderTextColor={"#94A3B8"}
            />
          </View>
          {validationErrors.email && (
            <Text style={styles.errorText}>*{validationErrors.email}</Text>
          )}
        </View>

        <View style={{ marginVertical: 15 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.labelText}>PASSWORD</Text>
            <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
              <Text style={{ fontWeight: "500", color: "#38BDF8" }}>
                Lupa Password?
              </Text>
            </Pressable>
          </View>
          <View style={styles.inputContainer}>
            <Lock size={20} color={"#94A3B8"} style={{ marginRight: 5 }} />
            <TextInput
              style={{ flex: 1, color: "#FFFFFF" }}
              value={userInput.password}
              onChangeText={(newText) => onInputUser("password", newText)}
              textContentType="password"
              secureTextEntry={!passVisible}
              placeholder="Minimal 8 karakter"
              placeholderTextColor={"#94A3B8"}
            />
            <Pressable onPress={seePasword}>
              <PassIcon size={20} color={"#94A3B8"} />
            </Pressable>
          </View>
          {validationErrors.password && (
            <Text style={styles.errorText}>*{validationErrors.password}</Text>
          )}
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={onLoginPress}>
          <Text style={styles.submitButtonText}>Masuk </Text>
          <ArrowRight color={"#0F172A"} />
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={{ fontSize: 12, color: "#94A3B8" }}>ATAU</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.socialButtonsContainer}>
          <View style={styles.socialButton}>
            <Chrome size={20} color={"#FFFFFF"} />
            <Text style={{ color: "#FFFFFF" }}>{"  "}Google</Text>
          </View>

          <View style={styles.socialButton}>
            <Facebook size={20} color={"#38BDF8"} />
            <Text style={{ color: "#FFFFFF" }}>{"  "}Facebook</Text>
          </View>
        </View>
        <View style={styles.registerLinkContainer}>
          <Text style={{ color: "#94A3B8" }}>Belum punya akun? </Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={{ fontWeight: "500", color: "#FBBF24" }}>
              Daftar Sekarang
            </Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  loadingContainer: {
    width: "80%",
    height: "7%",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#0F172A",
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subtitleText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#94A3B8",
  },
  labelText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#94A3B8",
  },
  inputContainer: {
    marginTop: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 0.2,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#94A3B8",
    backgroundColor: "#0F172A",
  },
  errorText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#FF0033",
  },
  submitButton: {
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0F172A",
  },
  dividerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dividerLine: {
    width: "42%",
    height: 0.5,
    backgroundColor: "#94A3B8",
  },
  socialButtonsContainer: {
    marginVertical: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialButton: {
    width: "48%",
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.2,
    borderRadius: 15,
    borderColor: "#94A3B8",
    backgroundColor: "#0F172A",
  },
  registerLinkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
