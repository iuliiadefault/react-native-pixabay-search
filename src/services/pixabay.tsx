import axios from "axios";

import { PIXABAY_API_KEY } from "environment";
import { AppThunk } from "stores";
import SearchState from "stores/searchStore";
import { PixabayImage, PixabayResponse } from "types/pixabay";

import { LIMIT_PER_PAGE, PIXABAY_URL } from "constants/url";

const DefaultParams = {
  image_type: "photo",
  per_page: LIMIT_PER_PAGE,
};

export const getImages = async (
  q: string,
  page: number
): Promise<PixabayImage[]> => {
  if (!q) {
    return [];
  }

  try {
    const res = await axios.get<PixabayResponse>(PIXABAY_URL, {
      params: { ...DefaultParams, q, page, key: PIXABAY_API_KEY },
    });

    return res.data.hits;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("unknown error");
  }
};

export const searchImages = (q: string): AppThunk => {
  return async (dispatch, getState) => {
    try {
      dispatch(SearchState.actions.setLoading(true));

      const {
        search: { page },
      } = getState();
      const res = await getImages(q, page);

      dispatch(SearchState.actions.addData(res));

      if (res.length < LIMIT_PER_PAGE) {
        dispatch(SearchState.actions.setEndReached(true));
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch(SearchState.actions.setError(error.message));
      }

      dispatch(SearchState.actions.setError("unknown error"));
    } finally {
      dispatch(SearchState.actions.setLoading(false));
    }
  };
};
