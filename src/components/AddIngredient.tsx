import { useState } from "react"
import { useDispatch } from "react-redux"
import { createIngredient } from "../reducers/ingredientsReducer"
import { AppDispatch } from "../store"

const AddIngredient = () => {
  const allAmounts = ["kg","lt","unidad"]
  const [name,setName] = useState("")
  const [cost,setCost] = useState("")
  const [currency, setCurrency] = useState("DOLAR")
  const [amount,setAmount] = useState("")
  const dispatch = useDispatch<AppDispatch>()

  const submit = async(e : React.FormEvent) => {
    e.preventDefault()
    let newCost : string = ""
    if(currency === "PESOS"){
      newCost = String(Number(cost)/4000)
    }
    setCost(newCost)

    const newIngredient = {
      name,
      cost : newCost,
      amount
    }
    try{
      dispatch(createIngredient(newIngredient))
      setName("")
      setAmount("")
      setCost("")
      setCurrency("DOLAR")
    } catch (error){
      console.log(error)
    }
  }

  return (
    <div>
      <h3>Create new Ingredient</h3>
      <form onSubmit={submit} >
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="cost">Cost</label>
          <input type="text" id="cost" name="cost" value={cost} onChange={(e) => setCost(e.target.value)} />
          <select name="currency" id="currency" value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="DOLAR">DOLAR</option>
            <option value="PESOS">PESOS</option>
          </select>
        </div>
        <div>
          <p>Cada cantidad se equivale a 1 (ejemplo: 1 kg = 1000 gr)</p>
          <label htmlFor="amount">Amount</label>
          {allAmounts.map((a) => (
            <button type="button" key={a} value={a} onClick={() => setAmount(a)}>{a}</button>
          ))}
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default AddIngredient
