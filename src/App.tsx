import { useState } from "react"
import loginService from "./service/login"
import ingredientsService from "./service/ingredients"
import recipesService from "./service/recipes"
import { Login } from "./components/Login"
import Page from "./pages/Page"
import { BrowserRouter as Router,Link } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { login } from "./reducers/userReducer"
import { RootState } from "./store"

export interface User {
  username: string
  name: string
  token: string
}

export interface UserState {
  user : User | null
}


function App() {
  const user = useSelector((state : RootState) => state.user)
  const dispatch = useDispatch()
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleUsername = (e : React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }
  const handlePassword = (e : React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const submit = async (e : React.FormEvent) => {
    e.preventDefault()
    try{
      const user = await loginService.login(username, password)
      localStorage.setItem('loggedInventaryUser', JSON.stringify(user))
      recipesService.setTokenRecipes(user.token)
      ingredientsService.setTokenIngredients(user.token)
      dispatch(login(user))
      setUsername("")
      setPassword("")
    } catch (error){
      console.log(error)
    }
  } 

  console.log(user.user)
  

  return (
    <>
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/user">User</Link>
        <Link to="/ingredients">Ingredients</Link>
      </nav>
      {!user.user ? <Login submit={submit} username={username} handleUsername={handleUsername} password={password} handlePassword={handlePassword}/> : <Page/> }
    </Router>
    </>
  )
}
export default App
