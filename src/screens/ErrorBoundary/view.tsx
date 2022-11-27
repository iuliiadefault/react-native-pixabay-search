import React, { useCallback } from "react";
import { StatusBar, TouchableOpacity, View } from "react-native";
import RNRestart from "react-native-restart";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles";

import { H1, H3, Paragraph } from "components/UIKit/text";

import { Colors } from "constants/colors";

const ErrorBoundaryView = () => {
  const handleRestart = useCallback(() => {
    RNRestart.Restart();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.contentContainer}>
        <H1 marginBottom={20}>Error</H1>
        <Paragraph>Something went wrong...</Paragraph>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRestart}>
        <H3 color={Colors.gray10}>Try again</H3>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ErrorBoundaryView;
