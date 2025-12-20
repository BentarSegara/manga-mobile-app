import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const Loading = () => (
  <View style={styles.loadingContainer}>
    <View style={{ marginBottom: 15 }}>
      <Text style={styles.loadingText}>
        Memuat Data Manga
      </Text>
    </View>
    <View>
      <ActivityIndicator size={"large"} />
    </View>
  </View>
);

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      loadingText: {
        fontWeight: "bold",
        color: "#F8FAFC",
      },
})

export default Loading;
