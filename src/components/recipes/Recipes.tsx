import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store"
import AddRecipe from "./AddRecipe"
import { deleteRecipe } from "../../reducers/recipesReducer"
import styles from "./Recipe.module.css"
import { useState } from "react"
import { setError, setNotification } from "../../reducers/notificationReducer"
import CardRecipe from "./CardRecipe"

export const Recipes = () => {
  const recipes = useSelector((state : RootState) => state.recipes)
  const [showCard, setShowCard] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const removeRecipe = (id : string) => {
    try{
      dispatch(deleteRecipe(id))
      dispatch(setNotification("Receta eliminada exitosamente", 3))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      dispatch(setError("Error al eliminar receta", 3))
    }
  }
  const handleAddRecipe = () => {
    setShowCard(!showCard)
  }
  return (
    <div className={styles.container}>
      <h2>Recetas</h2>
      <div className={styles.container_recipe}>
      {recipes.map(recipe => <CardRecipe key={recipe.id} remove={removeRecipe} recipe={recipe}/>)}
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