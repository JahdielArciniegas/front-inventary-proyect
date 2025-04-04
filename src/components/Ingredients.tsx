import { useSelector } from "react-redux"
import { RootState } from "../store"
import AddIngredient from "./AddIngredient"

const Ingredients = () => {
  const ingredients = useSelector((state : RootState) => state.ingredients)
  return (
    <div>
      <h2>Ingredients</h2>
      {ingredients.map(ingredient => <div key={ingredient.id}>{ingredient.name}</div>)}
      <AddIngredient/>
    </div>
  )
}

export default Ingredients
