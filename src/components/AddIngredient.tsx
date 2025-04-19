import { useState } from "react"
import { useDispatch } from "react-redux"
import { createIngredient } from "../reducers/ingredientsReducer"
import { AppDispatch } from "../store"
import styles from "../components/Ingredients.module.css"
import { setError, setNotification } from "../reducers/notificationReducer"

const AddIngredient = ({handleAddRecipe} : {handleAddRecipe : () => void}) => {
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
    }else{
      newCost = cost
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
      dispatch(setNotification("Ingrediente creado exitosamente", 3))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e){
      dispatch(setError("Error al crear ingrediente", 3))
    }
  }

  return (
    <div>
      <h3>Agregar Nuevo Ingrediente</h3>
      <form onSubmit={submit} >
        <div className={styles.input}>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={styles.input}>
          <label htmlFor="cost">Costo</label>
          <div>
            <input type="text" id="cost" name="cost" value={cost} onChange={(e) => setCost(e.target.value)} />
          <select name="currency" id="currency" value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="DOLAR">DOLAR</option>
            <option value="PESOS">PESOS</option>
          </select>
          </div>  
        </div>
        <div className={styles.input}>
          <p>Cada cantidad se equivale a 1 (ejemplo: 1 kg = 1000 gr)</p>
          <label htmlFor="amount">Unidad de Medida</label>
          <div>
            {allAmounts.map((a) => (
            <button type="button" key={a} value={a} onClick={() => setAmount(a)} className={a === amount ? styles.active : ""}>{a}</button>
          ))}
          </div>
        </div>
        <button className={styles.create_button} type="submit">Create</button>
      </form>
      <div className={styles.close} onClick={handleAddRecipe}>x</div>
    </div>
  )
}

export default AddIngredient
