import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  loading: false,
  error: false
}

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.loading = false
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: (state) => {
      state.loading = false
      state.error = true
    },
    logout: (state) => {
      state.currentUser = null
      state.loading = false
      state.error = false
    },
  },
})

export const { loginStart, loginSuccess, loginFailure, logout, subscription } =
  videoSlice.actions;


export default videoSlice.reducer