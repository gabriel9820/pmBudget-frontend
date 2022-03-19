import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { IPreferencesReducerProps } from "./preferences/constants";
import preferencesReducer from "./preferences";

const preferencesPersistConfig = {
  key: "preferences",
  storage,
};

const preferencesPersistedReducer = persistReducer<IPreferencesReducerProps>(
  preferencesPersistConfig,
  preferencesReducer
);

const store = configureStore({
  reducer: {
    preferences: preferencesPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const persistor = persistStore(store);
const config = { store: store, persistor: persistor };

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default config;
