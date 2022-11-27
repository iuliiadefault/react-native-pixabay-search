import React from "react";

import Paragraph from "./Paragraph";
import { ParagraphProps } from "./types";

const H3 = ({
  fontSize = 20,
  lineHeight = 26,
  fontWeight = "500",
  children,
  ...restStyle
}: ParagraphProps) => {
  const style = {
    fontSize,
    lineHeight,
    fontWeight,
    ...restStyle,
  };

  return <Paragraph {...style}>{children}</Paragraph>;
};

export default H3;
