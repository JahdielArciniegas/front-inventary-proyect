import { useDispatch } from "react-redux"
import { logout } from "../reducers/userReducer"
import { clearIngredients } from "../reducers/ingredientsReducer"

const Home = () => {
  const dispatch = useDispatch()
  const logOut = () => {
    localStorage.removeItem("loggedInventaryUser")
    dispatch(logout())
    dispatch(clearIngredients())
  }

  return (
    <div>
      <h2>Home</h2>
      <button onClick={logOut}>Cerrar Sesión</button>
    </div>
  )
}

export default Home
