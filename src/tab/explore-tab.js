import {
  Bell,
  ChevronRight,
  Compass,
  Mic,
  Search,
  Sun,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Explore = () => {
  const { width, height } = useWindowDimensions();
  const genres = [
    "Action",
    "Adventure",
    "Comedy",
    "Cooking",
    "Drama",
    "Fantasy",
    "Game",
    "Historical",
    "Horror",
    "Isekai",
    "Martial Arts",
    "Mistery",
    "Psychological",
    "Romance",
    "School life",
    "Sci-fi",
    "Slice of Life",
    "Sports",
    "Supernatural",
  ];
  const superior = ["Rilisan Terbaru", "Manga Populer", "Daftar Manga"];
  const [viewedGenres, setViewedGenres] = useState(genres.slice(0, 6));
  const [seeMoreButtonText, setSeeMoreButtonText] =
    useState("Lihat Lebih Banyak");

  const loadGenres = () => {
    if (seeMoreButtonText === "Lihat Lebih Banyak") {
      setViewedGenres(genres);
      setSeeMoreButtonText("Lihat Lebih Sedikit");
    } else {
      setViewedGenres(genres.slice(0, 6));
      setSeeMoreButtonText("Lihat Lebih Banyak");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#1E5470" }}>
      <StatusBar hidden={true} />

      <ScrollView>
        <LinearGradient
          colors={["#34729C", "#1E5470"]}
          style={[styles.header, { height: height * 0.15 }]}
        >
          <View style={styles.title}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Compass color={"#6CB1DA"} />
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "#D1ECFF" }}
              >
                {" "}
                Explore
              </Text>
            </View>
          </View>
          <View style={styles.searchBarContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Search color={"#6CB1DA"} style={{ marginRight: 5 }} />
              <TextInput
                placeholder="Cari manga favoritmu..."
                placeholderTextColor={"#6CB1DA"}
              />
            </View>
            <View>
              <Mic size={20} color={"#6CB1DA"} />
            </View>
          </View>
        </LinearGradient>

        <View style={{ marginVertical: 10, marginHorizontal: 20 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "500", color: "#D1ECFF" }}>
              Genre
            </Text>
          </View>
          <FlatList
            scrollEnabled={false}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
            contentContainerStyle={{ marginTop: 10 }}
            data={viewedGenres}
            keyExtractor={(_, index) => index.toString()}
            renderItem={(item) => (
              <TouchableOpacity
                style={{
                  width: width * 0.43,
                  height: height * 0.06,
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#34729C",
                }}
              >
                <Text
                  style={{ fontSize: 16, fontWeight: "500", color: "#C8EAEC" }}
                >
                  {item.item}
                </Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={{
              marginTop: 15,
              padding: 10,
              borderRadius: 50,
              alignSelf: "center",
              backgroundColor: "#34729C",
            }}
            onPress={loadGenres}
          >
            <Text style={{ color: "#C8EAEC" }}>{seeMoreButtonText}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 10, marginHorizontal: 20 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "500", color: "#D1ECFF" }}>
              Koleksi Unggulan
            </Text>
          </View>
          <FlatList
            scrollEnabled={false}
            data={superior}
            keyExtractor={(_, item) => item.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View
                  style={{
                    marginVertical: 15,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "500",
                      color: "#C8EAEC",
                    }}
                  >
                    {item}
                  </Text>
                  <ChevronRight size={20} color={"#C8EAEC"} />
                </View>
                <View
                  style={{ borderBottomWidth: 1, borderBottomColor: "#34729C" }}
                ></View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    justifyContent: "flex-end",
  },
  title: {
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#34729C",
  },
  searchBarContainer: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#34729C",
  },
});

export default Explore;
