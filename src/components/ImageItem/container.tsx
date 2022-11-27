import React from "react";

import ImageItemView from "./view";

import { PixabayImage } from "types/pixabay";

interface Props {
  data: PixabayImage;
  onPress: (data: PixabayImage) => void;
}

const ImageItemContainer = ({ data, onPress }: Props) => {
  const handlePress = () => {
    onPress(data);
  };

  return <ImageItemView onPress={handlePress} data={data} />;
};

export default ImageItemContainer;
