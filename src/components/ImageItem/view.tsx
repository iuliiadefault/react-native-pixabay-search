import React from "react";
import { Image, TouchableOpacity } from "react-native";

import styles from "./styles";

import { H4 } from "components/UIKit/text";

import { PixabayImage } from "types/pixabay";

interface Props {
  data: PixabayImage;
  onPress: () => void;
}

const ImageItemView = ({ data, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{ uri: data.webformatURL }} style={styles.image} />
      <H4>{`${data.imageHeight}x${data.imageWidth}`}</H4>
    </TouchableOpacity>
  );
};

export default ImageItemView;
