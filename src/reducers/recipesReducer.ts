import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../App'

interface Recipe {
  title : string,
  cost : string,
  amount : string
  user : User
  id : string
}

const initialState : Recipe[] = []

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setRecipes(_state, action : PayloadAction<Recipe[]>) {
      return action.payload
    },
    clearRecipes(){
      return []
    }
  }
})

export const { setRecipes, clearRecipes } = recipesSlice.actions
export default recipesSlice.reducer