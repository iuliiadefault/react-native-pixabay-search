import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PixabayImage } from "types/pixabay";

type SearchState = {
  isLoading: boolean;
  page: number;
  error: string;
  data: PixabayImage[];
};

export const initialState: SearchState = {
  isLoading: false,
  data: [],
  page: 1,
  error: "",
};

const SearchState = createSlice({
  name: "SearchState",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<PixabayImage[]>) => {
      state.data = [...state.data, ...action.payload];
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    loadNextPage: (state) => {
      state.page += 1;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    resetData: (state) => {
      state.data = [];
      state.page = 1;
    },
  },
});

export default SearchState;
