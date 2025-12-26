import {
  ArrowRight,
  CheckCircle,
  Chrome,
  Eye,
  EyeClosed,
  Lock,
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

const ResetPassword = ({ navigation, route }) => {
  const { changePassword } = useAuth();
  const { email } = route.params;
  const [passVisible, setPassVisible] = useState(false);
  const [PassIcon, setPassIcon] = useState(Eye);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [userInput, setUserInput] = useState({
    password: "",
    confirmedPassword: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    password: "",
    confirmedPassword: "",
  });

  const seePasword = () => {
    if (!passVisible) setPassIcon(EyeClosed);
    else setPassIcon(Eye);
    setPassVisible(!passVisible);
  };

  const onInputUser = (field, newText) => {
    setUserInput({ ...userInput, [field]: newText });
  };

  const onSavePress = async () => {
    setModalVisible(true);
    setIsLoading(true);
    try {
      await changePassword(email, userInput);
    } catch (err) {
      setValidationErrors(err);
      setModalVisible(false);
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
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalOverlay}>
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size={"small"} />
              <Text style={{ fontSize: 16, color: "#94A3B8" }}>
                {"  "}
                Mengubah Password User
              </Text>
            </View>
          ) : (
            <View style={styles.confirmationContainer}>
              <View style={styles.successIconContainer}>
                <CheckCircle color={"green"} />
                <Text style={{ fontSize: 18, color: "#94A3B8" }}>
                  {"  "}Password Berhasil Diubah
                </Text>
              </View>
              <View style={styles.confirmationButtonsRow}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                    navigation.navigate("Login");
                  }}
                >
                  <Text style={{ fontSize: 16, color: "#94A3B8" }}>
                    Kembali ke Halaman Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </Modal>
      <View>
        <Text style={styles.titleText}>Reset Password</Text>
        <Text style={styles.subtitleText}>
          Buat password baru yang kuat untuk akun Anda.
        </Text>
      </View>

      <View style={{ marginTop: 50, marginBottom: 25 }}>
        <View>
          <View>
            <Text style={styles.labelText}>PASSWORD</Text>
          </View>
          <View
            style={{
              marginTop: 5,
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderWidth: 0.2,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
              borderColor: "#94A3B8",
              backgroundColor: "#0F172A",
            }}
          >
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

        <View style={{ marginVertical: 15 }}>
          <View>
            <Text style={styles.labelText}>KONFIRMASI PASSWORD</Text>
          </View>
          <View style={styles.inputContainer}>
            <Lock size={20} color={"#94A3B8"} style={{ marginRight: 5 }} />
            <TextInput
              style={{ flex: 1, color: "#FFFFFF" }}
              value={userInput.confirmedPassword}
              onChangeText={(newText) =>
                onInputUser("confirmedPassword", newText)
              }
              textContentType="password"
              secureTextEntry={true}
              placeholder="Ulangi password baru"
              placeholderTextColor={"#94A3B8"}
            />
          </View>
          {validationErrors.confirmedPassword && (
            <Text style={styles.errorText}>
              *{validationErrors.confirmedPassword}
            </Text>
          )}
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={onSavePress}>
          <Text style={styles.submitButtonText}>Simpan Password </Text>
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
  confirmationContainer: {
    width: "80%",
    height: "15%",
    paddingVertical: 10,
    justifyContent: "space-between",
    alignSelf: "center",
    backgroundColor: "#0F172A",
  },
  successIconContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  confirmationButtonsRow: {
    padding: 10,
    borderTopWidth: 1,
    alignItems: "center",
    borderTopColor: "#1E293B",
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

export default ResetPassword;
