import { Image } from "react-native";
import { request } from "./request.js";

// const BASEURL = "http://10.201.2.125:3000";
const BASEURL = "http://192.168.0.101:3000";

const getImageRatio = (uri) =>
  new Promise((resolve) => {
    Image.getSize(
      uri,
      (width, height) => resolve(width / height),
      (err) => {
        console.error(err.message);
        resolve(1);
      }
    );
  });
const getImagesRatio = async (uris) => {
  const promises = uris.map((uri) => {
    return getImageRatio(uri);
  });

  const ratios = await Promise.all(promises);
  return ratios;
};

export const getMangaSortBy = async (sort) => {
  const response = await request({
    url: `${BASEURL}/manga`,
    params: {
      sort: sort,
    },
    method: "get",
  });

  const data = response.data;
  const mangas = data.data;
  const images = mangas.map((manga) => manga.image);
  const ratios = await getImagesRatio(images);

  return {
    mangas: mangas,
    ratios: ratios,
  };
};

export const getMangaDetail = async (slug) => {
  const response = await request({
    url: `${BASEURL}/manga/${slug}`,
    method: "get",
  });

  const data = response.data;

  return data.data;
};

export const getChapterImages = async (chapterSlug, chapter) => {
  const chapterString = chapter.toString();
  const formatedChapter =
    chapterString.length === 1
      ? `0${chapter}`
      : chapterString.replace(".", "-");
  const slug = `${chapterSlug}-${formatedChapter}`;
  const response = await request({
    url: `${BASEURL}/chapter/${slug}`,
    method: "get",
  });

  const data = response.data;
  return data.data;
};
