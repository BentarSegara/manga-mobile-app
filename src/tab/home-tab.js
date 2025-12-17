import {
  Bell,
  Clock,
  Dot,
  Flame,
  Search,
  Star,
  Sun,
  WifiOff,
} from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
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
import PopularManga from "../component/popular-manga-card";
import TopManga from "../component/top-manga-card";
import LatestManga from "../component/latest-manga-card";
import { getMangaSortBy } from "../request/request-manga";

const Section = ({ style, title, Icon, children }) => {
  return (
    <View
      style={[
        {
          marginTop: 20,
          marginHorizontal: 20,
          backgroundColor: "#1E5470",
        },
        style,
      ]}
    >
      <View style={styles.subTitle}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon size={20} color={"#6CB1DA"} />
          <Text style={{ fontSize: 18, fontWeight: "500", color: "#D1ECFF" }}>
            {" "}
            {title}
          </Text>
        </View>
        <Pressable>
          <Text style={{ fontWeight: "bold", color: "#34729C" }}>
            Lihat Semua
          </Text>
        </Pressable>
      </View>
      {children}
    </View>
  );
};

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

const Home = () => {
  const { width, height } = useWindowDimensions();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [topManga, setTopManga] = useState([]);
  const [popularManga, setPopularManga] = useState([]);
  const [latestManga, setLatestManga] = useState([]);

  useEffect(() => {
    const getMangaData = async () => {
      setIsLoading(true);
      try {
        const data = await Promise.all([
          getMangaSortBy("top"),
          getMangaSortBy("popular"),
          getMangaSortBy("latest"),
        ]);

        setTopManga(data[0]);
        setPopularManga(data[1]);
        setLatestManga(data[2]);
      } catch (err) {
        console.error(err);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getMangaData();
  }, []);
  // const popularManga = [
  //   {
  //     id: 1,
  //     title: "Solo Leveling",
  //     genre: "Action, Fantasy",
  //     views: "1.2M",
  //     imageColor: "bg-[#34729C]",
  //   },
  //   {
  //     id: 2,
  //     title: "One Piece",
  //     genre: "Adventure",
  //     views: "980k",
  //     imageColor: "bg-[#6CB1DA]",
  //   },
  //   {
  //     id: 3,
  //     title: "Jujutsu Kaisen",
  //     genre: "Supernatural",
  //     views: "850k",
  //     imageColor: "bg-[#1E5470]",
  //   },
  // ];

  // const topRatedManga = [
  //   { id: 1, title: "Frieren", rating: 4.9, imageColor: "bg-[#6EC1D1]" },
  //   { id: 2, title: "Oshi no Ko", rating: 4.8, imageColor: "bg-[#C8EAEC]" },
  //   { id: 3, title: "Spy x Family", rating: 4.7, imageColor: "bg-[#6CB1DA]" },
  //   { id: 4, title: "Chainsaw Man", rating: 4.6, imageColor: "bg-[#34729C]" },
  // ];

  // const newestManga = [
  //   {
  //     id: 1,
  //     title: "Kaiju No. 8",
  //     chapter: "Chapter 98",
  //     time: "1 jam lalu",
  //     imageColor: "bg-[#1E5470]",
  //   },
  //   {
  //     id: 2,
  //     title: "Blue Lock",
  //     chapter: "Chapter 240",
  //     time: "3 jam lalu",
  //     imageColor: "bg-[#34729C]",
  //   },
  //   {
  //     id: 3,
  //     title: "Sakamoto Days",
  //     chapter: "Chapter 143",
  //     time: "5 jam lalu",
  //     imageColor: "bg-[#6EC1D1]",
  //   },
  //   {
  //     id: 4,
  //     title: "Dandadan",
  //     chapter: "Chapter 120",
  //     time: "1 hari lalu",
  //     imageColor: "bg-[#6CB1DA]",
  //   },
  //   {
  //     id: 5,
  //     title: "Kagurabachi",
  //     chapter: "Chapter 18",
  //     time: "1 hari lalu",
  //     imageColor: "bg-[#C8EAEC]",
  //   },
  // ];

  return (
    <View style={{ flex: 1, backgroundColor: "#1E5470" }}>
      <StatusBar hidden={true} />

      <LinearGradient
        colors={["#34729C", "#1E5470"]}
        style={[styles.header, { height: height * 0.2 }]}
      >
        <View style={styles.title}>
          <View>
            <Text style={{ fontWeight: "bold", color: "#D1ECFF" }}>
              Selamat Pagi,{" "}
            </Text>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#D1ECFF" }}
            >
              Nakama Manga
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={[styles.iconContainer, { marginRight: 10 }]}>
              <Sun size={20} color={"#C8EAEC"} />
            </View>
            <View style={styles.iconContainer}>
              <Bell color={"#C8EAEC"} />
            </View>
          </View>
        </View>
        <View style={styles.searchBarContainer}>
          <Search color={"#6CB1DA"} style={{ marginRight: 5 }} />
          <TextInput
            placeholder="Cari manga favoritmu..."
            placeholderTextColor={"#6CB1DA"}
          />
        </View>
      </LinearGradient>

      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        <ScrollView>
          <Section
            style={{ marginTop: 0 }}
            title={"Rating Teratas"}
            Icon={Star}
          >
            <FlatList
              horizontal={true}
              ItemSeparatorComponent={() => <View style={{ width: 10 }}></View>}
              data={topManga}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => <TopManga anime={item} />}
            />
          </Section>

          <Section title={"Paling Populer"} Icon={Flame}>
            <FlatList
              horizontal={true}
              ItemSeparatorComponent={() => <View style={{ width: 10 }}></View>}
              data={popularManga}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => <PopularManga anime={item} />}
            />
          </Section>

          <Section
            style={{ marginBottom: 20 }}
            title={"Update Terbaru"}
            Icon={Clock}
          >
            <FlatList
              scrollEnabled={false}
              ItemSeparatorComponent={() => (
                <View style={{ height: 10 }}></View>
              )}
              data={latestManga}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => <LatestManga anime={item} />}
            />
          </Section>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    // paddingTop: 50,
    paddingBottom: 20,
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
    alignItems: "center",
    backgroundColor: "#34729C",
  },
  subTitle: {
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Home;
