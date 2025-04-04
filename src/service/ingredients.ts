let token = null

const setTokenIngredients = (newToken : string) => {
  token = `Bearer ${newToken}`
}

export default { setTokenIngredients }