import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"
import AddRecipe from "./AddRecipe"
import { deleteRecipe } from "../reducers/recipesReducer"
import styles from "./Recipe.module.css"
import Recipe from "./Recipe"
import { useState } from "react"

export const Recipes = () => {
  const recipes = useSelector((state : RootState) => state.recipes)
  const [showCard, setShowCard] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const removeRecipe = (id : string) => {
    dispatch(deleteRecipe(id))
  }
  const handleAddRecipe = () => {
    setShowCard(!showCard)
  }
  return (
    <div className={styles.container}>
      <h2>Recetas</h2>
      <div className={styles.container_recipe}>
      {recipes.map(recipe => <Recipe key={recipe.id} remove={removeRecipe} recipe={recipe}/>)}
        <div className={styles.add_button}>
        <button onClick={handleAddRecipe}>+</button>
        </div>
      </div>
      {showCard && (
        <div className={styles.add_recipe}>
          <AddRecipe handleAddRecipe={handleAddRecipe}/>
        </div>
      )}
    </div>
  )
}