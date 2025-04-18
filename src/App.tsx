import { Login } from "./components/Login"
import Page from "./pages/Page"
import { BrowserRouter as Router } from "react-router"
import { useSelector } from "react-redux"
import { RootState } from "./store"
import NavBar from "./components/NavBar"
import styles from "./App.module.css"
import Footer from "./components/Footer"
import Notification from "./components/Notification"

function App() {
  const user = useSelector((state : RootState) => state.user)
  const notification = useSelector((state : RootState) => state.notification.notification)
  const error = useSelector((state : RootState) => state.notification.error)
  
  return (
    <div className={styles.container}>
    <Notification notification={notification} error={error} />
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
