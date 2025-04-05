import { useState } from "react"
import { useDispatch } from "react-redux"
import { createIngredient } from "../reducers/ingredientsReducer"
import { AppDispatch } from "../store"

const AddIngredient = () => {
  const [name,setName] = useState("")
  const [cost,setCost] = useState("")
  const [amount,setAmount] = useState("")
  const dispatch = useDispatch<AppDispatch>()

  const submit = (e : React.FormEvent) => {
    e.preventDefault()
    const newIngredient = {
      name,
      cost,
      amount
    }
    try{
      dispatch(createIngredient(newIngredient))
      setName("")
      setAmount("")
      setCost("")
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
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input type="text" id="amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default AddIngredient
