import {combineReducers, configureStore} from "@reduxjs/toolkit";
import AuthSlice from "./slices/auth.slice";
import TasksSlice from "./slices/tasks.slice";

const rootReducer = combineReducers({
  auth: AuthSlice,
  tasks: TasksSlice
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