import axios from "axios"
const baseUrl = "http://localhost:3003/api/ingredient"
import { newIngredient } from "../types"

let token : string | null = null

const setTokenIngredients = (newToken : string) => {
  token = `Bearer ${newToken}`
}

const create = async (newIngredient : newIngredient) => {
  const config = {
    headers: {
      authorization: token
    }
  }
  const res = await axios.post(baseUrl, newIngredient, config)
  return res.data
}

const update = async(id : string, newIngredient : newIngredient) => {
  const config = {
    headers: {
      authorization: token
    }
  }
  const req = axios.put(`${baseUrl}/${id}`, newIngredient, config)
  const res = await req
  return res.data
}


const getUserIngredients = async (userName : string) => {
  const req = axios.get(`${baseUrl}/${userName}`)
  const res = await req
  return res.data
}

const removeIngredients = async (id : string) => {
  const config = {
    headers: {
      authorization: token
    }
  }
  const req = axios.delete(`${baseUrl}/${id}`, config)
  const res = await req
  return res.data
}

export default { setTokenIngredients, getUserIngredients, create, removeIngredients, update}