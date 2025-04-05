import { Login } from "./components/Login"
import Page from "./pages/Page"
import { BrowserRouter as Router,Link } from "react-router"
import { useSelector } from "react-redux"
import { RootState } from "./store"

export interface User {
  username: string
  name: string
  token: string
  id: string
}

export interface UserState {
  user : User | null
}


function App() {
  const user = useSelector((state : RootState) => state.user)
  

  return (
    <>
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/user">User</Link>
        <Link to="/ingredients">Ingredients</Link>
      </nav>
      {!user.user ? <Login/> : <Page/> }
    </Router>
    </>
  )
}
export default App
