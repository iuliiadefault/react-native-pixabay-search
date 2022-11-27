import React from "react";

import Paragraph from "./Paragraph";
import { ParagraphProps } from "./types";

const H4 = ({
  fontSize = 14,
  lineHeight = 18,
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

export default H4;
