import { request } from "./request.js";

const BASEURL = "http://192.168.0.100:3000";

export const getMangaSortBy = async ({ params }) => {
  const response = await request({
    url: `${BASEURL}/manga`,
    params: params,
    method: "get",
  });

  const data = response.data;

  return data.data;
};
