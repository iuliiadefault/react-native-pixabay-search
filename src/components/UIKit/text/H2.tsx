import React from "react";

import Paragraph from "./Paragraph";
import { ParagraphProps } from "./types";

const H2 = ({
  fontSize = 24,
  lineHeight = 31,
  fontWeight = "bold",
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

export default H2;
