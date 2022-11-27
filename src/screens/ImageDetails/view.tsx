import React, { useContext } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import styles from "./styles";

import Tags from "components/Tags";
import { H3, H4, Paragraph } from "components/UIKit/text";

import { DimensionsContext } from "context/DimensionsContext";
import { PixabayImage } from "types/pixabay";

import { AvatarPlaceholderURL } from "constants/general";

interface Props {
  data: PixabayImage;
}

const ImageDetailsView = ({ data }: Props) => {
  const insets = useSafeAreaInsets();
  const { width } = useContext(DimensionsContext);
  const height = (data.webformatHeight / data.webformatWidth) * (width - 40);

  return (
    <ScrollView
      style={styles.bg}
      contentContainerStyle={StyleSheet.flatten([
        styles.container,
        {
          paddingLeft: Math.max(insets.left, 20),
          paddingRight: Math.max(insets.right, 20),
        },
      ])}
    >
      <Tags data={data.tags} />
      <Image
        source={{ uri: data.webformatURL }}
        style={StyleSheet.flatten([styles.image, { height }])}
      />
      <View style={styles.details}>
        <View style={styles.detailsContainer}>
          <H4>Uploaded by</H4>
          <View style={styles.userDetailsContainer}>
            <Image
              source={{ uri: data.userImageURL || AvatarPlaceholderURL }}
              style={styles.userAvatar}
            />
            <H3 width="82%">{data.user}</H3>
          </View>
        </View>
        <View
          style={StyleSheet.flatten([
            styles.detailsContainer,
            styles.lastDetailsContainer,
          ])}
        >
          <H4>Resolution</H4>
          <View style={styles.userDetailsContainer}>
            <Paragraph>{`${data.imageHeight}x${data.imageWidth}`}</Paragraph>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ImageDetailsView;
