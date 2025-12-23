import {
  ArrowRight,
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
  Pressable,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Login = ({ navigation }) => {
  const [passVisible, setPassVisible] = useState(false);
  const [PassIcon, setPassIcon] = useState(Eye);

  const seePasword = () => {
    if (!passVisible) setPassIcon(EyeClosed);
    else setPassIcon(Eye);
    setPassVisible(!passVisible);
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
              NAMA LENGKAP
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
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
              placeholder="Ex: Monkey D. Luffy"
              placeholderTextColor={"#94A3B8"}
            />
          </View>
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
              marginTop: 10,
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
              placeholder="nama@gmail.com"
              placeholderTextColor={"#94A3B8"}
            />
          </View>
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
              style={{ flex: 1 }}
              textContentType="password"
              secureTextEntry={!passVisible}
              placeholder="Minimal 8 karakter"
              placeholderTextColor={"#94A3B8"}
            />
            <Pressable onPress={seePasword}>
              <PassIcon size={20} color={"#94A3B8"} />
            </Pressable>
          </View>
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

export default Login;
