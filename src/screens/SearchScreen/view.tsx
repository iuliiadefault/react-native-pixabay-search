import React, { useCallback } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import styles from "./styles";

import ImageItem from "components/ImageItem";
import LoadingOverlay from "components/LoadingOverlay";
import SearchField from "components/SearchField";
import { Paragraph } from "components/UIKit/text";

import { PixabayImage } from "types/pixabay";

interface Props {
  data: PixabayImage[];
  isLoading: boolean;
  query: string;
  onEndReached: () => void;
  onClear: () => void;
  onSelect: (value: PixabayImage) => void;
  onTextChange: (value: string) => void;
}

const SearchScreenView = ({
  onEndReached,
  onClear,
  onSelect,
  onTextChange,
  isLoading,
  data,
  query,
}: Props) => {
  const insets = useSafeAreaInsets();

  const renderHeader = useCallback(
    () => (
      <SearchField value={query} onChange={onTextChange} onClear={onClear} />
    ),
    [onClear, onTextChange, query]
  );

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<PixabayImage>) => (
      <ImageItem data={item} onPress={onSelect} />
    ),
    [onSelect]
  );

  const renderEmptyComponent = useCallback(() => {
    return (
      <View style={styles.emptyContainer}>
        <Paragraph>Nothing found</Paragraph>
      </View>
    );
  }, []);

  const keyExtractor = (item: PixabayImage, index: number) =>
    `${item.id}_${item.user}_${index}`;

  return (
    <SafeAreaView style={styles.container} edges={["right", "top", "left"]}>
      <StatusBar barStyle="dark-content" />
      <LoadingOverlay isLoading={isLoading} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListHeaderComponent={renderHeader}
        ListHeaderComponentStyle={styles.header}
        ListEmptyComponent={renderEmptyComponent}
        contentContainerStyle={StyleSheet.flatten([
          styles.contentContainer,
          { paddingBottom: insets.bottom + 8 },
        ])}
        stickyHeaderIndices={[0]}
        numColumns={2}
        columnWrapperStyle={styles.column}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
      />
    </SafeAreaView>
  );
};

export default SearchScreenView;
