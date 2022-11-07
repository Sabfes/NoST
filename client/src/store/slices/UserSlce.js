import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false
};

export const UserSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload
    }
  }
});

export default UserSlice.reducer;
export const {
  setIsAuth
} = UserSlice.actions;
