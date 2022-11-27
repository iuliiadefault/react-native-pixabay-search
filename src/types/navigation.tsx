import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { PixabayImage } from "./pixabay";

import Routes from "constants/routes";

export type SearchStackParamList = {
  [Routes.SEARCH]: undefined;
  [Routes.DETAILS]: { data: PixabayImage };
};

export type SearchScreenNavProp = NativeStackNavigationProp<
  SearchStackParamList,
  Routes.SEARCH
>;

export type SearchScreenRouteProp = RouteProp<
  SearchStackParamList,
  Routes.SEARCH
>;

export type DetailsScreenNavProp = NativeStackNavigationProp<
  SearchStackParamList,
  Routes.DETAILS
>;

export type DetailsScreenRouteProp = RouteProp<
  SearchStackParamList,
  Routes.DETAILS
>;
