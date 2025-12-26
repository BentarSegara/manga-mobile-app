import {
  ChevronRight,
  Compass,
  Mic,
  Search,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  FlatList,
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
  const {width, height } = useWindowDimensions();
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
    <View style={styles.mainContainer}>
      <StatusBar hidden={true} />

      <ScrollView>
        <LinearGradient
          colors={["#1E293B", "#0F172A"]}
          style={[styles.header, { height: height * 0.15 }]}
        >
          <View style={styles.title}>
            <View style={styles.titleRow}>
              <Compass color={"#38BDF8"} />
              <Text style={styles.titleText}>
                {" "}
                Explore
              </Text>
            </View>
          </View>
          <View style={styles.searchBarContainer}>
            <View style={styles.titleRow}>
              <Search color={"#38BDF8"} style={{ marginRight: 5 }} />
              <TextInput
                placeholder="Cari manga favoritmu..."
                placeholderTextColor={"#94A3B8"}
              />
            </View>
            <View>
              <Mic size={20} color={"#38BDF8"} />
            </View>
          </View>
        </LinearGradient>

        <View style={styles.sectionContainer}>
          <View>
            <Text style={styles.sectionTitle}>
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
                style={[
                  styles.genreButton,
                  { width: width * 0.43, height: height * 0.06 },
                ]}
              >
                <Text style={styles.genreButtonText}>
                  {item.item}
                </Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={styles.seeMoreButton}
            onPress={loadGenres}
          >
            <Text style={{ color: "#94A3B8" }}>{seeMoreButtonText}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionContainer}>
          <View>
            <Text style={styles.sectionTitle}>
              Koleksi Unggulan
            </Text>
          </View>
          <FlatList
            scrollEnabled={false}
            data={superior}
            keyExtractor={(_, item) => item.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style={styles.superiorItem}>
                  <Text style={styles.superiorItemText}>
                    {item}
                  </Text>
                  <ChevronRight size={20} color={"#94A3B8"} />
                </View>
                <View style={styles.superiorDivider}></View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#0F172A",
  },
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
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F8FAFC",
  },
  iconContainer: {
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E293B",
  },
  searchBarContainer: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1E293B",
  },
  sectionContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#F8FAFC",
  },
  genreButton: {
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E293B",
  },
  genreButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#94A3B8",
  },
  seeMoreButton: {
    marginTop: 15,
    padding: 10,
    borderRadius: 50,
    alignSelf: "center",
    backgroundColor: "#1E293B",
  },
  superiorItem: {
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  superiorItemText: {
    fontWeight: "500",
    color: "#94A3B8",
  },
  superiorDivider: {
    borderBottomWidth: 1,
    borderBottomColor: "#1E293B",
  },
});

export default Explore;
