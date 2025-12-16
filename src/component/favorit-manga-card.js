import { BookOpen } from "lucide-react-native";
import React from "react";
import { Text, useWindowDimensions, View } from "react-native";

const FavoritManga = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View
      style={{
        width: width * 0.45,
        height: height * 0.25,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#34729C",
      }}
    >
      <View
        style={{
          width: "90%",
          height: "60%",
          margin: 10,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#6CB1DA",
        }}
      >
        <BookOpen size={30} color={"#C8EAEC"} />
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "500", color: "#C8EAEC" }}>
          One Piece
        </Text>
        <Text style={{ fontSize: 12, fontWeight: "500", color: "#C8EAEC" }}>
          Genre: Action
        </Text>
      </View>
    </View>
  );
};

export default FavoritManga;
