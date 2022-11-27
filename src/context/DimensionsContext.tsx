import React, { createContext } from "react";
import Orientation from "react-native-orientation";

import useDimensions from "hooks/useDimensions";

type DimensionsContext = {
  orientation: Orientation.orientation;
  width: number;
  height: number;
};

export const DimensionsContext = createContext({} as DimensionsContext);

export const DimensionsContextProvider: React.FC = (props) => {
  const { orientation, width, height } = useDimensions();

  const state: DimensionsContext = {
    orientation,
    width,
    height,
  };

  return <DimensionsContext.Provider value={state} {...props} />;
};
