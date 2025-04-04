import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer"

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
  reducer: {
    user : userReducer
  }
})

export default store