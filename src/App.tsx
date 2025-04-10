import { Login } from "./components/Login"
import Page from "./pages/Page"
import { BrowserRouter as Router } from "react-router"
import { useSelector } from "react-redux"
import { RootState } from "./store"
import NavBar from "./components/NavBar"
import styles from "./App.module.css"
import Footer from "./components/Footer"

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
    <div className={styles.container}>
    <Router>
      <aside className={styles.navBar}>
        <NavBar/>
      </aside>
      <main>
        {!user.user ? <Login/> : <Page/> }
      </main>
    </Router>
    <footer className={styles.footer}>
        <Footer/>
      </footer>
    </div>
  )
}
export default App
