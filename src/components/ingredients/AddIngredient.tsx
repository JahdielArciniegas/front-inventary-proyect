import { useState } from "react";
import { useDispatch } from "react-redux";
import { createIngredient } from "@/reducers/ingredientsReducer";
import { AppDispatch } from "@/store";
import styles from "./Ingredients.module.css";
import { setError, setNotification } from "@/reducers/notificationReducer";
import useFields from "@/hooks/useFields";

const AddIngredient = ({
  handleAddRecipe,
}: {
  handleAddRecipe: () => void;
}) => {
  const allAmounts = ["kg", "lt", "unidad"];
  const name = useFields("");
  const cost = useFields("");
  const currency = useFields("DOLAR");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    let newCost: string = "";
    if (currency.value === "PESOS") {
      newCost = String(Number(cost.value) / 4000);
    } else {
      newCost = cost.value as string;
    }

    const newIngredient = {
      name: name.value as string,
      cost: newCost,
      amount,
    };
    try {
      dispatch(createIngredient(newIngredient));
      name.reset();
      cost.reset();
      setAmount("");
      currency.reset();
      dispatch(setNotification("Ingrediente creado exitosamente", 3));
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      dispatch(setError("Error al crear ingrediente", 3));
    }
  };

  return (
    <div>
      <h3>Agregar Nuevo Ingrediente</h3>
      <form onSubmit={submit}>
        <div className={styles.input}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name.value as string}
            onChange={(e) => name.onChange(e)}
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="cost">Costo</label>
          <div>
            <input
              type="text"
              id="cost"
              name="cost"
              value={cost.value as string}
              onChange={(e) => cost.onChange(e)}
            />
            <select
              name="currency"
              id="currency"
              value={currency.value as string}
              onChange={(e) => currency.onChange(e)}
            >
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
              <button
                type="button"
                key={a}
                value={a}
                onClick={() => setAmount(a)}
                className={a === amount ? styles.active : ""}
              >
                {a}
              </button>
            ))}
          </div>
        </div>
        <button className={styles.create_button} type="submit">
          Create
        </button>
      </form>
      <div className={styles.close} onClick={handleAddRecipe}>
        x
      </div>
    </div>
  );
};

export default AddIngredient;
