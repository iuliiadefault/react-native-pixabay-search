import React from "react";
import { LogBox } from "react-native";

import RootNavigator from "navigation/root.navigator";

LogBox.ignoreAllLogs();

const App = () => {
  return <RootNavigator />;
};

export default App;
