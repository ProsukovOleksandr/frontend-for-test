import { carReducer } from "./carReducer";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import { configureStore } from '@reduxjs/toolkit';
  import storage from 'redux-persist/lib/storage';
  const appPersistConfig = {
    key:  "car",
    storage,
    whitelist: ['favourites'],
  }
  export const store = configureStore({
    reducer: persistReducer(appPersistConfig, carReducer),
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    
  })
  export const persistor = persistStore(store);
