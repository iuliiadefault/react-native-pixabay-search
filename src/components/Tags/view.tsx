import React from "react";
import { View } from "react-native";

import { Paragraph } from "components/UIKit/text";
import styles from "screens/ImageDetails/styles";

interface Props {
  tags: string[];
}

const TagsView = ({ tags }: Props) => {
  return (
    <View style={styles.tagsContainer}>
      {tags.map((tag) => (
        <View key={tag} style={styles.tag}>
          <Paragraph>{tag}</Paragraph>
        </View>
      ))}
    </View>
  );
};

export default TagsView;
