import {combineReducers, configureStore} from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlce";

const rootReducer = combineReducers({
  user: UserSlice
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