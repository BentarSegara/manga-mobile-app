import { ArrowRight, Mail } from "lucide-react-native";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useAuth } from "../context/auth-context";

const ForgotPassword = ({ navigation }) => {
  const { confirmEmail } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    email: "",
  });

  const onConfirmPress = async () => {
    setIsLoading(true);
    try {
      await confirmEmail(userInput);
      navigation.navigate("ResetPassword", {
        email: userInput,
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
              Mengonfirmasi Email
            </Text>
          </View>
        </View>
      </Modal>
      <View>
        <Text style={styles.titleText}>Lupa password?</Text>
        <Text style={styles.subtitleText}>Konfirmasi email anda</Text>
      </View>

      <View style={{ marginTop: 25 }}>
        <View style={{ marginVertical: 15 }}>
          <View>
            <Text style={styles.labelText}>EMAIL</Text>
          </View>
          <View style={styles.inputContainer}>
            <Mail size={20} color={"#94A3B8"} style={{ marginRight: 5 }} />
            <TextInput
              style={{ flex: 1, color: "#FFFFFF" }}
              value={userInput}
              onChangeText={(newText) => setUserInput(newText)}
              keyboardType="email-address"
              textContentType="emailAddress"
              placeholder="nama@gmail.com"
              placeholderTextColor={"#94A3B8"}
            />
          </View>
          {validationErrors.email && (
            <Text style={styles.errorText}>*{validationErrors.email}</Text>
          )}
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={onConfirmPress}>
          <Text style={styles.submitButtonText}>Konfirmasi Email </Text>
          <ArrowRight color={"#0F172A"} />
        </TouchableOpacity>
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
});

export default ForgotPassword;
