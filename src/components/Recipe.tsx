import { Recipe as RecipeType } from "../types"
import styles from "./Recipe.module.css"
const Recipe = ({recipe,remove}: {recipe : RecipeType, remove : (id:string) => void}) => {
  return (
    <div className={styles.recipe}>
      <div className={styles.button}>
        <button onClick={() => remove(recipe.id)}>x</button>
      </div>
      <header>{recipe.title}</header>
      <footer>Dolar :{recipe.cost} - Pesos :{Number(recipe.cost)*4000}</footer>
    </div>
  )
}

export default Recipe
