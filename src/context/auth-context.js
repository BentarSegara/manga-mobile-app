import { createContext, useContext, useEffect, useState } from "react";
import { loginUser, registerUser } from "../request/request-user";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    const checkLogin = async () => {
      setIsLoading(true);
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
        setIsLoading(false);
      }
    };
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, register, isLoading, userInfo, userToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
