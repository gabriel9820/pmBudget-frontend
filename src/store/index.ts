import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import preferencesReducer from "./preferences";

const preferencesPersistConfig = {
  key: "preferences",
  storage,
};

const store = configureStore({
  reducer: {
    preferences: persistReducer(preferencesPersistConfig, preferencesReducer),
  },
});
const persistor = persistStore(store);
const config = { store: store, persistor: persistor };

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default config;
