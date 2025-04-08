import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"
import AddIngredient from "./AddIngredient"
import { deleteIngredient} from "../reducers/ingredientsReducer"

const Ingredients = () => {
  const ingredients = useSelector((state : RootState) => state.ingredients)
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div>
      <h2>Ingredients</h2>
      {ingredients.map(ingredient => <div key={ingredient.id}>{ingredient.name} - {ingredient.cost} <button onClick={() => dispatch(deleteIngredient(ingredient.id))}>remove</button></div>)}
      <AddIngredient/>
    </div>
  )
}

export default Ingredients
