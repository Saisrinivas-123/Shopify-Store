import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import placeholderApi from "./placeholderApi";
import cartItems from "./cartItems";

export const store = configureStore({
    reducer: {
        cartItems: cartItems,
        [placeholderApi.reducerPath]: placeholderApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(placeholderApi.middleware)
});
setupListeners(store.dispatch)