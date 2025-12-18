import { useNavigation } from "@react-navigation/native";
import { BookOpen, ChevronRight, Dot, Star } from "lucide-react-native";
import React from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

const LatestManga = ({ anime }) => {
  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  return (
    <Pressable
      style={{
        flex: 1,
        borderRadius: 5,
        elevation: 5,
        flexDirection: "row",
        overflow: "hidden",
        backgroundColor: "#34729C",
      }}
      onPress={() =>
        navigation.navigate("Detail", {
          slug: anime.slug,
        })
      }
    >
      <View
        style={{
          width: 160,
          backgroundColor: "#1E5470",
        }}
      >
        <Image style={{ flex: 1 }} source={{ uri: anime.image }} />
      </View>
      <View
        style={{
          width: "55%",
          padding: 10,
          justifyContent: "space-around",
        }}
      >
        <View>
          <Text
            numberOfLines={2}
            style={{ fontSize: 16, fontWeight: "bold", color: "#D1ECFF" }}
          >
            {anime.title}
          </Text>
        </View>
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontSize: 12, color: "#C8EAEC" }}>
            {anime.category} {anime.genre}
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
          onPress={() =>
            navigation.navigate("Read", {
              title: anime.title,
              chapter: anime.chapter,
              totalChapter: anime.chapter,
            })
          }
        >
          <Text style={{ fontWeight: "500", color: "1E5470" }}>
            Chapter {anime.chapter}
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

export default LatestManga;
