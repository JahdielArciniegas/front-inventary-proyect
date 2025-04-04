let token = null
const baseUrl = "http://localhost:3003/api/recipe"
import axios from "axios"
const setTokenRecipes = (newToken : string) => {
  token = `Bearer ${newToken}`
}

const getUserRecipes = async(username : string) => {
  const req = axios.get(`${baseUrl}/${username}`)
  const res = await req
  return res.data
}
export default { setTokenRecipes, getUserRecipes }