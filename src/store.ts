import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@reducers/userReducer"
import ingredientsReducer from "@reducers/ingredientsReducer";
import recipesReducer from "@reducers/recipesReducer";
import notificationReducer from "@reducers/notificationReducer";



const store = configureStore({
  reducer: {
    user : userReducer,
    ingredients : ingredientsReducer,
    recipes : recipesReducer,
    notification : notificationReducer
  },
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store