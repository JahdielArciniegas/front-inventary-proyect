import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useParams } from "react-router";
import { useState } from "react";
import CalcRecipe from "./CalcRecipe";
import styles from "./Recipe.module.css";

const Recipe = () => {
  const { id } = useParams();
  const recipe = useSelector((state: RootState) =>
    state.recipes.find((recipe) => recipe.id === id)
  );
  const [calUnit, setCalUnit] = useState(recipe?.unit || "Unidad");
  const [calAmount, setCalAmount] = useState(recipe?.amount || "");

  if (!recipe) {
    return (
      <div>
        <h2>Receta no encontrada</h2>
      </div>
    );
  }

  return (
    <div className={styles.infoRecipe}>
      <div>
        <h2>{recipe?.title}</h2>
      </div>
      <div>
        <div className={styles.info}>
          <label htmlFor="">Unidad:</label>
          <p>{recipe.unit}</p>
        </div>
        <div className={styles.info}>
          <label htmlFor="">Cantidad:</label>
          <p>{recipe.amount}</p>
        </div>
        <div className={styles.infoIngredient}>
          <label htmlFor="">Ingredientes</label>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Costo en Dolares</th>
                <th>Costo en Pesos</th>
              </tr>
            </thead>
            <tbody>
              {recipe?.ingredients.map((ingrediente) => (
                <tr key={ingrediente.id}>
                  <td>{ingrediente.ingredient.name}</td>
                  <td>{ingrediente.amount}</td>
                  <td>
                    {Number(ingrediente.ingredient.cost) *
                      Number(ingrediente.amount)}
                  </td>
                  <td>
                    {Number(ingrediente.ingredient.cost) *
                      Number(ingrediente.amount) *
                      4000}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.info}>
          {recipe.unit === "Unidad" && (
            <div>
              Costo Unitario {Number(recipe.cost) / Number(recipe.amount)}
            </div>
          )}
          <label htmlFor="">Costo total</label>
          <p>
            {recipe.cost} Dolares - {(Number(recipe.cost) * 4000).toFixed(0)}{" "}
            Pesos
          </p>
        </div>
      </div>
      <div>
        <h3>Comprueba el precio de la receta con otras proporciones aqui...</h3>
        <div className={styles.info}>
          <label htmlFor="">Unidad:</label>
          <select
            value={calUnit}
            onChange={(e) =>
              setCalUnit(
                e.target.value as
                  | "Molde Circular"
                  | "Molde Rectangular"
                  | "Unidad"
              )
            }
          >
            <option value="Molde Circular">Molde Circular</option>
            <option value="Molde Rectangular">Molde Rectangular</option>
            <option value="Unidad">Unidad</option>
          </select>
        </div>
        <div className={styles.info}>
          <label htmlFor="">Cantidad:</label>
          <input
            type="text"
            value={calAmount}
            onChange={(e) => setCalAmount(e.target.value)}
          />
        </div>
        <div className={styles.info}>
          <label htmlFor="">Costo total</label>
          {recipe.unit && calUnit && calAmount && (
            <CalcRecipe recipe={recipe} unit={calUnit} amount={calAmount} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
