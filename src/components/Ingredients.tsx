import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"
import AddIngredient from "./AddIngredient"
import { deleteIngredient} from "../reducers/ingredientsReducer"
import styles from "./Ingredients.module.css"
import { useState } from "react"
const Ingredients = () => {
  const ingredients = useSelector((state : RootState) => state.ingredients)
  const dispatch = useDispatch<AppDispatch>()
  const [showCard, setShowCard] = useState(false)
  const handleAddRecipe = () => {
    setShowCard(!showCard)
  }
  return (
    <div>
      <div className={styles.ingredients}>
        <h2>Ingredients</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Costo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map(ingredient => <tr key={ingredient.id}><td>{ingredient.name}</td><td>{ingredient.amount}</td><td>{ingredient.cost}</td><td><button onClick={() => dispatch(deleteIngredient(ingredient.id))}>remove</button></td></tr>)}
        </tbody>
      </table>
      </div>
      <div className={styles.add_button}>
      <button onClick={handleAddRecipe}>+</button>
      </div>
      {showCard && (
        <div className={styles.add_ingredient}>
          <AddIngredient handleAddRecipe={handleAddRecipe}/>
        </div>
      )}
    </div>
  )
}

export default Ingredients
