import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { searchImages } from "services/pixabay";
import { useDebouncedCallback } from "use-debounce";

import SearchScreenView from "./view";

import { RootState } from "stores";
import SearchState from "stores/searchStore";
import { SearchScreenNavProp } from "types/navigation";
import { PixabayImage } from "types/pixabay";

import Routes from "constants/routes";

const SearchScreenContainer = () => {
  const navigation = useNavigation<SearchScreenNavProp>();
  const dispatch = useDispatch();
  const { isLoading, isEndReached, data } = useSelector(
    (state: RootState) => state.search
  );

  const [query, setQuery] = useState("");

  const handleTextChange = useDebouncedCallback((value: string) => {
    setQuery(value);
    dispatch(SearchState.actions.resetData());
    dispatch(searchImages(value));
    dispatch(SearchState.actions.loadNextPage());
  }, 1000);

  const handlePress = useCallback(
    (d: PixabayImage) => {
      navigation.navigate(Routes.DETAILS, { data: d });
    },
    [navigation]
  );

  const handleClear = useCallback(() => {
    setQuery("");
  }, []);

  const handleEndReached = useDebouncedCallback(() => {
    // if prev call result was less than limit
    if (isEndReached) {
      return;
    }

    dispatch(SearchState.actions.loadNextPage());
    dispatch(searchImages(query));
  }, 100);

  return (
    <SearchScreenView
      data={data}
      isLoading={isLoading}
      query={query}
      onEndReached={handleEndReached}
      onClear={handleClear}
      onSelect={handlePress}
      onTextChange={handleTextChange}
    />
  );
};

export default SearchScreenContainer;
