import Path from "react-native-path";
import axios from "axios";

import { PIXABAY_API_KEY } from "environment";
import { PixabayImage, PixabayResponse } from "types/pixabay";

import { PIXABAY_URL } from "constants/url";

export const getImages = async (query: string): Promise<PixabayImage[]> => {
  try {
    const url = Path.resolve(
      `${PIXABAY_URL}`,
      `?key=${PIXABAY_API_KEY}`,
      `&q=${query}&image_type=photo`
    );

    const res = await axios.get<PixabayResponse>(url);

    return res.data.hits;
  } catch (error) {
    // TODO: add error handling
    return Promise.reject();
  }
};
