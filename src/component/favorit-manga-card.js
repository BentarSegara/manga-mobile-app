import { BookOpen } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

const FavoritManga = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View
      style={[
        styles.container,
        { width: width * 0.45, height: height * 0.25 },
      ]}
    >
      <View style={styles.iconContainer}>
        <BookOpen size={30} color={"#0F172A"} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>
          One Piece
        </Text>
        <Text style={styles.genre}>
          Genre: Action
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#1E293B",
  },
  iconContainer: {
    width: "90%",
    height: "60%",
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#38BDF8",
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#F8FAFC",
  },
  genre: {
    fontSize: 12,
    fontWeight: "500",
    color: "#94A3B8",
  },
});

export default FavoritManga;
