import { Link } from "react-router";
import { Recipe as RecipeType } from "@/types";
import styles from "./Recipe.module.css";

const CardRecipe = ({
  recipe,
  remove,
}: {
  recipe: RecipeType;
  remove: (id: string) => void;
}) => {
  return (
    <div className={styles.recipe}>
      <div className={styles.button}>
        <button onClick={() => remove(recipe.id)}>x</button>
      </div>
      <Link to={`/recipes/${recipe.id}`}>
        <header>{recipe.title}</header>
      </Link>
      <footer>
        Dolar :{Number(recipe.cost).toFixed(2)} - Pesos :
        {(Number(recipe.cost) * 4000).toFixed(0)}
      </footer>
    </div>
  );
};

export default CardRecipe;
