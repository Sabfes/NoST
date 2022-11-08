import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiAuth} from "../../api/auth.api";

export const loginMe = createAsyncThunk(
  'auth/login',
  async (data) => {
    const response = await apiAuth.loginMe(data)
    if (response.status === 200) {
      return true
    }
  }
)

export const registrMe = createAsyncThunk(
  'auth/reg',
  async (data) => {
    const res = await apiAuth.regMe(data)
    if (res.status === 200) {
      return true
    }
  }
)