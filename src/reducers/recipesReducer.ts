import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../App'
import { AppDispatch } from '../store'
import recipesService from '../service/recipes'
import { Ingredient } from './ingredientsReducer'

export interface NewRecipe {
  title : string,
  cost : string,
  amount : string
  ingredients: {id : string, amount : string, ingredient : Ingredient}[]
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
    },
    removeRecipe(state, action : PayloadAction<string>){
      const id = action.payload
      return state.filter(recipe => recipe.id !== id)
    }
  }
})

export const { setRecipes, clearRecipes, appendRecipe, removeRecipe } = recipesSlice.actions
export default recipesSlice.reducer

export const createRecipe = (content : NewRecipe) => {
  return async (dispatch : AppDispatch) => {
    const newRecipe = await recipesService.create(content)
    dispatch(appendRecipe(newRecipe))
  }
}

export const deleteRecipe = (id : string) => {
  return async ( dispatch : AppDispatch) => {
    await recipesService.removeRecipe(id)
    dispatch(removeRecipe(id))
  }
}
