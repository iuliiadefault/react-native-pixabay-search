import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";

import SearchStackNavigator from "./searchStack.navigator";

import ErrorBoundary from "screens/ErrorBoundary";

import { DimensionsContextProvider } from "context/DimensionsContext";
import { persistor, store } from "stores";

const RootNavigator = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaProvider>
            <NavigationContainer>
              <DimensionsContextProvider>
                <SearchStackNavigator />
              </DimensionsContextProvider>
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};

export default RootNavigator;
