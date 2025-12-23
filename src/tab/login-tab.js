import {
  ArrowRight,
  Chrome,
  Eye,
  EyeClosed,
  Facebook,
  Lock,
  Mail,
  Sun,
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
          Welcome Back!
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "500", color: "#94A3B8" }}>
          Lanjutkan progres membaca Anda hari ini.
        </Text>
      </View>

      <View style={{ marginTop: 50, marginBottom: 25 }}>
        <View>
          <View>
            <Text style={{ fontWeight: "bold", color: "#94A3B8" }}>Email</Text>
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

        <View style={{ marginVertical: 15 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "bold", color: "#94A3B8" }}>
              Password
            </Text>
            <Pressable>
              <Text style={{ fontWeight: "500", color: "#38BDF8" }}>
                Lupa Password?
              </Text>
            </Pressable>
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
              placeholder="******"
              placeholderTextColor={"#94A3B8"}
            />
            <Pressable onPress={seePasword}>
              <PassIcon size={20} color={"#94A3B8"} />
            </Pressable>
          </View>
        </View>
        <TouchableOpacity
          style={{
            padding: 15,
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
          }}
          onPress={() => navigation.navigate("BottomTabs")}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#0F172A" }}>
            Masuk{" "}
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
            style={{ width: "42%", height: 0.5, backgroundColor: "#94A3B8" }}
          />
          <Text style={{ fontSize: 12, color: "#94A3B8" }}>ATAU</Text>
          <View
            style={{ width: "42%", height: 0.5, backgroundColor: "#94A3B8" }}
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

export default Login;
