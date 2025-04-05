import { useSelector } from "react-redux"
import { RootState } from "../store"
import AddRecipe from "./AddRecipe"

export const Recipes = () => {
  const recipes = useSelector((state : RootState) => state.recipes)
  return (
    <div>
      <h2>Recetas</h2>
      {recipes.map(recipe => <div key={recipe.id}>{recipe.title}</div>)}
      <AddRecipe/>
    </div>
  )
}