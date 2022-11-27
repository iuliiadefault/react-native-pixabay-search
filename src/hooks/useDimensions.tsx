import { useCallback, useEffect, useState } from "react";
import { Dimensions } from "react-native";
import Orientation from "react-native-orientation";

const useDimensions = () => {
  const [orientation, setOrientation] =
    useState<Orientation.orientation>("PORTRAIT");

  const handleRotate = useCallback((value) => {
    setOrientation(value);
  }, []);

  useEffect(() => {
    const initial = Orientation.getInitialOrientation();
    setOrientation(initial);
    Orientation.addOrientationListener(handleRotate);

    return () => Orientation.removeOrientationListener(handleRotate);
  }, [handleRotate]);

  return {
    orientation,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  };
};

export default useDimensions;
