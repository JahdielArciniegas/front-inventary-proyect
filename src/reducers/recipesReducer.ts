import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../App'
import { AppDispatch } from '../store'
import recipesService from '../service/recipes'

export interface NewRecipe {
  title : string,
  cost : string,
  amount : string
  ingredients: {id : string, amount : string}[]
}

export interface Recipe extends NewRecipe {
  id : string,
  user : User
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
    },
    appendRecipe(state, action : PayloadAction<Recipe>) {
      state.push(action.payload)
    }
  }
})

export const { setRecipes, clearRecipes, appendRecipe } = recipesSlice.actions
export default recipesSlice.reducer

export const createRecipe = (content : NewRecipe) => {
  return async (dispatch : AppDispatch) => {
    const newRecipe = await recipesService.create(content)
    dispatch(appendRecipe(newRecipe))
  }
}
