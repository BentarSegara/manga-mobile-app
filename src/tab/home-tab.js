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
              data={topManga.mangas}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item, index }) => (
                <TopManga anime={item} ratio={topManga.ratios[index]} />
              )}
            />
          </Section>

          <Section title={"Paling Populer"} Icon={Flame}>
            <FlatList
              horizontal={true}
              ItemSeparatorComponent={() => <View style={{ width: 10 }}></View>}
              data={popularManga.mangas}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item, index }) => (
                <PopularManga anime={item} ratio={popularManga.ratios[index]} />
              )}
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
              data={latestManga.mangas}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item, index }) => (
                <LatestManga anime={item} ratio={latestManga.ratios[index]} />
              )}
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
    alignItems: "center",
  },
});

export default Home;
