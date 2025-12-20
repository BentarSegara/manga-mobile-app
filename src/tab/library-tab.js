import { Search, Sun } from "lucide-react-native";
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import HistoryManga from "../component/history-manga-card";
import FavoritManga from "../component/favorit-manga-card";

const Library = () => {
  const {height } = useWindowDimensions();
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
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={["#1E293B", "#0F172A"]}
        style={[styles.header, { height: height * 0.15 }]}
      >
        <View style={styles.title}>
          <View>
            <Text style={styles.titleText}>
              Perpustakaan Mu
            </Text>
          </View>
          <View style={styles.iconRow}>
            <View style={[styles.iconContainer, { marginRight: 10 }]}>
              <Search size={20} color={"#94A3B8"} />
            </View>
            <View style={styles.iconContainer}>
              <Sun color={"#94A3B8"} />
            </View>
          </View>
        </View>
        <View style={[styles.tabContainer, { height: height * 0.05 }]}>
          {menus.map((menu, index) => (
            <Pressable
              key={index.toString()}
              style={[
                styles.tabButton,
                { backgroundColor: menu.focused ? "#38BDF8" : "#1E293B" },
              ]}
              onPress={() => setFocus(index)}
            >
              <Text style={{ fontWeight: "500", color: menu.focused ? "#0F172A" : "#94A3B8" }}>
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
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>
              Belum Tersedia
            </Text>
          </View>
        )}
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
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F8FAFC",
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E293B",
  },
  tabContainer: {
    paddingHorizontal: 5,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1E293B",
  },
  tabButton: {
    width: "30%",
    height: "80%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyState: {
    paddingTop: 20,
    alignItems: "center",
  },
  emptyStateText: {
    fontWeight: "500",
    color: "#94A3B8",
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

export default Library;
