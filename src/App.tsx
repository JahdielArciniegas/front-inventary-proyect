import { useState } from "react"
import loginService from "./service/login"
import { Login } from "./components/Login"
import Page from "./pages/Page"
import { BrowserRouter as Router,Link } from "react-router"

export interface User {
  username: string
  name: string
  token: string
}


function App() {
  const [user, setUser] = useState<User | null>(null)
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
      const userLogin = await loginService.login(username, password)
      setUser(userLogin)
      setUsername("")
      setPassword("")
    } catch (error){
      console.log(error)
    }
  } 

  

  return (
    <>
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/user">User</Link>
        <Link to="/ingredients">Ingredients</Link>
      </nav>
      {!user ? <Login submit={submit} username={username} handleUsername={handleUsername} password={password} handlePassword={handlePassword}/> : <Page/> }
    </Router>
    </>
  )
}
export default App
