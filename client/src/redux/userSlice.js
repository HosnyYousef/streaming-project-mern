import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  loading: false,
  error: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state) => {
      state.loading = false
      state.loading = isAction.payLoad;
    },
    loginFailure: (state) => {
      state.loading = false
      state.error = true
    },
    logout: (state) => {
      state.user = null
      state.loading = false
      state.error = false
    },
  },
})

export const { loginStart, loginSuccess, loginFailure, logout, subscription } =
  userSlice.actions;

export default userSlice