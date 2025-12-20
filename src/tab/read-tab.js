import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  List,
  Settings,
  WifiOff,
} from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StatusBar,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { getChapterImages } from "../request/request-manga";

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

const Read = ({ navigation, route }) => {
  const { width, height } = useWindowDimensions();
  const { title, chapter, totalChapter } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currChapter, setCurrChapter] = useState(chapter);
  const [images, setImages] = useState([]);
  const [iamgesRatio, setImagesRatio] = useState([]);

  const getImagesRatio = async (imgs) => {
    try {
      const promises = imgs.map((img) => {
        return new Promise((resolve) => {
          Image.getSize(
            img,
            (width, height) => resolve(width / height),
            (err) => {
              console.error(err.message), resolve(1);
            }
          );
        });
      });
      const ratios = await Promise.all(promises);
      setImagesRatio(ratios);
    } catch (err) {
      console.error(err);
    }
  };

  const onPrev = () => {
    if (currChapter > 1) setCurrChapter(currChapter - 1);
  };

  const onNext = () => {
    if (currChapter < totalChapter) setCurrChapter(currChapter + 1);
  };

  useEffect(() => {
    const loadImages = async () => {
      setIsLoading(true);
      try {
        const data = await getChapterImages(title, currChapter);
        setImages(data);
        getImagesRatio(data);
      } catch (err) {
        console.error(err.message);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    loadImages();
  }, [currChapter]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#1E5470",
      }}
    >
      <StatusBar hidden={true} />
      <View
        style={{
          height: height * 0.1,
          paddingBottom: 15,
          paddingHorizontal: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          backgroundColor: "#34729C",
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <ArrowLeft color={"#D1ECFF"} />
        </Pressable>
        <View style={{ width: "70%", alignItems: "center" }}>
          <Text
            numberOfLines={1}
            style={{ fontSize: 16, fontWeight: "bold", color: "#D1ECFF" }}
          >
            {title}
          </Text>
          <Text style={{ fontSize: 12, color: "#C8EAEC" }}>
            Ch {currChapter} | {images.length} Halaman
          </Text>
        </View>
        <Pressable>
          <Settings color={"#D1ECFF"} />
        </Pressable>
      </View>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        <View style={{ flex: 1, margin: 10 }}>
          <FlatList
            data={images}
            keyExtractor={(_, idx) => idx.toString()}
            renderItem={({ item, index }) => (
              <View
                style={{
                  width: "100%",
                  aspectRatio: iamgesRatio[index],
                  backgroundColor: "#34729C",
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{ flex: 1 }}
                  source={{ uri: item }}
                />
              </View>
            )}
          />
        </View>
      )}
      <View
        style={{
          height: height * 0.15,
          padding: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "#34729C",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Text style={{ fontSize: 12, fontWeight: "500", color: "#C8EAEC" }}>
              10%
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              height: 6,
              marginLeft: 10,
              borderRadius: 10,
              overflow: "hidden",
              backgroundColor: "#1E5470",
            }}
          >
            <View
              style={{ flex: 1, width: "10%", backgroundColor: "#6CB1DA" }}
            ></View>
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Pressable style={{ alignItems: "center" }} onPress={onPrev}>
            <ChevronLeft color={"#D1ECFF"} />
            <Text style={{ fontSize: 12, color: "#C8EAEC" }}>Prev</Text>
          </Pressable>
          <View style={{ alignItems: "center" }}>
            <List color={"#D1ECFF"} />
            <Text style={{ fontSize: 12, color: "#C8EAEC" }}>Chapter</Text>
          </View>
          <Pressable style={{ alignItems: "center" }} onPress={onNext}>
            <ChevronRight color={"#D1ECFF"} />
            <Text style={{ fontSize: 12, color: "#C8EAEC" }}>Next</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Read;
