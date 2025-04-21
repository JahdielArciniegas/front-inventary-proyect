import { Link } from "react-router"
import { Recipe as RecipeType } from "../types"
import styles from "./Recipe.module.css"

const CardRecipe = ({recipe,remove}: {recipe : RecipeType, remove : (id:string) => void}) => {
  return (
    
    <div className={styles.recipe}>
      <div className={styles.button}>
        <button onClick={() => remove(recipe.id)}>x</button>
      </div>
      <Link to={`/recipes/${recipe.id}`}>
        <header>{recipe.title}</header>
      </Link>
      <footer>Dolar :{recipe.cost} - Pesos :{Number(recipe.cost)*4000}</footer>
    </div>
    
  )
}

export default CardRecipe
