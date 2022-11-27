import React from "react";

import Paragraph from "./Paragraph";
import { ParagraphProps } from "./types";

const H1 = ({
  fontSize = 48,
  lineHeight = 52,
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

export default H1;
