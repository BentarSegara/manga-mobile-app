import { Dot, Eye, Star } from "lucide-react-native";
import React from "react";
import { ImageBackground, Text, useWindowDimensions, View } from "react-native";

const TopManga = ({ anime }) => {
  const { width, height } = useWindowDimensions();

  return (
    <ImageBackground
      style={{
        width: width * 0.35,
        height: height * 0.23,
        // padding: 15,
        borderRadius: 15,
        elevation: 5,
        overflow: "hidden",
        justifyContent: "space-between",
        backgroundColor: "#34729C",
      }}
    >
      <View
        style={{
          width: 70,
          padding: 5,
          flexDirection: "row",
          alignSelf: "flex-end",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <Eye size={15} color={"#6EC1D1"} />
        <Text style={{ fontSize: 12, fontWeight: "500", color: "#D1ECFF" }}>
          705 rb
        </Text>
      </View>
      <View style={{ padding: 10, backgroundColor: "rgba(0,0,0,0.5)" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#D1ECFF" }}>
          {anime.title}
        </Text>
        <Text style={{ fontSize: 12, fontWeight: "300", color: "#D1ECFF" }}>
          Romantis
        </Text>
      </View>
    </ImageBackground>
  );
};

export default TopManga;
