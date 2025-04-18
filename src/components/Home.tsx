import { useAppDispatch } from "../hooks"
import { logout } from "../reducers/userReducer"
import { clearIngredients } from "../reducers/ingredientsReducer"
import { RootState } from "../store"
import styles from "./Home.module.css"
import HeaderComponent from "./HeaderComponent"
import { setNotification } from "../reducers/notificationReducer"
import { useSelector } from "react-redux"

const Home = () => {
  const {user} = useSelector((state : RootState) => state.user)
  const dispatch = useAppDispatch()
  const logOut = () => {
    localStorage.removeItem("loggedInventaryUser")
    dispatch(logout())
    dispatch(clearIngredients())
    dispatch(setNotification("Se a cerrado sesión exitosamente", 3))
  }

  return (
    <section>
      <div className={styles.header}>
        <h2>Bienvenid@ de nuevo</h2>
        <div>
          <span></span>
          <div>
            {user && <div><strong>{user.name}</strong></div>}
          <button onClick={logOut}>Cerrar Sesión</button> 
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <HeaderComponent title="Recetas" description="Ve y agrega tus recetas para saber el costo de cada una" imgUrl="./recipes.png" url="/recipes" />
        <HeaderComponent title="Ingredientes" description="Ve y agrega tus ingredientes para sacar costo de tus mejores recetas" imgUrl="./ingredients.png" url="/ingredients" />
        <HeaderComponent title="Usuario" description="Ve tu información" imgUrl="./user.png" url="/user" />
      </div>
    </section>
  )
}

export default Home
