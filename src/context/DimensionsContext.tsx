import React, { createContext } from "react";
import Orientation from "react-native-orientation";
import { Edge } from "react-native-safe-area-context";

import useDimensions from "hooks/useDimensions";

import { LandscapeEdges, PortraitEdges } from "constants/layout";

type DimensionsContext = {
  orientation: Orientation.orientation;
  width: number;
  height: number;
  edges: Edge[];
};

export const DimensionsContext = createContext({} as DimensionsContext);

export const DimensionsContextProvider: React.FC = (props) => {
  const { orientation, width, height } = useDimensions();

  const state: DimensionsContext = {
    orientation,
    width,
    height,
    edges: orientation === "PORTRAIT" ? PortraitEdges : LandscapeEdges,
  };

  return <DimensionsContext.Provider value={state} {...props} />;
};
