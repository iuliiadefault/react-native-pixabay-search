import React from "react";
import { View } from "react-native";
import Modal from "react-native-modal";

import styles from "./styles";

import { Paragraph } from "components/UIKit/text";

import { Colors } from "constants/colors";

type Props = {
  isLoading: boolean;
};

const LoadingOverlayView = ({ isLoading }: Props) => {
  return (
    <Modal
      isVisible={isLoading}
      backdropColor={Colors.gray90}
      backdropOpacity={0.6}
      animationIn="fadeIn"
      animationOut="fadeOut"
    >
      <View style={styles.modalContent}>
        <Paragraph color={Colors.white}>Loading...</Paragraph>
      </View>
    </Modal>
  );
};

export default LoadingOverlayView;
