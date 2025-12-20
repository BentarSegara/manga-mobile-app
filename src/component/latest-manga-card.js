import { useNavigation } from "@react-navigation/native";
import { BookOpen, ChevronRight, Dot, Star } from "lucide-react-native";
import React from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

const LatestManga = ({ anime }) => {
  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate("Detail", {
          slug: anime.slug,
        })
      }
    >
      <View style={styles.imageContainer}>
        <Image style={{ flex: 1 }} source={{ uri: anime.image }} />
      </View>
      <View style={styles.contentContainer}>
        <View>
          <Text
            numberOfLines={2}
            style={styles.title}
          >
            {anime.title}
          </Text>
        </View>
        <View style={{ marginVertical: 5 }}>
          <Text style={styles.category}>
            {anime.category} {anime.genre}
          </Text>
        </View>
        <Pressable
          style={styles.chapterButton}
          onPress={() =>
            navigation.navigate("Read", {
              title: anime.title,
              chapter: anime.chapter,
              totalChapter: anime.chapter,
            })
          }
        >
          <Text style={styles.chapterButtonText}>
            Chapter {anime.chapter}
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    elevation: 5,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: "#1E293B",
  },
  imageContainer: {
    width: 160,
    backgroundColor: "#0F172A",
  },
  contentContainer: {
    width: "55%",
    padding: 10,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F8FAFC",
  },
  category: {
    fontSize: 12,
    color: "#94A3B8",
  },
  chapterButton: {
    width: 100,
    padding: 8,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#38BDF8",
  },
  chapterButtonText: {
    fontWeight: "500",
    color: "#0F172A",
  },
});

export default LatestManga;
