import { useNavigation } from "@react-navigation/native";
import { Dot } from "lucide-react-native";
import React from "react";
import {
  ImageBackground,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

const TopManga = ({ anime, ratio }) => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();

  return (
    <Pressable
      style={{
        aspectRatio: ratio,
        height: height * 0.23,
        borderRadius: 15,
        elevation: 5,
        overflow: "hidden",
      }}
      onPress={() =>
        navigation.navigate("Detail", {
          slug: anime.slug,
        })
      }
    >
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: "space-between",
          backgroundColor: "#34729C",
        }}
        imageStyle={{ aspectRatio: ratio }}
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
            <Text style={{ color: "#C8EAEC" }}>
              {anime.genre} | Chapter {anime.chapter}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default TopManga;
