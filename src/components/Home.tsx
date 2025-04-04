import { useDispatch } from "react-redux"
import { logout } from "../reducers/userReducer"

const Home = () => {
  const dispatch = useDispatch()
  const logOut = () => {
    localStorage.removeItem("loggedInventaryUser")
    dispatch(logout())
  }

  return (
    <div>
      <h2>Home</h2>
      <button onClick={logOut}>Cerrar Sesión</button>
    </div>
  )
}

export default Home
