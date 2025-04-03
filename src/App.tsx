import { useState } from "react"

interface User {
  username: string
  password: string
}

function App() {
  const [user, setUser] = useState<User | null>(null)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const submit = (e : React.FormEvent) => {
    e.preventDefault()
    setUser({username, password})
  } 

  if (!user){
    return (
      <div className="form-login" onSubmit={submit}>
        <h2>Inicio de Sesión</h2>
        <form >
          <div>
            <label htmlFor="username">Nombre de usuario</label>
            <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    )
  }

  return (
    <>
      <h2>Usuario</h2>
      <p>{user?.username}</p>
      <button type="button" onClick={() => setUser(null)}>Cerrar Sesión</button>
    </>
  )
}

export default App
