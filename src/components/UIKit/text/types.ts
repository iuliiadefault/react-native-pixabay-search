import { PropsWithChildren } from "react";
import { TextProps, TextStyle } from "react-native";

type PickedProps = Pick<TextProps, "numberOfLines" | "ellipsizeMode">;

export type ParagraphProps = PropsWithChildren<TextStyle & PickedProps>;
