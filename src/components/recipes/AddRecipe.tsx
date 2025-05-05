import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { createRecipe } from "@/reducers/recipesReducer";
import styles from "./Recipe.module.css";
import { setError, setNotification } from "@/reducers/notificationReducer";
import { Recipe } from "@/types";
import useFields from "@/hooks/useFields";

const AddRecipe = ({ handleAddRecipe }: { handleAddRecipe: () => void }) => {
  const dispatch = useDispatch<AppDispatch>();
  const title = useFields("");
  const ingredient = useSelector((state: RootState) => state.ingredients);
  const [ingredients, setIngredients] = useState<Recipe["ingredients"]>([]);
  const cost = useFields("");
  const unit = useFields("Molde Circular");
  const amount = useFields("");
  const ingredientsAmount = useFields("");
  const ingredientSelect = useFields("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    const newRecipe = {
      title: title.value as string,
      unit: unit.value as "Molde Circular" | "Molde Rectangular" | "Unidad",
      amount: amount.value as string,
      cost: cost.value as string,
      ingredients,
    };
    try {
      dispatch(createRecipe(newRecipe));
      title.reset();
      cost.reset();
      unit.reset();
      amount.reset();
      setIngredients([]);
      handleAddRecipe();
      dispatch(setNotification("Receta creada exitosamente", 3));
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      dispatch(setError("Error al crear receta", 3));
    }
  };

  const AddIngredient = () => {
    const newIngredient = {
      id: ingredientSelect.value as string,
      amount: ingredientsAmount.value as string,
      ingredient: ingredient.find((ing) => ing.id === ingredientSelect.value)!,
    };
    setIngredients(ingredients.concat(newIngredient));
    ingredientSelect.reset();
    ingredientsAmount.reset();
  };

  return (
    <div>
      <div>
        <h3>Crear nueva receta</h3>
        <form onSubmit={submit}>
          <div className={styles.input}>
            <label htmlFor="name">
              <h4>Nombre</h4>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title.value as string}
              onChange={(e) => title.onChange(e)}
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="unit">
              <h4>Unidad</h4>
            </label>
            <select
              name="unit"
              id="unit"
              value={
                unit.value as "Molde Circular" | "Molde Rectangular" | "Unidad"
              }
              onChange={(e) => unit.onChange(e)}
            >
              <option value="Molde Circular">Molde Circular</option>
              <option value="Molde Rectangular">Molde Rectangular</option>
              <option value="Unidad">Unidad</option>
            </select>
          </div>
          <div className={styles.input}>
            <label htmlFor="amount">
              <h4>
                {unit.value === "Unidad"
                  ? "Unidades"
                  : unit.value === "Molde Circular"
                  ? "Diametro"
                  : "Medida"}
              </h4>
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={amount.value as string}
              onChange={(e) => amount.onChange(e)}
              placeholder={
                unit.value === "Unidad"
                  ? "Unidades formato 1"
                  : unit.value === "Molde Circular"
                  ? "Diametro formato 1"
                  : "Medida en formato 1x1"
              }
            />
          </div>
          <div className={styles.ingredient_recipe}>
            <h4>Ingredientes</h4>
            <p>Ingresa ingredientes en las unidades kg,lt o unidad</p>

            <div>
              <label htmlFor="ingredients">Selecciona el ingrediente</label>
              <select
                name="ingredients"
                id="ingredients"
                value={ingredientSelect.value as string}
                onChange={(e) => ingredientSelect.onChange(e)}
              >
                <option value="" disabled>
                  Ingrediente...
                </option>
                {ingredient.map((ingrediente) => (
                  <option key={ingrediente.id} value={ingrediente.id}>
                    {ingrediente.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="ingredientsAmount">
                Cantidad de ingredientes
              </label>
              <input
                type="text"
                id="ingredientsAmount"
                name="ingredientsAmount"
                value={ingredientsAmount.value as string}
                onChange={(e) => ingredientsAmount.onChange(e)}
              />
            </div>
            <button type="button" onClick={AddIngredient}>
              Agregar ingrediente
            </button>
            <div className={styles.ingredient_list}>
              <h4>Lista de ingredientes</h4>
              {ingredients.length > 0 &&
                ingredients.map((i) => (
                  <div key={i.id}>
                    <p>
                      {ingredient.find((ing) => ing.id === i.id)?.name} -{" "}
                      {i.amount}{" "}
                      {ingredient.find((ing) => ing.id === i.id)?.amount}{" "}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        const newIngredients = ingredients.filter(
                          (ing) => ing.id !== i.id
                        );
                        setIngredients(newIngredients);
                      }}
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
            </div>
          </div>
          <div className={styles.create_button}>
            <button type="submit">Crear</button>
          </div>
        </form>
      </div>
      <div className={styles.close} onClick={handleAddRecipe}>
        x
      </div>
    </div>
  );
};

export default AddRecipe;
