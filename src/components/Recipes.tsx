import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import AddRecipe from "./AddRecipe"
import { removeRecipe } from "../reducers/recipesReducer"

export const Recipes = () => {
  const recipes = useSelector((state : RootState) => state.recipes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Recetas</h2>
      {recipes.map(recipe => <div key={recipe.id}>{recipe.title} - {recipe.cost} <button onClick={() => dispatch(removeRecipe(recipe.id))}>remove</button></div>)}
      <AddRecipe/> 
    </div>
  )
}