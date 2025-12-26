# 📚 NakaManga - Manga Reading Mobile App

<p align="center">
  <img src="./assets/icon.png" alt="Komiku Logo" width="120" height="120">
</p>

<p align="center">
  <b>Aplikasi mobile membaca manga dengan React Native & Expo</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-0.81.5-61DAFB?logo=react" alt="React Native">
  <img src="https://img.shields.io/badge/Expo-54.0.29-000020?logo=expo" alt="Expo">
  <img src="https://img.shields.io/badge/Platform-Android%20%7C%20iOS%20%7C%20Web-brightgreen" alt="Platform">
  <img src="https://img.shields.io/badge/Version-1.0.0-blue" alt="Version">
</p>

---

## 📖 Deskripsi

**Komiku** adalah aplikasi mobile untuk membaca manga yang dibangun menggunakan React Native dan Expo. Aplikasi ini menyediakan pengalaman membaca manga yang nyaman dengan fitur-fitur modern seperti sistem autentikasi, eksplorasi manga, perpustakaan personal, dan profil pengguna.

---

## ✨ Fitur Utama

| Fitur                 | Deskripsi                                                  |
| --------------------- | ---------------------------------------------------------- |
| 🏠 **Home**           | Menampilkan daftar manga terbaru, populer, dan rekomendasi |
| 🔍 **Explore**        | Jelajahi koleksi manga dengan berbagai kategori dan filter |
| 📖 **Library**        | Simpan manga favorit dan riwayat bacaan                    |
| 👤 **Profile**        | Kelola profil pengguna dan pengaturan akun                 |
| 🔐 **Authentication** | Sistem login, register, dan reset password                 |
| 📱 **Splash Screen**  | Tampilan loading yang menarik saat aplikasi dibuka         |

---

## 🛠️ Tech Stack

### Core

- **React Native** `v0.81.5` - Framework mobile cross-platform
- **Expo** `v54.0.29` - Platform untuk React Native
- **React** `v19.1.0` - Library JavaScript untuk UI

### Navigation

- **@react-navigation/native** - Navigasi utama
- **@react-navigation/bottom-tabs** - Tab navigasi bawah
- **@react-navigation/native-stack** - Stack navigasi

### State Management & Storage

- **@react-native-async-storage/async-storage** - Penyimpanan lokal persisten

### HTTP Client

- **Axios** - Untuk HTTP requests ke backend API

### UI Components

- **lucide-react-native** - Icon library modern
- **react-native-linear-gradient** - Gradient effects
- **expo-status-bar** - Status bar management

---

## 📁 Struktur Proyek

```
komiku-fe/
├── 📄 App.js                 # Entry point aplikasi
├── 📄 index.js               # Index file
├── 📄 app.json               # Konfigurasi Expo
├── 📄 package.json           # Dependencies & scripts
├── 📂 assets/                # Asset statis
│   ├── icon.png              # Icon aplikasi
│   ├── adaptive-icon.png     # Adaptive icon (Android)
│   └── favicon.png           # Favicon (Web)
├── 📂 android/               # Native Android files
└── 📂 src/                   # Source code utama
    ├── 📂 component/         # Komponen reusable
    ├── 📂 context/           # React Context (State Management)
    ├── 📂 navigator/         # Konfigurasi navigasi
    ├── 📂 request/           # API request handlers
    └── 📂 tab/               # Screen/halaman aplikasi
```

### 📂 Components (`src/component/`)

| File                    | Deskripsi                         |
| ----------------------- | --------------------------------- |
| `top-manga-card.js`     | Card untuk manga trending/teratas |
| `popular-manga-card.js` | Card untuk manga populer          |
| `latest-manga-card.js`  | Card untuk manga terbaru          |
| `favorit-manga-card.js` | Card untuk manga favorit          |
| `history-manga-card.js` | Card untuk riwayat bacaan         |
| `loading.js`            | Komponen loading indicator        |
| `error.js`              | Komponen error handling           |

### 📂 Context (`src/context/`)

| File              | Deskripsi                                                     |
| ----------------- | ------------------------------------------------------------- |
| `auth-context.js` | Context untuk manajemen autentikasi (login, register, logout) |

### 📂 Navigator (`src/navigator/`)

| File              | Deskripsi                                                          |
| ----------------- | ------------------------------------------------------------------ |
| `native-stack.js` | Konfigurasi Stack Navigator untuk navigasi antar screen            |
| `bottom-tab.js`   | Konfigurasi Bottom Tab Navigator (Home, Explore, Library, Profile) |

### 📂 Request (`src/request/`)

| File               | Deskripsi                                               |
| ------------------ | ------------------------------------------------------- |
| `request.js`       | Base HTTP request handler menggunakan Axios             |
| `request-manga.js` | API untuk fetch data manga (list, detail, chapter)      |
| `request-user.js`  | API untuk autentikasi (login, register, reset password) |

### 📂 Tabs/Screens (`src/tab/`)

| File                 | Deskripsi                              |
| -------------------- | -------------------------------------- |
| `splash-tab.js`      | Splash screen saat aplikasi loading    |
| `home-tab.js`        | Halaman utama dengan daftar manga      |
| `explore-tab.js`     | Halaman eksplorasi manga               |
| `library-tab.js`     | Halaman perpustakaan favorit & riwayat |
| `profile-tab.js`     | Halaman profil pengguna                |
| `detail-tab.js`      | Halaman detail manga                   |
| `read-tab.js`        | Halaman pembaca manga                  |
| `login-tab.js`       | Halaman login                          |
| `register-tab.js`    | Halaman registrasi                     |
| `forgot-password.js` | Halaman lupa password                  |
| `reset-password.js`  | Halaman reset password                 |

---

## 🚀 Instalasi & Menjalankan

### Prasyarat

- **Node.js** (v18 atau lebih baru)
- **npm** atau **yarn**
- **Expo CLI**
- **Android Studio** (untuk emulator Android) atau **Xcode** (untuk iOS)

### Langkah Instalasi

1. **Clone repository**

   ```bash
   #clone bagian frontend
   git clone <repository-url>
   cd komiku-fe

   #clone bagian backend
   git clone <https://github.com/BentarSegara/manga-mobile-app.git>
   cd komiku-be
   ```

2. **Install dependencies**

   ```bash
   #di kedua projek (fe dan be)
   npm install
   ```

3. **Jalankan Backend**

   ```bash
   #pada bagian backend
   npm run dev
   ```

4. **Jalankan aplikasi**

   ```bash
   # Development mode
   npm start

   # Jalankan di Android
   npm run android

   # Jalankan di iOS
   npm run ios

   # Jalankan di Web
   npm run web
   ```

---

## 📜 Scripts

| Script            | Deskripsi                           |
| ----------------- | ----------------------------------- |
| `npm start`       | Menjalankan Expo development server |
| `npm run android` | Build dan jalankan di Android       |
| `npm run ios`     | Build dan jalankan di iOS           |
| `npm run web`     | Jalankan di browser web             |

---

## 🎨 Tema & Warna

Aplikasi menggunakan palet warna dark theme yang modern:

| Warna             | Hex Code  | Penggunaan              |
| ----------------- | --------- | ----------------------- |
| 🔷 Primary Dark   | `#0F172A` | Background utama        |
| 🔵 Secondary Dark | `#1E293B` | Background sekunder     |
| 🩵 Accent          | `#38BDF8` | Warna aksen, ikon aktif |
| ⬜ Light          | `#F8FAFC` | Teks utama              |
| 🔘 Muted          | `#94A3B8` | Teks sekunder           |
| 🟡 Warning        | `#FBBF24` | Status dan highlight    |

---

## 🔌 API Endpoints

Aplikasi ini terhubung ke backend API dengan endpoint berikut:

### Manga API

| Method | Endpoint                | Deskripsi                         |
| ------ | ----------------------- | --------------------------------- |
| `GET`  | `/manga?sort={sort}`    | Ambil daftar manga dengan sorting |
| `GET`  | `/manga/{slug}`         | Ambil detail manga                |
| `GET`  | `/manga/chapter/{slug}` | Ambil gambar chapter              |

### User API

| Method  | Endpoint               | Deskripsi                |
| ------- | ---------------------- | ------------------------ |
| `POST`  | `/user/login`          | Login pengguna           |
| `POST`  | `/user/register`       | Registrasi pengguna baru |
| `POST`  | `/user/confirm-email`  | Konfirmasi email         |
| `PATCH` | `/user/reset-password` | Reset password           |

---

## 📱 Screenshots

> _Tambahkan screenshot aplikasi di sini_

---

## 🗺️ Navigasi Aplikasi

```
SplashScreen
     │
     ├── Login ──► Register
     │      │
     │      └──► ForgotPassword ──► ResetPassword
     │
     └── BottomTabs
              │
              ├── Home ──► Detail ──► Read
              │
              ├── Explore ──► Detail ──► Read
              │
              ├── Library ──► Detail ──► Read
              │
              └── Profile
```

---

## 🔐 Autentikasi

Sistem autentikasi menggunakan:

- **AsyncStorage** untuk menyimpan token dan info user secara lokal
- **React Context** untuk state management autentikasi global
- Fitur yang tersedia:
  - ✅ Login dengan email & password
  - ✅ Registrasi akun baru
  - ✅ Logout
  - ✅ Reset password dengan konfirmasi email

---

## 📝 Konfigurasi

### Mengubah API Base URL

Edit file `src/request/request-manga.js` dan `src/request/request-user.js`:

```javascript
const BASEURL = "http://your-api-server:port/manga"; // untuk manga
const BASEURL = "http://your-api-server:port/user"; // untuk user
```

---

## 🤝 Kontribusi

1. Fork repository ini
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

---

## 📄 Lisensi

Proyek ini bersifat **private** dan tidak untuk distribusi publik.

---

## 👨‍💻 Developer

Dikembangkan dengan ❤️ menggunakan React Native & Expo

---

<p align="center">
  <b>NakaManga</b> © 2024 - Manga Reading App
</p>
