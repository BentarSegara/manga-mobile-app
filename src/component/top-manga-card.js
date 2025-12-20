import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

const TopManga = ({ anime, ratio }) => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();

  return (
    <Pressable
      style={[styles.container, { aspectRatio: ratio, height: height * 0.23 }]}
      onPress={() =>
        navigation.navigate("Detail", {
          slug: anime.slug,
        })
      }
    >
      <ImageBackground
        style={styles.imageBackground}
        imageStyle={{ aspectRatio: ratio }}
        source={{ uri: anime.image }}
      >
        <View style={styles.rankContainer}>
          <Text style={styles.rankText}>
            # {anime.rank}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <View>
            <Text
              numberOfLines={1}
              style={styles.title}
            >
              {anime.title}
            </Text>
            <Text style={{ color: "#94A3B8" }}>
              {anime.genre} | Chapter {anime.chapter}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    elevation: 5,
    overflow: "hidden",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#1E293B",
  },
  rankContainer: {
    width: 50,
    padding: 5,
    borderBottomRightRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  rankText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#FBBF24",
  },
  infoContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F8FAFC",
  },
});

export default TopManga;
