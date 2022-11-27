import * as React from "react";
import { useCallback } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import NavigationBackButtonView from "./view";

import { SearchStackParamList } from "types/navigation";

interface Props {
  navigation: NativeStackNavigationProp<SearchStackParamList>;
}

const NavigationBackButtonContainer = ({ navigation }: Props) => {
  const handlePress = useCallback(
    () => navigation.canGoBack() && navigation.goBack(),
    [navigation]
  );

  return <NavigationBackButtonView onPress={handlePress} />;
};

export default NavigationBackButtonContainer;
