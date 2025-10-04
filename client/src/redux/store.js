import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'

// const store = createStore(rootReducer, composeWithDevTooks(applyMiddleware(logger)))

export const store = configureStore({
  reducer: { user: userReducer },
  devTools: { name: "video_app", trace: true },
})