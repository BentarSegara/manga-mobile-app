import {
  ArrowLeft,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Compass,
  Download,
  Heart,
  ListFilter,
  Mic,
  MoreVertical,
  Play,
  Search,
  Share2,
  Star,
  Sun,
  WifiOff,
} from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { request } from "../request/request";
import { getMangaDetail } from "../request/request-manga";

const Loading = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <View style={{ marginBottom: 15 }}>
      <Text style={{ fontWeight: "bold", color: "#D1ECFF" }}>
        Memuat Data Manga
      </Text>
    </View>
    <View>
      <ActivityIndicator size={"large"} />
    </View>
  </View>
);

const Error = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <View style={{ marginBottom: 15, alignItems: "center" }}>
      <WifiOff size={30} color={"#34729C"} />
      <Text style={{ fontWeight: "bold", color: "#34729C" }}>
        {"\n"} Error Pada Saat Memuat Data Manga
      </Text>
    </View>
    <Pressable>
      <Text style={{ fontWeight: "bold", color: "#D1ECFF" }}>Coba Lagi</Text>
    </Pressable>
  </View>
);

const Detail = ({ navigation, route }) => {
  const { width, height } = useWindowDimensions();
  const { slug } = route.params;
  const [manga, setManga] = useState({
    title: "",
    author: "",
    status: "",
    comic: "",
    genre: "",
    genres: [],
    synopsis: "",
    total_chapter: "0",
    vImage: null,
    hImage: null,
    hImageRatio: 1,
  });

  const [metadata, setMetaData] = useState([
    { id: 1, data: "", title: "Jenis Komik" },
    { id: 2, data: "", title: "Status" },
    { id: 3, data: "", title: "Konsep Cerita" },
  ]);

  const [chapterArray, setChapterArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const setNewMetaData = (newdata) => {
    const newMetdata = metadata.map((meta, index) => ({
      ...meta,
      ["data"]: newdata[index],
    }));
    setMetaData(newMetdata);
  };

  const setChapter = (chapterString) => {
    const chapterInt = parseInt(chapterString);
    const totalChapter = Math.ceil(chapterInt);
    const chapters = Array.from(
      { length: 10 },
      (_v, index) => totalChapter - index
    );

    setChapterArray(chapters);
  };

  const readManga = (chapter) => {
    navigation.navigate("Read", {
      title: manga.title,
      chapter: chapter,
      totalChapter: manga.total_chapter,
    });
  };

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await getMangaDetail(slug);
        setManga(data);
        setNewMetaData([data.comic, data.status, data.genre]);
        setChapter(data.total_chapter);
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
    <LinearGradient colors={["#34729C", "#1E5470"]} style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        <>
          <ImageBackground
            style={{
              height: height * 0.4,
              width: width,
              paddingTop: 40,
              paddingHorizontal: 20,
              justifyContent: "space-between",
            }}
            source={{ uri: manga.hImage }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Pressable
                style={[styles.iconContainer, { marginRight: 10 }]}
                onPress={() => navigation.goBack()}
              >
                <ArrowLeft size={20} color={"#C8EAEC"} />
              </Pressable>

              <View style={{ flexDirection: "row" }}>
                <Pressable style={[styles.iconContainer, { marginRight: 10 }]}>
                  <Sun size={20} color={"#C8EAEC"} />
                </Pressable>
                <Pressable style={[styles.iconContainer, { marginRight: 10 }]}>
                  <Share2 size={20} color={"#C8EAEC"} />
                </Pressable>
                <Pressable style={[styles.iconContainer, { marginRight: 10 }]}>
                  <MoreVertical size={20} color={"#C8EAEC"} />
                </Pressable>
              </View>
            </View>
            <View
              style={{
                width: "45%",
                height: "75%",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderWidth: 1,
                borderBottomWidth: 0,
                elevation: 5,
                alignSelf: "center",
                overflow: "hidden",
                borderColor: "#6CB1DA",
                backgroundColor: "#34729C",
              }}
            >
              <Image style={{ flex: 1 }} source={{ uri: manga.vImage }} />
            </View>
          </ImageBackground>
          <ScrollView
            style={{
              paddingTop: 20,
              paddingHorizontal: 20,
              elevation: 5,
              backgroundColor: "#1E5470",
            }}
          >
            <View style={{ alignSelf: "center" }}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "#D1ECFF" }}
              >
                {manga.title}
              </Text>
              <Text style={{ textAlign: "center", color: "#D1ECFF" }}>
                {manga.author}
              </Text>
            </View>
            <View style={{ marginVertical: 20 }}>
              <FlatList
                contentContainerStyle={{
                  flex: 1,
                  paddingHorizontal: 20,
                }}
                ItemSeparatorComponent={() => (
                  <View
                    style={{
                      marginHorizontal: 35,
                      borderWidth: 0.2,
                      borderColor: "#34729C",
                    }}
                  ></View>
                )}
                scrollEnabled={false}
                horizontal={true}
                data={metadata}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#D1ECFF",
                      }}
                    >
                      {item.data}
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        textAlign: "center",
                        color: "#D1ECFF",
                      }}
                    >
                      {item.title}
                    </Text>
                  </View>
                )}
              />
            </View>

            <View style={{ borderWidth: 0.2, borderColor: "#6CB1DA" }}></View>
            <View style={{ marginVertical: 20, flexDirection: "row" }}>
              <Pressable
                style={{
                  flex: 1,
                  paddingHorizontal: 15,
                  borderRadius: 15,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#6CB1DA",
                }}
                onPress={() => readManga(1)}
              >
                <Play size={18} color={"#1E5470"} fill={"#1E5470"} />
                <Text style={{ fontWeight: "bold", color: "#1E5470" }}>
                  {"  "}Mulai Baca
                </Text>
              </Pressable>
              <View
                style={{
                  marginLeft: 20,
                  padding: 15,
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#34729C",
                }}
              >
                <Heart color={"#D1ECFF"} />
              </View>
            </View>
            <View style={{ marginVertical: 10 }}>
              <View>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", color: "#D1ECFF" }}
                >
                  Sinopsis
                </Text>
              </View>
              <View style={{ marginVertical: 10 }}>
                <Text numberOfLines={5} style={{ color: "#C8EAEC" }}>
                  {manga.synopsis}
                </Text>
              </View>
              <Pressable
                style={{
                  marginBottom: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#6CB1DA" }}>
                  Baca Selengkap nya{"  "}
                </Text>
                <ChevronDown size={16} color={"#6CB1DA"} />
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
                    <View
                      style={{
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        borderWidth: 1,
                        borderRadius: 15,
                        borderColor: "#6CB1DA",
                      }}
                    >
                      <Text style={{ fontSize: 12, color: "#D1ECFF" }}>
                        {item}
                      </Text>
                    </View>
                  )}
                />
              </View>
            </View>
            <View style={{ marginTop: 20, marginBottom: 50 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "#D1ECFF",
                    }}
                  >
                    Chapter ({manga.total_chapter})
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <ListFilter size={18} color={"#6CB1DA"} />
                  <Text style={{ color: "#6CB1DA" }}>{"  "} Terbaru</Text>
                </View>
              </View>
              <View style={{ margin: 10 }}>
                <FlatList
                  scrollEnabled={false}
                  data={chapterArray}
                  keyExtractor={(_, index) => index.toString()}
                  ItemSeparatorComponent={() => (
                    <View
                      style={{ borderWidth: 0.2, borderColor: "#6CB1DA" }}
                    ></View>
                  )}
                  renderItem={({ item }) => (
                    <Pressable
                      style={{
                        paddingVertical: 15,
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                      onPress={() => readManga(item.toString())}
                    >
                      <Text style={{ fontWeight: "bold", color: "#D1ECFF" }}>
                        Chapter {item}
                      </Text>
                      <Download opacity={0.8} size={18} color={"#6CB1DA"} />
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

export default Detail;
