import { useSelector } from "react-redux"
import { RootState } from "../store"
import { useParams } from "react-router"
import { useState } from "react"
import CalcRecipe from "./CalcRecipe"




const Recipe = () => {
  const {id} = useParams()
  const recipe = useSelector((state : RootState) => state.recipes.find(recipe => recipe.id === id))
  const [amount, setAmount] = useState(recipe?.amount)
  const [ingredientsAmount, setIngredientsAmount] = useState(recipe?.ingredients.map(i => ({id : i.id, amount : i.amount})) || [])
  const [editAmount, setEditAmount] = useState(true)
  const [unit, setUnit] = useState(recipe?.unit)
  const [calUnit, setCalUnit] = useState(recipe?.unit)
  const [calAmount, setCalAmount] = useState(recipe?.amount)


  if(!recipe){
    return (
      <div>
        <h2>Receta no encontrada</h2>
      </div>
    )
  }

  return (
    <div>
      <div>
        <h2>{recipe?.title}<button onClick={() => setEditAmount(!editAmount)} type="button">{editAmount ? "Editar" : "Cancelar"}</button></h2>
      </div>
      <div>
        <div>
        <label htmlFor="">Unidad</label>
        <select value={unit} onChange={(e) => setUnit(e.target.value as "Molde Circular" | "Molde Rectangular" | "Unidad")} disabled={editAmount}>
          <option value="Molde Circular">Molde Circular</option>
          <option value="Molde Rectangular">Molde Rectangular</option>
          <option value="Unidad">Unidad</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Cantidad</label>
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} disabled={editAmount}/>
      </div>
      <div>
        <label htmlFor="">Ingredientes</label>
        <div>
          {recipe?.ingredients.map((ingrediente) => (
            <div key={ingrediente.id}>
              <p>{ingrediente.ingredient.name}</p>
              <input type="text" value={ingredientsAmount.find(i => i.id === ingrediente.id)?.amount} onChange={(e) => setIngredientsAmount((prev) => prev.map(i => i.id === ingrediente.id ? { ...i, amount: e.target.value } : i))} disabled={editAmount}/>
              <p>Costo en dolares {Number(ingrediente.ingredient.cost) * Number(ingrediente.amount)}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        {unit === "Unidad" && <div>Costo Unitario {Number(recipe.cost) / Number(amount)}</div>}
        <label htmlFor="">Costo total</label>
        <p>{recipe.cost}</p>
      </div>
      </div>
      <div>
        <h3>Comprueba el precio de la receta con otras proporciones aqui...</h3>
        <div>
          <label htmlFor="">Unidad</label>
          <select value={calUnit} onChange={(e) => setCalUnit(e.target.value as "Molde Circular" | "Molde Rectangular" | "Unidad")}>
            <option value="Molde Circular">Molde Circular</option>
            <option value="Molde Rectangular">Molde Rectangular</option>
            <option value="Unidad">Unidad</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Cantidad</label>
          <input type="text" value={calAmount} onChange={(e) => setCalAmount(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Costo total</label>{
            unit && calUnit && calAmount && <CalcRecipe recipe={recipe} unit={calUnit} amount={calAmount}/>
          }
        </div>
      </div>
    </div>
  )
}

export default Recipe
