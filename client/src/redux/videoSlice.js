import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // ✅ this slice holds the selected video, not the user
  currentVideo: null,
  loading: false,
  error: false,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      // ✅ ensure arrays exist to avoid optional chaining everywhere
      const v = action.payload || {};
      v.likes = Array.isArray(v.likes) ? v.likes : [];
      v.dislikes = Array.isArray(v.dislikes) ? v.dislikes : [];
      state.currentVideo = v;
      state.error = false;
    },
    fetchFailure: (state) => {
      state.loading = false;
      state.error = true;
    },

    // ✅ like/dislike use action.payload as userId
    like: (state, action) => {
      const userId = action.payload;
      if (!state.currentVideo) return;

      const { likes, dislikes } = state.currentVideo;
      if (!likes.includes(userId)) {
        likes.push(userId);
        const i = dislikes.findIndex((id) => id === userId); // <-- proper arrow
        if (i !== -1) dislikes.splice(i, 1);
      }
    },

    dislike: (state, action) => {
      const userId = action.payload;
      if (!state.currentVideo) return;

      const { likes, dislikes } = state.currentVideo;
      if (!dislikes.includes(userId)) {
        dislikes.push(userId);
        const i = likes.findIndex((id) => id === userId); // <-- proper arrow
        if (i !== -1) likes.splice(i, 1);
      }
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFailure, like, dislike } =
  videoSlice.actions;

export default videoSlice.reducer;