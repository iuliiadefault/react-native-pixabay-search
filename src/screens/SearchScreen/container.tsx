import React from "react";
import { useEffect } from "react";
import { StatusBar, Text, View } from "react-native";
import { getImages } from "services/pixabay";

import styles from "./styles";

const SearchScreenContainer = () => {
  useEffect(() => {
    getImages("cats").then();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text>Search Screen</Text>
      </View>
    </>
  );
};

export default SearchScreenContainer;
