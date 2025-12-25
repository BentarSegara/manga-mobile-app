import {
  ArrowRight,
  Check,
  CheckCircle,
  Chrome,
  Eye,
  EyeClosed,
  Facebook,
  Lock,
  Mail,
  Sun,
  User,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Modal,
  Pressable,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useAuth } from "../context/auth-context";

const Register = ({ navigation }) => {
  const { register } = useAuth();
  const [passVisible, setPassVisible] = useState(false);
  const [PassIcon, setPassIcon] = useState(Eye);
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [modalVisible, setModalVisible] = useState(false);

  const onInputUser = (field, newText) => {
    setUserInput({ ...userInput, [field]: newText });
  };

  const seePasword = () => {
    if (!passVisible) setPassIcon(EyeClosed);
    else setPassIcon(Eye);
    setPassVisible(!passVisible);
  };

  const onRegisterPress = async () => {
    setModalVisible(true);
    setIsLoading(true);
    try {
      await register(userInput);
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
      style={{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
      }}
    >
      <StatusBar hidden={true} />
      <Modal visible={modalVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          {isLoading ? (
            <View
              style={{
                width: "80%",
                height: "7%",
                flexDirection: "row",
                justifyContent: "center",
                alignSelf: "center",
                alignItems: "center",
                backgroundColor: "#0F172A",
              }}
            >
              <ActivityIndicator size={"small"} />
              <Text style={{ fontSize: 16, color: "#94A3B8" }}>
                {"  "}
                Memproses Registrasi
              </Text>
            </View>
          ) : (
            <View
              style={{
                width: "80%",
                height: "15%",
                paddingVertical: 10,
                justifyContent: "space-between",
                alignSelf: "center",
                backgroundColor: "#0F172A",
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <CheckCircle color={"green"} />
                <Text style={{ fontSize: 18, color: "#94A3B8" }}>
                  {"  "}Registrasi Berhasil
                </Text>
              </View>
              <View
                style={{
                  padding: 10,
                  borderTopWidth: 1,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  borderTopColor: "#1E293B",
                }}
              >
                <Pressable onPress={() => setModalVisible(false)}>
                  <Text style={{ fontSize: 16, color: "#94A3B8" }}>
                    Nanti saja
                  </Text>
                </Pressable>
                <View style={{ width: 1, backgroundColor: "#1E293B" }} />
                <Pressable
                  onPress={() => {
                    setModalVisible(false);
                    navigation.navigate("Login");
                  }}
                >
                  <Text style={{ fontSize: 16, color: "#94A3B8" }}>
                    Login sekarang
                  </Text>
                </Pressable>
              </View>
            </View>
          )}
        </View>
      </Modal>
      <View>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "#FFFFFF" }}>
          Buat Akun Baru.
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "500", color: "#94A3B8" }}>
          Bergabunglah dengan Komunitas Nakama Manga
        </Text>
      </View>

      <View style={{ marginTop: 50, marginBottom: 25 }}>
        <View>
          <View>
            <Text
              style={{ fontSize: 12, fontWeight: "bold", color: "#94A3B8" }}
            >
              USERNAME
            </Text>
          </View>
          <View
            style={{
              marginTop: 5,
              paddingVertical: 5,
              borderWidth: 0.2,
              paddingHorizontal: 10,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
              borderColor: "#94A3B8",
              backgroundColor: "#0F172A",
            }}
          >
            <User size={20} color={"#94A3B8"} style={{ marginRight: 5 }} />
            <TextInput
              style={{ flex: 1, color: "#FFFFFF" }}
              value={userInput.name}
              onChangeText={(newText) => onInputUser("name", newText)}
              placeholder="Ex: Monkey D. Luffy"
              placeholderTextColor={"#94A3B8"}
            />
          </View>
          {validationErrors.name && (
            <Text style={{ fontSize: 12, fontWeight: "500", color: "#FF0033" }}>
              *{validationErrors.name}
            </Text>
          )}
        </View>

        <View style={{ marginVertical: 15 }}>
          <View>
            <Text
              style={{ fontSize: 12, fontWeight: "bold", color: "#94A3B8" }}
            >
              EMAIL
            </Text>
          </View>
          <View
            style={{
              marginTop: 5,
              paddingVertical: 5,
              borderWidth: 0.2,
              paddingHorizontal: 10,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
              borderColor: "#94A3B8",
              backgroundColor: "#0F172A",
            }}
          >
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
            <Text style={{ fontSize: 12, fontWeight: "500", color: "#FF0033" }}>
              *{validationErrors.email}
            </Text>
          )}
        </View>

        <View>
          <View>
            <Text
              style={{ fontSize: 12, fontWeight: "bold", color: "#94A3B8" }}
            >
              PASSWORD
            </Text>
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
            <Text style={{ fontSize: 12, fontWeight: "500", color: "#FF0033" }}>
              *{validationErrors.password}
            </Text>
          )}
        </View>
        <TouchableOpacity
          style={{
            marginTop: 15,
            padding: 15,
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
          }}
          onPress={onRegisterPress}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#0F172A" }}>
            Buat Akun{" "}
          </Text>
          <ArrowRight color={"#0F172A"} />
        </TouchableOpacity>
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{ width: "28%", height: 0.5, backgroundColor: "#94A3B8" }}
          />
          <Text style={{ fontSize: 12, color: "#94A3B8" }}>
            ATAU DAFTAR DENGAN
          </Text>
          <View
            style={{ width: "28%", height: 0.5, backgroundColor: "#94A3B8" }}
          />
        </View>

        <View
          style={{
            marginVertical: 25,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: "48%",
              height: 45,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 0.2,
              borderRadius: 15,
              borderColor: "#94A3B8",
              backgroundColor: "#0F172A",
            }}
          >
            <Chrome size={20} color={"#FFFFFF"} />
            <Text style={{ color: "#FFFFFF" }}>{"  "}Google</Text>
          </View>

          <View
            style={{
              width: "48%",
              height: 45,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 0.2,
              borderRadius: 15,
              borderColor: "#94A3B8",
              backgroundColor: "#0F172A",
            }}
          >
            <Facebook size={20} color={"#38BDF8"} />
            <Text style={{ color: "#FFFFFF" }}>{"  "}Facebook</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#94A3B8" }}>Sudah punya akun? </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={{ fontWeight: "500", color: "#FBBF24" }}>
              Masuk Sekarang
            </Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Register;
