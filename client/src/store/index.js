import {combineReducers, configureStore} from "@reduxjs/toolkit";
import AuthSlice from "./slices/auth.slice";

const rootReducer = combineReducers({
  auth: AuthSlice
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
        thunk: true
      })
  });
};