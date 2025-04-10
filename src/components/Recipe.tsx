import { Recipe } from "../reducers/recipesReducer"
import styles from "./Recipe.module.css"
const Recipe = ({recipe,remove}: {recipe : Recipe, remove : (id:string) => void}) => {
  return (
    <div className={styles.recipe}>
      <header>{recipe.title}</header>
      <table><thead><tr><th>Nombre</th><th>Cantidad</th></tr></thead><tbody>{recipe.ingredients.map(i => <tr key={i.id}><td>{i.ingredient.name}</td>  <td>{i.amount}</td></tr>)}</tbody></table>
      <footer>Dolar :{recipe.cost} - Pesos :{Number(recipe.cost)*4000}</footer>
      <button onClick={() => remove(recipe.id)}>x</button>
    </div>
  )
}

export default Recipe
