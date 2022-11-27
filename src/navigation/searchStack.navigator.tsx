import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NavigationBackButton from "components/NavigationBackButton";
import ImageDetails from "screens/ImageDetails";
import SearchScreen from "screens/SearchScreen";

import { SearchStackParamList } from "types/navigation";

import { Colors } from "constants/colors";
import Routes from "constants/routes";

const Stack = createNativeStackNavigator<SearchStackParamList>();

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.SEARCH}
        key={Routes.SEARCH}
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.DETAILS}
        key={Routes.DETAILS}
        component={ImageDetails}
        options={({ navigation }) => ({
          title: "Image Details",
          headerLeft: () => <NavigationBackButton navigation={navigation} />,
          headerStyle: { backgroundColor: Colors.gray10 },
        })}
      />
    </Stack.Navigator>
  );
};

export default SearchStackNavigator;
