import React from "react";
import { Text } from "react-native";

import { ParagraphProps } from "./types";

import { Colors } from "constants/colors";
import { isIOS } from "constants/general";

const Paragraph = ({
  color = Colors.gray90,
  fontSize = 16,
  lineHeight = 24,
  fontFamily = isIOS ? "Avenir" : "sans-serif",
  numberOfLines = 1,
  ellipsizeMode = "tail",
  children,
  ...rest
}: ParagraphProps) => {
  const style = {
    color,
    fontSize,
    lineHeight,
    fontFamily,
    ...rest,
  };

  return (
    <Text
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={style}
    >
      {children}
    </Text>
  );
};

export default Paragraph;
