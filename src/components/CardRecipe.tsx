import { Link } from "react-router"
import { Recipe as RecipeType } from "../types"
import styles from "./Recipe.module.css"

const CardRecipe = ({recipe,remove}: {recipe : RecipeType, remove : (id:string) => void}) => {
  return (
    <Link to={`/recipes/${recipe.id}`}>
    <div className={styles.recipe}>
      <div className={styles.button}>
        <button onClick={() => remove(recipe.id)}>x</button>
      </div>
      <header>{recipe.title}</header>
      <footer>Dolar :{recipe.cost} - Pesos :{Number(recipe.cost)*4000}</footer>
    </div>
    </Link>
  )
}

export default CardRecipe
