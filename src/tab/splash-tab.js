import { View, Text, StyleSheet, Animated, StatusBar } from "react-native";
import { useEffect, useRef } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.3)).current;
  const textFadeAnim = useRef(new Animated.Value(0)).current;
  const subtitleFadeAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 4,
          tension: 40,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(textFadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(subtitleFadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.05,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    const timer = setTimeout(() => {
      navigation.replace("BottomTabs");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.splashContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#0F172A" />

      <Animated.View
        style={[
          styles.iconContainer,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }, { scale: pulseAnim }],
          },
        ]}
      >
        <View style={styles.glowRing}>
          <View style={styles.iconCircle}>
            <MaterialCommunityIcons
              name="book-open-page-variant"
              size={64}
              color="#F8FAFC"
            />
          </View>
        </View>

        <View style={styles.decorativeLeft}>
          <Ionicons name="sparkles" size={20} color="#FBBF24" />
        </View>
        <View style={styles.decorativeRight}>
          <Ionicons name="sparkles" size={16} color="#38BDF8" />
        </View>
      </Animated.View>

      <Animated.Text
        style={[
          styles.appName,
          {
            opacity: textFadeAnim,
            transform: [
              {
                translateY: textFadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
                }),
              },
            ],
          },
        ]}
      >
        NAKAMANGA
      </Animated.Text>

      <Animated.Text
        style={[
          styles.tagline,
          {
            opacity: subtitleFadeAnim,
            transform: [
              {
                translateY: subtitleFadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [15, 0],
                }),
              },
            ],
          },
        ]}
      >
        Baca Manga Favoritmu
      </Animated.Text>

      <Animated.View
        style={[styles.loadingContainer, { opacity: subtitleFadeAnim }]}
      >
        <View style={styles.loadingBar}>
          <Animated.View style={styles.loadingProgress} />
        </View>
      </Animated.View>

      <Animated.View
        style={[styles.bottomBranding, { opacity: subtitleFadeAnim }]}
      >
        <Ionicons name="heart" size={12} color="#FBBF24" />
        <Text style={styles.brandingText}> Made with love for manga fans</Text>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0F172A",
  },
  iconContainer: {
    position: "relative",
    marginBottom: 32,
  },
  glowRing: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "rgba(56, 189, 248, 0.15)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "rgba(56, 189, 248, 0.3)",
  },
  iconCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#1E293B",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#38BDF8",
    shadowColor: "#38BDF8",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
  decorativeLeft: {
    position: "absolute",
    top: 10,
    left: -5,
  },
  decorativeRight: {
    position: "absolute",
    bottom: 20,
    right: -10,
  },
  appName: {
    fontSize: 42,
    fontWeight: "800",
    color: "#F8FAFC",
    letterSpacing: 8,
    marginBottom: 8,
    textShadowColor: "rgba(56, 189, 248, 0.5)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  tagline: {
    fontSize: 16,
    color: "#94A3B8",
    letterSpacing: 2,
    marginBottom: 48,
  },
  loadingContainer: {
    width: 200,
    alignItems: "center",
  },
  loadingBar: {
    width: "100%",
    height: 4,
    backgroundColor: "#1E293B",
    borderRadius: 2,
    overflow: "hidden",
  },
  loadingProgress: {
    width: "100%",
    height: "100%",
    backgroundColor: "#38BDF8",
    borderRadius: 2,
  },
  bottomBranding: {
    position: "absolute",
    bottom: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  brandingText: {
    fontSize: 12,
    color: "#94A3B8",
    letterSpacing: 1,
  },
});
