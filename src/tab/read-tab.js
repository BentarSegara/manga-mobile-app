import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  List,
  Settings,
} from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { getChapterImages } from "../request/request-manga";
import Loading from "../component/loading";
import Error from "../component/error";

const Read = ({ navigation, route }) => {
  const { height } = useWindowDimensions();
  const { title, chapter, totalChapter } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isMaxChapter, setIsMaxChapter] = useState(false);
  const [isMinChapter, setIsMinChapter] = useState(false);
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
    if (currChapter === 1) setIsMinChapter(true);
    if (currChapter === totalChapter) setIsMaxChapter(true);
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
    <View style={styles.mainContainer}>
      <StatusBar hidden={true} />
      <View style={[styles.header, { height: height * 0.1 }]}>
        <Pressable onPress={() => navigation.goBack()}>
          <ArrowLeft color={"#F8FAFC"} />
        </Pressable>
        <View style={styles.headerTitleContainer}>
          <Text
            numberOfLines={1}
            style={styles.headerTitle}
          >
            {title}
          </Text>
          <Text style={styles.headerSubtitle}>
            Ch {currChapter} | {images.length} Halaman
          </Text>
        </View>
        <Pressable>
          <Settings color={"#F8FAFC"} />
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
                style={[
                  styles.imageContainer,
                  { aspectRatio: iamgesRatio[index] },
                ]}
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
      <View style={[styles.footer, { height: height * 0.15 }]}>
        <View style={styles.progressRow}>
          <View>
            <Text style={styles.progressText}>
              10%
            </Text>
          </View>
          <View style={styles.progressBarContainer}>
            <View
              style={{ flex: 1, width: "10%", backgroundColor: "#38BDF8" }}
            ></View>
          </View>
        </View>
        <View style={styles.navigationRow}>
          <Pressable style={{ alignItems: "center" }} onPress={onPrev}>
            <ChevronLeft color={isMinChapter ? "#94A3B8" : "#F8FAFC"} />
            <Text style={{ fontSize: 12, color:isMinChapter ? "#94A3B8" : "#F8FAFC",}}>Prev</Text>
          </Pressable>
          <View style={{ alignItems: "center" }}>
            <List color={"#F8FAFC"} />
            <Text style={styles.navButtonText}>Chapter</Text>
          </View>
          <Pressable style={{ alignItems: "center" }} onPress={onNext}>
            <ChevronRight color={isMaxChapter ? "#94A3B8" : "#F8FAFC"} />
            <Text style={{ fontSize: 12, color:isMaxChapter ? "#94A3B8" : "#F8FAFC",}}>Next</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#0F172A",
  },
  header: {
    paddingBottom: 15,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "#1E293B",
  },
  headerTitleContainer: {
    width: "70%",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F8FAFC",
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#94A3B8",
  },
  imageContainer: {
    width: "100%",
    backgroundColor: "#1E293B",
  },
  footer: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#1E293B",
  },
  progressRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  progressText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#94A3B8",
  },
  progressBarContainer: {
    flex: 1,
    height: 6,
    marginLeft: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#0F172A",
  },
  navigationRow: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navButtonText: {
    fontSize: 12,
    color: "#94A3B8",
  },
});

export default Read;
