import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"
import AddRecipe from "./AddRecipe"
import { deleteRecipe } from "../reducers/recipesReducer"

export const Recipes = () => {
  const recipes = useSelector((state : RootState) => state.recipes)
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div>
      <h2>Recetas</h2>
      {recipes.map(recipe => <div key={recipe.id}>{recipe.title} - {recipe.cost} <button onClick={() => dispatch(deleteRecipe(recipe.id))}>remove</button></div>)}
      <AddRecipe/> 
    </div>
  )
}