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

import authReducer from "./auth";
import { IPreferencesReducerProps } from "./preferences/constants";
import preferencesReducer from "./preferences";
import categoriesReducer from "./categories";
import transactionsReducer from "./transactions";

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
    auth: authReducer,
    preferences: preferencesPersistedReducer,
    categories: categoriesReducer,
    transactions: transactionsReducer,
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
