import { useSelector } from "react-redux"
import { RootState } from "../../store"
import AddIngredient from "./AddIngredient"
import styles from "./Ingredients.module.css"
import { useState } from "react"
import EditIngredient from "./EditIngredient"

const Ingredients = () => {
  const ingredients = useSelector((state : RootState) => state.ingredients)
  const [showCard, setShowCard] = useState(false)
  const [editCard, showEditCard] = useState(false)
  const [ingredient, setIngredient] = useState("")
  const handleAddRecipe = () => {
    setShowCard(!showCard)
  }
  const handleEdit = () => {
    showEditCard(!editCard)
  }
  const handleEditIngredient = (id : string) => {
    handleEdit()
    setIngredient(id)
  }
  return (
    <div>
      <div className={styles.ingredients}>
        <h2>Ingredientes</h2>
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
          {ingredients.map(ingredient => <tr key={ingredient.id}><td>{ingredient.name}</td><td>{ingredient.amount}</td><td>{ingredient.cost}</td><td><button onClick={() => handleEditIngredient(ingredient.id)}>Editar</button></td></tr>)}
        </tbody>
      </table>
      </div>
      <div className={styles.add_button}>
      <button onClick={handleAddRecipe}>+</button>
      </div>
      {editCard && (
        <div className={styles.add_ingredient}>
          <EditIngredient id={ingredient} handleEditRecipe={handleEdit}/>
        </div>
      )}
      {showCard && (
        <div className={styles.add_ingredient}>
          <AddIngredient handleAddRecipe={handleAddRecipe}/>
        </div>
      )}
    </div>
  )
}

export default Ingredients
