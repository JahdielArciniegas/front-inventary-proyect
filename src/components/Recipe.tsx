import { Recipe as RecipeType } from "../reducers/recipesReducer"
import styles from "./Recipe.module.css"
const Recipe = ({recipe,remove}: {recipe : RecipeType, remove : (id:string) => void}) => {
  return (
    <div className={styles.recipe}>
      <div className={styles.button}>
        <button onClick={() => remove(recipe.id)}>x</button>
      </div>
      <header>{recipe.title}</header>
      <table><thead><tr><th>Nombre</th><th>Cantidad</th></tr></thead><tbody>{recipe.ingredients.map(i => <tr key={i.id}><td>{i.ingredient.name}</td>  <td>{i.amount}</td></tr>)}</tbody></table>
      <footer>Dolar :{recipe.cost} - Pesos :{Number(recipe.cost)*4000}</footer>
    </div>
  )
}

export default Recipe
