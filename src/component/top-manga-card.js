import { Dot } from "lucide-react-native";
import React from "react";
import {
  ImageBackground,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

const TopManga = ({ anime }) => {
  const { width, height } = useWindowDimensions();

  return (
    <ImageBackground
      style={{
        width: width * 0.8,
        height: height * 0.23,
        // padding: 15,
        borderRadius: 15,
        elevation: 5,
        overflow: "hidden",
        justifyContent: "space-between",
        backgroundColor: "#34729C",
      }}
      source={{ uri: anime.image }}
    >
      <View
        style={{
          width: 50,
          padding: 5,
          borderBottomRightRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "500", color: "#34729C" }}>
          # {anime.rank}
        </Text>
      </View>
      <View
        style={{
          paddingVertical: 5,
          paddingHorizontal: 15,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <View>
          <Text
            numberOfLines={1}
            style={{ fontSize: 16, fontWeight: "bold", color: "#D1ECFF" }}
          >
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
              Chapter {anime.chapter}
            </Text>
          </View>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default TopManga;
