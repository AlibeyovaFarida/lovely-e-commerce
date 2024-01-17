import { configureStore} from "@reduxjs/toolkit";
import cartSlice from '../features/cartSlice'
import wishlistSlice from '../features/wishlistSlice'
import filterSlice from "../features/filterSlice";
import reviewSlice from '../features/reviewSlice'
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


const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const persistConfig2 = {
  key: "wislist",
  version: 1,
  storage
}
const persistConfig3 = {
  key: "filteredProducts",
  version: 1,
  storage
}
const persistConfig4 = {
  key: "reviews",
  version: 1,
  storage
}
const persistedReducer = persistReducer(persistConfig, cartSlice);
const persistedReducer2 = persistReducer(persistConfig2, wishlistSlice);
const persistReducer3 = persistReducer(persistConfig3, filterSlice);
const persistReducer4 = persistReducer(persistConfig4, reviewSlice);
export const store = configureStore({
  reducer: {
    cart: persistedReducer,
    wishlist: persistedReducer2,
    filteredProducts: persistReducer3,
    reviews: persistReducer4,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
