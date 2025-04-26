import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "@store";
import recipesService from "@service/recipes";
import { Recipe, NewRecipe } from "@types";

const initialState: Recipe[] = [];

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipes(_state, action: PayloadAction<Recipe[]>) {
      return action.payload;
    },
    clearRecipes() {
      return [];
    },
    editRecipe(state, action: PayloadAction<Recipe>) {
      const id = action.payload.id;
      return state.map((recipe) =>
        recipe.id === id ? action.payload : recipe
      );
    },
    appendRecipe(state, action: PayloadAction<Recipe>) {
      state.push(action.payload);
    },
    removeRecipe(state, action: PayloadAction<string>) {
      const id = action.payload;
      return state.filter((recipe) => recipe.id !== id);
    },
  },
});

export const {
  setRecipes,
  clearRecipes,
  appendRecipe,
  removeRecipe,
  editRecipe,
} = recipesSlice.actions;
export default recipesSlice.reducer;

export const createRecipe = (content: NewRecipe) => {
  return async (dispatch: AppDispatch) => {
    const newRecipe = await recipesService.create(content);
    dispatch(appendRecipe(newRecipe));
  };
};

export const updateRecipe = (id: string, content: Recipe) => {
  return async (dispatch: AppDispatch) => {
    const res = await recipesService.update(id, content);
    dispatch(editRecipe(res));
  };
};

export const deleteRecipe = (id: string) => {
  return async (dispatch: AppDispatch) => {
    await recipesService.removeRecipe(id);
    dispatch(removeRecipe(id));
  };
};

export const fetchRecipes = (username: string) => {
  return async (dispatch: AppDispatch) => {
    const recetas = await recipesService.getUserRecipes(username);
    dispatch(setRecipes(recetas));
  };
};
