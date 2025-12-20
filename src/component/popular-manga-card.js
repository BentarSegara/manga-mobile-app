import { useNavigation } from "@react-navigation/native";
import { Eye } from "lucide-react-native";
import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

const PopularManga = ({ anime, ratio }) => {
  const navigation = useNavigation();
  const { height } = useWindowDimensions();
  const metadata = {
    title: anime.title,
    slug: anime.slug,
    genre: anime.genre,
    total_chapter: anime.chapter,
    chapter_slug: anime.chapterSlug,
  };

  return (
    <Pressable
      style={{ aspectRatio: ratio, height: height * 0.23 }}
      onPress={() => navigation.navigate("Detail", metadata)}
    >
      <ImageBackground
        style={styles.imageBackground}
        source={{ uri: anime.image }}
      >
        <View style={styles.viewContainer}>
          <Eye size={15} color={"#38BDF8"} />
          <Text style={styles.viewText}>{anime.view}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {anime.title}
          </Text>
          <Text style={styles.genre}>
            {anime.genre} | Chapter {anime.chapter}
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    borderRadius: 15,
    elevation: 5,
    overflow: "hidden",
    justifyContent: "space-between",
    backgroundColor: "#1E293B",
  },
  viewContainer: {
    width: 70,
    padding: 5,
    flexDirection: "row",
    alignSelf: "flex-end",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  viewText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#F8FAFC",
  },
  infoContainer: {
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F8FAFC",
  },
  genre: {
    fontSize: 12,
    fontWeight: "300",
    color: "#94A3B8",
  },
});

export default PopularManga;
