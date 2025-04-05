import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"
import { createRecipe, Recipe } from "../reducers/recipesReducer"

const AddRecipe = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [title, setTitle] = useState("")
  const ingredient = useSelector((state : RootState) => state.ingredients)
  const [ingredients, setIngredients] = useState<Recipe['ingredients']>([])
  const [cost, setCost] = useState("")
  const [amount, setAmount] = useState("")
  const [ingredientsAmount, setIngredientsAmount] = useState("")
  const [ingredientSelect, setIngredientSelect] = useState("")

  const submit = (e : React.FormEvent) => {
    e.preventDefault()
    const newRecipe = {
      title,
      cost,
      amount,
      ingredients,
    }
    try {
      dispatch(createRecipe(newRecipe))
      setTitle("")
      setCost("")
      setAmount("")
      setIngredients([])
    } catch (error) {
      console.log(error)
    }
  }
  const AddIngredient = () => {
    const newIngredient = {
      id : ingredientSelect,
      amount : ingredientsAmount
    }
    setIngredients(ingredients.concat(newIngredient))
    setIngredientSelect("")
    setIngredientsAmount("")
  }

  return (
    <div>
      <h3>Create new Recipe</h3>
      <form onSubmit={submit} >
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="cost">Cost</label>
          <input type="text" id="cost" name="cost" value={cost} onChange={(e) => setCost(e.target.value)} />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input type="text" id="amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div>
          <h4>Ingredients</h4>
          <label htmlFor="ingredientsAmount">Ingredients Amount</label>
          <input type="text" id="ingredientsAmount" name="ingredientsAmount" value={ingredientsAmount} onChange={(e) => setIngredientsAmount(e.target.value)} />
          <select name="ingredients" id="ingredients" value={ingredientSelect} onChange={(e) => setIngredientSelect(e.target.value)}>
            <option value="" disabled>Seleccione un ingrediente</option>
            {ingredient.map(ingrediente => (
              <option key={ingrediente.id} value={ingrediente.id}>{ingrediente.name}</option>
            ))}
          </select>
          <button type="button" onClick={AddIngredient}>Add Ingredient</button>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default AddRecipe
