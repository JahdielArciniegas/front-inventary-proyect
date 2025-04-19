import { useState } from "react"
import { RootState } from "../store"
import {  useSelector } from "react-redux"
import { updateIngredient } from "../reducers/ingredientsReducer"
import { useAppDispatch } from "../hooks"
import { Ingredient} from "../types"

const EditIngredient = ({id} : {id : string}) => {
  const ingredient = useSelector((state : RootState) => state.ingredients.find((ing) => ing.id === id))
  const [amount,setAmount] = useState(ingredient?.amount)
  const [cost,setCost] = useState(ingredient?.cost)
  const [currency, setCurrency] = useState("DOLAR")
  const dispatch = useAppDispatch()


  if(!ingredient){
    return null
  }

  const submit = async(e : React.FormEvent) => {
    e.preventDefault()
    let newCost : string | undefined = ""
    if(currency === "PESOS"){
      newCost = String(Number(cost)/4000)
    }else{
      newCost = cost
    }
    setCost(newCost)

    if(amount === undefined || cost === undefined){
      return
    }

    const newIngredient : Ingredient = {
      name : ingredient.name,
      amount,
      cost,
      user : ingredient.user,
      id : ingredient.id
    }
    dispatch(updateIngredient(id, newIngredient))
  }
  return (
    <div>
      <h3>Editar Ingrediente</h3>
      <h4>{ingredient?.name}</h4>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="amount">Unidad</label>
          <input type="text" id="amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="cost">Costo</label>
          <div>
            <input type="text" id="cost" name="cost" value={cost} onChange={(e) => setCost(e.target.value)} />
          <select name="currency" id="currency" value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="DOLAR">DOLAR</option>
            <option value="PESOS">PESOS</option>
          </select>
          </div>
        </div>
        <button type="submit">Editar</button>
      </form>
    </div>
  )
}

export default EditIngredient
