import { WifiOff } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Error = ({ onTryAgain }) => (
  <View style={styles.loadingContainer}>
    <View style={styles.errorContent}>
      <WifiOff size={30} color={"#38BDF8"} />
      <Text style={styles.errorText}>
        {"\n"} Error Pada Saat Memuat Data Manga
      </Text>
    </View>
    <Pressable onPress={onTryAgain}>
      <Text style={styles.retryText}>Coba Lagi</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContent: {
    marginBottom: 15,
    alignItems: "center",
  },
  errorText: {
    fontWeight: "bold",
    color: "#94A3B8",
  },
  retryText: {
    fontWeight: "bold",
    color: "#F8FAFC",
  },
});

export default Error;
