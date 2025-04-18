import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"
import { createRecipe, Recipe } from "../reducers/recipesReducer"
import styles from "../components/Recipe.module.css"
import { setError, setNotification } from "../reducers/notificationReducer"

const AddRecipe = ({handleAddRecipe} : {handleAddRecipe : () => void}) => {
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
      handleAddRecipe()
      dispatch(setNotification("Receta creada exitosamente", 3))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      dispatch(setError("Error al crear receta", 3))
    }
  }
  const AddIngredient = () => {
    const newIngredient = {
      id : ingredientSelect,
      amount : ingredientsAmount,
      ingredient : ingredient.find((ing) => ing.id === ingredientSelect)!
    }
    setIngredients(ingredients.concat(newIngredient))
    setIngredientSelect("")
    setIngredientsAmount("")
  }

  return (
    <div>
      <div>
        <h3>Crear nueva receta</h3>
      <form onSubmit={submit} >
        <div className={styles.input}>
          <label htmlFor="name"><h4>Nombre</h4></label>
          <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className={styles.input}>
          <label htmlFor="amount"><h4>Cantidad</h4></label>
          <input type="text" id="amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className={styles.ingredient_recipe}>
          <h4>Ingredientes</h4>
          <p>Ingresa ingredientes en las unidades kg,lt o unidad</p>
          
          <div>
            <label htmlFor="ingredients">Selecciona el ingrediente</label>
            <select name="ingredients" id="ingredients" value={ingredientSelect} onChange={(e) => setIngredientSelect(e.target.value)}>
            <option value="" disabled>Ingrediente...</option>
            {ingredient.map(ingrediente => (
              <option key={ingrediente.id} value={ingrediente.id}>{ingrediente.name}</option>
            ))}
          </select>
          </div>
          <div>
          <label htmlFor="ingredientsAmount">Cantidad de ingredientes</label>
          <input type="text" id="ingredientsAmount" name="ingredientsAmount" value={ingredientsAmount} onChange={(e) => setIngredientsAmount(e.target.value)} />
          </div>
          <button type="button" onClick={AddIngredient}>Agregar ingrediente</button>
          <div className={styles.ingredient_list}>
            <h4>Lista de ingredientes</h4>
            {ingredients.length > 0 && ingredients.map((i) => (
              <div key={i.id}>
                <p>{ingredient.find((ing) => ing.id === i.id)?.name} - {i.amount} {ingredient.find((ing) => ing.id === i.id)?.amount} </p>
                <button type="button" onClick={() => {
                  const newIngredients = ingredients.filter((ing) => ing.id !== i.id)
                  setIngredients(newIngredients)
                }}>Eliminar</button>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.create_button}>
            <button type="submit">Crear</button>
        </div>
      </form>
      </div>
      <div className={styles.close} onClick={handleAddRecipe}>x</div>
    </div>
  )
}

export default AddRecipe
