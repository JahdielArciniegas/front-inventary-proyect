let token : string | null = null
const baseUrl = "http://localhost:3003/api/recipe"
import axios from "axios"
import { NewRecipe } from "../reducers/recipesReducer"


const setTokenRecipes = (newToken : string) => {
  token = `Bearer ${newToken}`
}

const create = async (newRecipe : NewRecipe) => {
  const config = {
    headers: {
      authorization: token
    }
  }
  const res = await axios.post(baseUrl, newRecipe, config)
  return res.data
}

const getUserRecipes = async(username : string) => {
  const req = axios.get(`${baseUrl}/${username}`)
  const res = await req
  return res.data
}
export default { setTokenRecipes, getUserRecipes, create }