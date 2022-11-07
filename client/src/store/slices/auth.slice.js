import { createSlice } from '@reduxjs/toolkit';
import {loginMe, registrMe} from "../actions/auth.action";

const initialState = {
  isAuth: false
};

export const AuthSlice = createSlice({
  name: 'authSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginMe.fulfilled, (state) => {
      state.isAuth = true
    });
    builder.addCase(registrMe.fulfilled, (state) => {
      state.isAuth = true
    })
  },
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload
    }
  }
});

export default AuthSlice.reducer;
export const {
  setIsAuth
} = AuthSlice.actions;
