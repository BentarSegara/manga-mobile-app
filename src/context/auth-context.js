import { createContext, useContext, useEffect, useState } from "react";
import {
  changeUserPassword,
  confirmUserEmail,
  deleteUser,
  loginUser,
  registerUser,
} from "../request/request-user";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [userToken, setUserToken] = useState(null);

  const generateRandomToken = (length) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  const login = async ({ email, password }) => {
    const { data, errors } = await loginUser({
      email: email,
      password: password,
    });

    if (data) {
      const userToken = generateRandomToken(5);

      setUserInfo(data);
      setUserToken(userToken);
      await Promise.all([
        AsyncStorage.setItem("userInfo", JSON.stringify(data)),
        AsyncStorage.setItem("userToken", userToken),
      ]);
    }
    if (errors) throw errors;
  };

  const register = async ({ name, email, password }) => {
    const { errors } = await registerUser({
      name: name,
      email: email,
      password: password,
    });
    if (errors) throw errors;
  };

  const logout = async () => {
    await Promise.all([
      AsyncStorage.removeItem("userToken"),
      AsyncStorage.removeItem("userInfo"),
    ]);
  };

  const changePassword = async (confirmedEmail, passwords) => {
    const { errors } = await changeUserPassword({
      confirmedEmail: confirmedEmail,
      passwords: passwords,
    });
    if (errors) throw errors;
  };

  const confirmEmail = async (email) => {
    const { errors } = await confirmUserEmail(email);
    if (errors) throw errors;
  };

  const deleteAccount = async (id) => {
    const { errors } = await deleteUser(id);
    if (errors) throw errors;

    setUserInfo({});
    setUserToken(null);
    await Promise.all([
      AsyncStorage.removeItem("userToken"),
      AsyncStorage.removeItem("userInfo"),
    ]);
  };

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const [user, token] = await Promise.all([
          AsyncStorage.getItem("userInfo"),
          AsyncStorage.getItem("userToken"),
        ]);
        if (user) setUserInfo(JSON.parse(user));
        if (token) setUserToken(token);
      } catch (err) {
        console.error(err.message);
      } finally {
      }
    };
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        register,
        confirmEmail,
        changePassword,
        deleteAccount,
        userInfo,
        userToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
