import AsyncStorage from "@react-native-async-storage/async-storage";
import { Action, combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import thunkMiddleware, { ThunkAction } from "redux-thunk";

import SearchState from "./searchStore";

const RootReducer = combineReducers({
  search: SearchState.reducer,
});

const persistConfig = {
  key: "@root-store",
  storage: AsyncStorage,
  whitelist: ["SearchState"],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof RootReducer>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

const persistor = persistStore(store);
export { persistor, store };
