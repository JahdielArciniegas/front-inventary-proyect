import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import AddIngredient from "./AddIngredient"
import { removeIngredient } from "../reducers/ingredientsReducer"

const Ingredients = () => {
  const ingredients = useSelector((state : RootState) => state.ingredients)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Ingredients</h2>
      {ingredients.map(ingredient => <div key={ingredient.id}>{ingredient.name} <button onClick={() => dispatch(removeIngredient(ingredient.id))}>remove</button></div>)}
      <AddIngredient/>
    </div>
  )
}

export default Ingredients
