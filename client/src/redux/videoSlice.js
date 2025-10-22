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
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchSuccess: (state, action) => {
      state.loading = false
      state.currentUser = action.payload;
      state.error = false;
    },
    fetchFailure: (state) => {
      state.loading = false
      state.error = true
    },
  },
})

export const { fetchStart, fetchSuccess, fetchFailure} =
  videoSlice.actions;


export default videoSlice.reducer