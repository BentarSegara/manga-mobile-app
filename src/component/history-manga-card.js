import { BookOpen } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

const HistoryManga = ({ anime }) => {
  const { height } = useWindowDimensions();
  return (
    <View style={[styles.container, { height: height * 0.2 }]}>
      <View style={styles.iconContainer}>
        <BookOpen color={"#38BDF8"} />
      </View>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.title}>Solo Leveling</Text>
          <Text style={{ color: "#94A3B8" }}>Terakhir dibaca: 2 jam lalu</Text>
        </View>
        <View>
          <View>
            <View style={styles.progressHeader}>
              <Text style={styles.progressText}>Ch. 154</Text>
              <Text style={styles.progressText}>50%</Text>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBarFill}></View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#1E293B",
  },
  iconContainer: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0F172A",
  },
  contentContainer: {
    flex: 1,
    marginVertical: 5,
    marginLeft: 15,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#F8FAFC",
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressText: {
    fontSize: 12,
    color: "#94A3B8",
  },
  progressBarContainer: {
    height: 6,
    width: "100%",
    marginTop: 5,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#0F172A",
  },
  progressBarFill: {
    flex: 1,
    width: "50%",
    borderRadius: 10,
    backgroundColor: "#38BDF8",
  },
});

export default HistoryManga;
