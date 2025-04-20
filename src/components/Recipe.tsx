import { useSelector } from "react-redux"
import { RootState } from "../store"
import { useParams } from "react-router"

const Recipe = () => {
  const {id} = useParams()
  const recipe = useSelector((state : RootState) => state.recipes.find(recipe => recipe.id === id))

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
        <h2>{recipe?.title}</h2>
      </div>
      <div>
        <label htmlFor=""></label>
      </div>
    </div>
  )
}

export default Recipe
