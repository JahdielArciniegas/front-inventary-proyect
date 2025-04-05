import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer"
import ingredientsReducer from "./reducers/ingredientsReducer";
import recipesReducer from "./reducers/recipesReducer";

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
  reducer: {
    user : userReducer,
    ingredients : ingredientsReducer,
    recipes : recipesReducer
  }
})
export default store