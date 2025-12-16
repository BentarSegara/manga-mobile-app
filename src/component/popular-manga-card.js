import { Dot } from "lucide-react-native";
import React from "react";
import {
  ImageBackground,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

const PopularManga = ({ anime }) => {
  const { width, height } = useWindowDimensions();

  return (
    <ImageBackground
      style={{
        width: width * 0.8,
        height: height * 0.23,
        padding: 15,
        borderRadius: 15,
        elevation: 5,
        justifyContent: "space-between",
        backgroundColor: "#34729C",
      }}
    >
      <View
        style={{
          width: 35,
          padding: 5,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "500", color: "#D1ECFF" }}>
          #1
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#D1ECFF" }}>
            {anime.title}
          </Text>
          <Text style={{ color: "#C8EAEC" }}>{anime.genre}</Text>
        </View>
        <Pressable
          style={{
            width: 120,
            height: 35,
            marginLeft: 20,
            flexDirection: "row",

            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View style={{ width: 3, backgroundColor: "#C8EAEC" }}></View>
          <View style={{ flex: 1, alignSelf: "center" }}>
            <Text style={{ textAlign: "center", color: "#C8EAEC" }}>
              Chapter 1000
            </Text>
          </View>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default PopularManga;
