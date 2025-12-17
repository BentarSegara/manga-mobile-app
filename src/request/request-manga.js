import { request } from "./request.js";

const BASEURL = "http://192.168.0.102:3000";

export const getMangaSortBy = async (sort) => {
  const response = await request({
    url: `${BASEURL}/manga`,
    params: {
      sort: sort,
    },
    method: "get",
  });

  const data = response.data;

  return data.data;
};
