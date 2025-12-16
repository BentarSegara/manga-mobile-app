import { BookOpen, ChevronRight, Dot, Star } from "lucide-react-native";
import React from "react";
import {
  ImageBackground,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

const LatestManga = ({ anime }) => {
  const { width, height } = useWindowDimensions();

  return (
    <View
      style={{
        height: height * 0.15,
        borderRadius: 5,
        elevation: 5,
        flexDirection: "row",
        overflow: "hidden",
        backgroundColor: "#34729C",
      }}
    >
      <View
        style={{
          width: 150,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1E5470",
        }}
      >
        <BookOpen />
      </View>
      <View
        style={{
          marginHorizontal: 10,
          paddingVertical: 10,
          justifyContent: "space-around",
        }}
      >
        <View>
          <Text
            numberOfLines={1}
            style={{ fontSize: 16, fontWeight: "bold", color: "#D1ECFF" }}
          >
            {anime.title}
          </Text>
          <Text style={{ fontSize: 12, color: "#C8EAEC" }}>
            Manga Romantis {anime.time}
          </Text>
        </View>
        <Pressable
          style={{
            width: 100,
            padding: 8,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#6EC1D1",
          }}
        >
          <Text style={{ fontWeight: "500", color: "1E5470" }}>
            {anime.chapter}
          </Text>
        </Pressable>
      </View>
      {/* <View
        style={{
          width: 50,
          padding: 5,
          borderRadius: 5,
          flexDirection: "row",
          alignSelf: "flex-end",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#1E5470",
        }}
      >
        <Star size={15} color={"#6EC1D1"} fill={"#6EC1D1"} />
        <Text style={{ fontSize: 12, fontWeight: "500", color: "#D1ECFF" }}>
          {anime.rating}
        </Text>
      </View>
      <View style={{ marginVertical: 5 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#D1ECFF" }}>
          {anime.title}
        </Text>
      </View> */}
    </View>
  );
};

export default LatestManga;
