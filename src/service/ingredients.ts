import axios from "axios"
const baseUrl = "http://localhost:3003/api/ingredient"

let token = null

const setTokenIngredients = (newToken : string) => {
  token = `Bearer ${newToken}`
}

const getUserIngredients = async (userName : string) => {
  const req = axios.get(`${baseUrl}/${userName}`)
  const res = await req
  return res.data
}

export default { setTokenIngredients, getUserIngredients }