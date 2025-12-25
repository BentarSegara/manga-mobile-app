import { request } from "./request.js";

// const BASEURL = "http://10.201.2.125:3000";
const BASEURL = "http://192.168.0.102:3000/user";

export const loginUser = async (user) => {
  const response = await request({
    url: `${BASEURL}/login`,
    data: user,
    method: "post",
  });
  return response.data;
};

export const registerUser = async (newUser) => {
  const response = await request({
    url: `${BASEURL}/register`,
    data: newUser,
    method: "post",
  });

  return response.data;
};
