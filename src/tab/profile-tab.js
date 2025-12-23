import {
  Bell,
  BookOpen,
  ChevronRight,
  Download,
  Heart,
  HelpCircle,
  History,
  LogOut,
  Moon,
  Settings,
  Share2,
  Star,
  Sun,
  User,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const MenuItem = ({
  icon: Icon,
  title,
  subtitle,
  onPress,
  showChevron = true,
  rightElement,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.menuItem, { opacity: pressed ? 0.7 : 1 }]}
      onPress={onPress}
    >
      <View style={styles.menuItemLeft}>
        <View style={styles.menuIconContainer}>
          <Icon size={20} color={"#38BDF8"} />
        </View>
        <View style={styles.menuTextContainer}>
          <Text style={styles.menuTitle}>{title}</Text>
          {subtitle && <Text style={styles.menuSubtitle}>{subtitle}</Text>}
        </View>
      </View>
      {rightElement ? (
        rightElement
      ) : showChevron ? (
        <ChevronRight size={20} color={"#94A3B8"} />
      ) : null}
    </Pressable>
  );
};

const StatsCard = ({ icon: Icon, value, label, color }) => {
  return (
    <View style={[styles.statsCard, { borderColor: color }]}>
      <Icon size={24} color={color} />
      <Text style={[styles.statsValue, { color }]}>{value}</Text>
      <Text style={styles.statsLabel}>{label}</Text>
    </View>
  );
};

const Section = ({ title, children }) => {
  return (
    <View style={styles.section}>
      {title && <Text style={styles.sectionTitle}>{title}</Text>}
      <View style={styles.sectionContent}>{children}</View>
    </View>
  );
};

const Profile = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const userData = {
    name: "Nakama Manga",
    email: "nakama@komiku.id",
    avatar: null,
    memberSince: "Desember 2024",
    stats: {
      mangaRead: 127,
      favorites: 45,
      downloads: 23,
    },
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#1E293B", "#0F172A"]}
        style={[styles.header, { height: height * 0.32 }]}
      >
        <View style={styles.topBar}>
          <Text style={styles.headerTitle}>Profil Saya</Text>
          <View style={styles.topBarIcons}>
            <Pressable style={[styles.iconContainer, { marginRight: 10 }]}>
              <Sun size={20} color={"#94A3B8"} />
            </Pressable>
            <Pressable style={styles.iconContainer}>
              <Bell size={20} color={"#94A3B8"} />
            </Pressable>
          </View>
        </View>

        <View style={styles.profileInfo}>
          <View style={styles.avatarContainer}>
            {userData.avatar ? (
              <Image source={{ uri: userData.avatar }} style={styles.avatar} />
            ) : (
              <LinearGradient
                colors={["#38BDF8", "#0EA5E9"]}
                style={styles.avatarPlaceholder}
              >
                <User size={40} color={"#F8FAFC"} />
              </LinearGradient>
            )}
            <View style={styles.onlineIndicator} />
          </View>
          <Text style={styles.userName}>{userData.name}</Text>
          <Text style={styles.userEmail}>{userData.email}</Text>
          {/* <View style={styles.memberBadge}>
            <Star size={14} color={"#FBBF24"} />
            <Text style={styles.memberText}>
              Member sejak {userData.memberSince}
            </Text>
          </View> */}
        </View>
      </LinearGradient>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.statsContainer}>
          <StatsCard
            icon={BookOpen}
            value={userData.stats.mangaRead}
            label="Manga Dibaca"
            color="#38BDF8"
          />
          <StatsCard
            icon={Heart}
            value={userData.stats.favorites}
            label="Favorit"
            color="#F87171"
          />
          <StatsCard
            icon={Download}
            value={userData.stats.downloads}
            label="Unduhan"
            color="#4ADE80"
          />
        </View>

        {/* Reading Section */}
        <Section title="Aktivitas Membaca">
          <MenuItem
            icon={History}
            title="Riwayat Bacaan"
            subtitle="Lihat manga yang baru dibaca"
            onPress={() => {}}
          />
          <MenuItem
            icon={Heart}
            title="Manga Favorit"
            subtitle="Koleksi manga kesukaan mu"
            onPress={() => {}}
          />
          <MenuItem
            icon={Download}
            title="Unduhan"
            subtitle="Manga yang tersimpan offline"
            onPress={() => {}}
          />
        </Section>

        <Section title="Preferensi">
          <MenuItem
            icon={Moon}
            title="Mode Gelap"
            subtitle="Aktifkan tema gelap"
            showChevron={false}
            rightElement={
              <Switch
                trackColor={{ false: "#1E293B", true: "#38BDF8" }}
                thumbColor={isDarkMode ? "#F8FAFC" : "#94A3B8"}
                onValueChange={setIsDarkMode}
                value={isDarkMode}
              />
            }
          />
          <MenuItem
            icon={Bell}
            title="Notifikasi"
            subtitle="Dapatkan update manga terbaru"
            showChevron={false}
            rightElement={
              <Switch
                trackColor={{ false: "#1E293B", true: "#38BDF8" }}
                thumbColor={notificationsEnabled ? "#F8FAFC" : "#94A3B8"}
                onValueChange={setNotificationsEnabled}
                value={notificationsEnabled}
              />
            }
          />
          <MenuItem
            icon={Settings}
            title="Pengaturan"
            subtitle="Kustomisasi aplikasi"
            onPress={() => {}}
          />
        </Section>

        <Section title="Lainnya">
          <MenuItem
            icon={Share2}
            title="Bagikan Aplikasi"
            subtitle="Ajak teman baca manga"
            onPress={() => {}}
          />
          <MenuItem
            icon={HelpCircle}
            title="Bantuan & FAQ"
            subtitle="Pusat bantuan"
            onPress={() => {}}
          />
          <MenuItem
            icon={Star}
            title="Beri Rating"
            subtitle="Rating di Play Store"
            onPress={() => {}}
          />
        </Section>

        <Pressable
          style={({ pressed }) => [
            styles.logoutButton,
            { opacity: pressed ? 0.8 : 1 },
          ]}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <LogOut size={20} color={"#F87171"} />
          <Text style={styles.logoutText}>Keluar</Text>
        </Pressable>

        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>Komiku v1.0.0</Text>
          <Text style={styles.copyrightText}>
            © 2024 Komiku. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },
  header: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F8FAFC",
  },
  topBarIcons: {
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
  profileInfo: {
    alignItems: "center",
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 12,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  onlineIndicator: {
    position: "absolute",
    bottom: 4,
    right: 4,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#4ADE80",
    borderWidth: 3,
    borderColor: "#0F172A",
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#F8FAFC",
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: "#94A3B8",
    marginBottom: 10,
  },
  // memberBadge: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   backgroundColor: "rgba(251, 191, 36, 0.15)",
  //   paddingHorizontal: 12,
  //   paddingVertical: 6,
  //   borderRadius: 20,
  // },
  memberText: {
    marginLeft: 6,
    fontSize: 12,
    color: "#FBBF24",
    fontWeight: "500",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  statsCard: {
    flex: 1,
    backgroundColor: "#1E293B",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "transparent",
  },
  statsValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
  },
  statsLabel: {
    fontSize: 11,
    color: "#94A3B8",
    marginTop: 4,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#94A3B8",
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  sectionContent: {
    backgroundColor: "#1E293B",
    borderRadius: 16,
    overflow: "hidden",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#0F172A",
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "rgba(56, 189, 248, 0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#F8FAFC",
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 12,
    color: "#94A3B8",
  },
  logoutButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(248, 113, 113, 0.1)",
    marginTop: 24,
    paddingVertical: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(248, 113, 113, 0.3)",
  },
  logoutText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#F87171",
  },
  versionContainer: {
    alignItems: "center",
    paddingVertical: 24,
    marginBottom: 20,
  },
  versionText: {
    fontSize: 14,
    color: "#94A3B8",
    marginBottom: 4,
  },
  copyrightText: {
    fontSize: 12,
    color: "#64748B",
  },
});

export default Profile;
