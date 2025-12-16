import { BookOpen } from "lucide-react-native";
import React from "react";
import { Text, useWindowDimensions, View } from "react-native";

const HistoryManga = ({ anime }) => {
  const { width, height } = useWindowDimensions();
  return (
    <View
      style={{
        height: height * 0.2,
        margin: 20,
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        backgroundColor: "#34729C",
      }}
    >
      <View
        style={{
          width: "30%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1E5470",
        }}
      >
        <BookOpen color={"#6EC1D1"} />
      </View>
      <View
        style={{
          flex: 1,
          marginVertical: 5,
          marginLeft: 15,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#D1ECFF" }}>
            Solo Leveling
          </Text>
          <Text style={{ color: "#C8EAEC" }}>Terakhir dibaca: 2 jam lalu</Text>
        </View>
        <View>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 12, color: "#C8EAEC" }}>Ch. 154</Text>
              <Text style={{ fontSize: 12, color: "#C8EAEC" }}>50%</Text>
            </View>
            <View
              style={{
                height: 6,
                width: "100%",
                marginTop: 5,
                borderRadius: 10,
                overflow: "hidden",
                backgroundColor: "#1E5470",
              }}
            >
              <View
                style={{
                  flex: 1,
                  width: "50%",
                  borderRadius: 10,
                  backgroundColor: "#6EC1D1",
                }}
              ></View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HistoryManga;
