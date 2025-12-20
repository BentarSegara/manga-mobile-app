import {
  ArrowLeft,
  ChevronDown,
  Download,
  Heart,
  ListFilter,
  MoreVertical,
  Play,
  Share2,
  Sun,
} from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { getMangaDetail } from "../request/request-manga";
import Loading from "../component/loading";
import Error from "../component/error";

const Detail = ({ navigation, route }) => {
  const { width, height } = useWindowDimensions();
  const { title, slug, genre, total_chapter, chapter_slug } = route.params;
  const [manga, setManga] = useState({
    author: "",
    status: "",
    comic: "",
    genres: [],
    synopsis: "",
    hImage: null,
    vImage: null,
    hImageRatio: 1,
  });

  const [metadata, setMetaData] = useState([
    { id: 1, data: "", title: "Jenis Komik" },
    { id: 2, data: "", title: "Status" },
    { id: 3, data: genre, title: "Konsep Cerita" },
  ]);

  const chapterArray = Array.from(
    { length: 10 },
    (_v, index) => total_chapter - index
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const setNewMetaData = (newdata) => {
    const newMetaData = [
      { ...metadata[0], ["data"]: newdata[0] },
      { ...metadata[1], ["data"]: newdata[1] },
      { ...metadata[2] },
    ];

    setMetaData(newMetaData);
  };

  const readManga = (chapter) => {
    navigation.navigate("Read", {
      title: title,
      chapter: chapter,
      totalChapter: total_chapter,
      chapterSlug: chapter_slug,
    });
  };

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await getMangaDetail(slug);
        setManga(data);
        setNewMetaData([data.comic, data.status]);
      } catch (err) {
        console.error(err.message);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <LinearGradient colors={["#1E293B", "#0F172A"]} style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        <>
          <ImageBackground
            style={[
              styles.headerBackground,
              { height: height * 0.4, width: width },
            ]}
            source={{ uri: manga.hImage }}
          >
            <View style={styles.headerRow}>
              <Pressable
                style={[styles.iconContainer, { marginRight: 10 }]}
                onPress={() => navigation.goBack()}
              >
                <ArrowLeft size={20} color={"#94A3B8"} />
              </Pressable>

              <View style={{ flexDirection: "row" }}>
                <Pressable style={[styles.iconContainer, { marginRight: 10 }]}>
                  <Sun size={20} color={"#94A3B8"} />
                </Pressable>
                <Pressable style={[styles.iconContainer, { marginRight: 10 }]}>
                  <Share2 size={20} color={"#94A3B8"} />
                </Pressable>
                <Pressable style={[styles.iconContainer, { marginRight: 10 }]}>
                  <MoreVertical size={20} color={"#94A3B8"} />
                </Pressable>
              </View>
            </View>
            <View style={styles.coverImageContainer}>
              <Image style={{ flex: 1 }} source={{ uri: manga.vImage }} />
            </View>
          </ImageBackground>
          <ScrollView style={styles.scrollViewContent}>
            <View style={{ alignSelf: "center" }}>
              <Text style={styles.mangaTitle}>{title}</Text>
              <Text style={{ textAlign: "center", color: "#94A3B8" }}>
                {manga.author}
              </Text>
            </View>
            <View style={{ marginVertical: 20 }}>
              <FlatList
                contentContainerStyle={styles.metadataContainer}
                ItemSeparatorComponent={() => (
                  <View style={styles.metadataSeparator}></View>
                )}
                scrollEnabled={false}
                horizontal={true}
                data={metadata}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View>
                    <Text style={styles.metadataValue}>{item.data}</Text>
                    <Text style={styles.metadataLabel}>{item.title}</Text>
                  </View>
                )}
              />
            </View>

            <View style={{ borderWidth: 0.2, borderColor: "#38BDF8" }}></View>
            <View style={{ marginVertical: 20, flexDirection: "row" }}>
              <Pressable style={styles.readButton} onPress={() => readManga(1)}>
                <Play size={18} color={"#0F172A"} fill={"#0F172A"} />
                <Text style={styles.readButtonText}>{"  "}Mulai Baca</Text>
              </Pressable>
              <View style={styles.favoriteButton}>
                <Heart color={"#F8FAFC"} />
              </View>
            </View>
            <View style={{ marginVertical: 10 }}>
              <View>
                <Text style={styles.sectionTitle}>Sinopsis</Text>
              </View>
              <View style={{ marginVertical: 10 }}>
                <Text numberOfLines={5} style={{ color: "#94A3B8" }}>
                  {manga.synopsis}
                </Text>
              </View>
              <Pressable style={styles.readMoreButton}>
                <Text style={{ color: "#38BDF8" }}>
                  Baca Selengkap nya{"  "}
                </Text>
                <ChevronDown size={16} color={"#38BDF8"} />
              </Pressable>
              <View>
                <FlatList
                  horizontal={true}
                  data={manga.genres}
                  keyExtractor={(_, index) => index.toString()}
                  ItemSeparatorComponent={() => (
                    <View style={{ width: 15 }}></View>
                  )}
                  renderItem={({ item }) => (
                    <View style={styles.genreTag}>
                      <Text style={styles.genreTagText}>{item}</Text>
                    </View>
                  )}
                />
              </View>
            </View>
            <View style={{ marginTop: 20, marginBottom: 50 }}>
              <View style={styles.chapterHeader}>
                <View>
                  <Text style={styles.chapterHeaderTitle}>
                    Chapter ({total_chapter})
                  </Text>
                </View>
                <View style={styles.chapterSortButton}>
                  <ListFilter size={18} color={"#38BDF8"} />
                  <Text style={{ color: "#38BDF8" }}>{"  "} Terbaru</Text>
                </View>
              </View>
              <View style={{ margin: 10 }}>
                <FlatList
                  scrollEnabled={false}
                  data={chapterArray}
                  keyExtractor={(_, index) => index.toString()}
                  ItemSeparatorComponent={() => (
                    <View
                      style={{ borderWidth: 0.2, borderColor: "#38BDF8" }}
                    ></View>
                  )}
                  renderItem={({ item }) => (
                    <Pressable
                      style={styles.chapterItem}
                      onPress={() => readManga(item)}
                    >
                      <Text style={styles.chapterItemText}>Chapter {item}</Text>
                      <Download opacity={0.8} size={18} color={"#38BDF8"} />
                    </Pressable>
                  )}
                />
              </View>
            </View>
          </ScrollView>
        </>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerBackground: {
    paddingTop: 40,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    backgroundColor: "rgba(0,0,0,0.25)",
  },
  coverImageContainer: {
    width: "45%",
    height: "75%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderBottomWidth: 0,
    elevation: 5,
    alignSelf: "center",
    overflow: "hidden",
    borderColor: "#38BDF8",
    backgroundColor: "#1E293B",
  },
  scrollViewContent: {
    paddingTop: 20,
    paddingHorizontal: 20,
    elevation: 5,
    backgroundColor: "#0F172A",
  },
  mangaTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F8FAFC",
  },
  metadataContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  metadataSeparator: {
    marginHorizontal: 35,
    borderWidth: 0.2,
    borderColor: "#1E293B",
  },
  metadataValue: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#F8FAFC",
  },
  metadataLabel: {
    fontSize: 10,
    textAlign: "center",
    color: "#94A3B8",
  },
  readButton: {
    flex: 1,
    paddingHorizontal: 15,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#38BDF8",
  },
  readButtonText: {
    fontWeight: "bold",
    color: "#0F172A",
  },
  favoriteButton: {
    marginLeft: 20,
    padding: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E293B",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F8FAFC",
  },
  readMoreButton: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  genreTag: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#38BDF8",
  },
  genreTagText: {
    fontSize: 12,
    color: "#F8FAFC",
  },
  chapterHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chapterHeaderTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F8FAFC",
  },
  chapterSortButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  chapterItem: {
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chapterItemText: {
    fontWeight: "bold",
    color: "#F8FAFC",
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
});

export default Detail;
