import * as React from "react";
import { TouchableHighlight, View } from "react-native";

import styles from "./styles";

import { H4 } from "components/UIKit/text";

import { Colors } from "constants/colors";

interface Props {
  onPress: () => void;
}

const NavigationBackButtonView = ({ onPress }: Props) => {
  return (
    <TouchableHighlight
      underlayColor={Colors.gray30}
      onPress={onPress}
      style={styles.container}
    >
      <View>
        <H4>Back</H4>
      </View>
    </TouchableHighlight>
  );
};

export default NavigationBackButtonView;
