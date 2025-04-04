let token = null

const setTokenRecipes = (newToken : string) => {
  token = `Bearer ${newToken}`
}

export default { setTokenRecipes }