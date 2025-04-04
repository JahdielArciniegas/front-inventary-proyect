import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {User} from '../App'



interface Ingredient {
  name : string,
  cost : string,
  amount : string,
  user : User,
  id: string
}

const initialState : Ingredient[] = []

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    setIngredients(_state, action : PayloadAction<Ingredient[]>) {
      return action.payload
    },
    clearIngredients(){
      return []
    }
  }
})

export const { setIngredients, clearIngredients} = ingredientsSlice.actions
export default ingredientsSlice.reducer
