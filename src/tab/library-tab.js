import { Bell, BookOpen, Search, Sun } from "lucide-react-native";
import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import HistoryManga from "../component/history-manga-card";
import FavoritManga from "../component/favorit-manga-card";

const Library = () => {
  const { width, height } = useWindowDimensions();
  const [menus, setMenus] = useState([
    { title: "History", focused: true },
    { title: "Favorit", focused: false },
    { title: "Unduhan", focused: false },
  ]);

  const setFocus = (idx) => {
    const newMenus = menus.map((menu, index) => {
      if (index === idx) return { ...menu, ["focused"]: true };
      else return { ...menu, ["focused"]: false };
    });
    setMenus(newMenus);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#1E5470" }}>
      <LinearGradient
        colors={["#34729C", "#1E5470"]}
        style={[styles.header, { height: height * 0.15 }]}
      >
        <View style={styles.title}>
          <View>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#D1ECFF" }}
            >
              Perpustakaan Mu
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={[styles.iconContainer, { marginRight: 10 }]}>
              <Search size={20} color={"#C8EAEC"} />
            </View>
            <View style={styles.iconContainer}>
              <Sun color={"#C8EAEC"} />
            </View>
          </View>
        </View>
        <View
          style={{
            height: height * 0.05,
            paddingHorizontal: 5,
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#34729C",
          }}
        >
          {menus.map((menu, index) => (
            <Pressable
              key={index.toString()}
              style={{
                width: "30%",
                height: "80%",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: menu.focused ? "#6CB1DA" : "#34729C",
              }}
              onPress={() => setFocus(index)}
            >
              <Text style={{ fontWeight: "500", color: "#C8EAEC" }}>
                {menu.title}
              </Text>
            </Pressable>
          ))}
        </View>
      </LinearGradient>
      <ScrollView>
        {menus[0].focused ? (
          <HistoryManga />
        ) : menus[1].focused ? (
          <View style={{ margin: 20, flexDirection: "row" }}>
            <FavoritManga />
            <FavoritManga />
          </View>
        ) : (
          <View style={{ paddingTop: 20, alignItems: "center" }}>
            <Text style={{ fontWeight: "500", color: "#C8EAEC" }}>
              Belum Tersedia
            </Text>
          </View>
        )}
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

export default Library;
