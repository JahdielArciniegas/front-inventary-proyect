import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ingredientsService from '../service/ingredients'
import { AppDispatch } from '../store'

import { Ingredient, newIngredient } from '../types'

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
    },
    appendIngredient(state, action : PayloadAction<Ingredient>) {
      state.push(action.payload)
    },
    removeIngredient(state, action : PayloadAction<string>){
      const id = action.payload
      return state.filter(ingredient => ingredient.id !== id)
    }
  }
})

export const { setIngredients, clearIngredients, appendIngredient, removeIngredient} = ingredientsSlice.actions
export default ingredientsSlice.reducer

export const createIngredient = (content : newIngredient) => {
  return async (dispatch : AppDispatch) => {
    const newIngredient = await ingredientsService.create(content)
    dispatch(appendIngredient(newIngredient))
  }
}

export const deleteIngredient = (id : string) => {
  return async (dispatch : AppDispatch) => {
    await ingredientsService.removeIngredients(id)
    dispatch(removeIngredient(id))
  }
}