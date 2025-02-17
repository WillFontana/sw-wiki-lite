import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { moviesApi } from "./slices/moviesApi";
import { charactersApi } from "./slices/charactersApi";
import authReducer from "./slices/authSlice";
import eraReducer from "./slices/eraSlice";

export const store = configureStore({
  reducer: {
    era: eraReducer, 
    auth: authReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [charactersApi.reducerPath]: charactersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(moviesApi.middleware)
      .concat(charactersApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
