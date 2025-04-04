interface LoginProps {
  submit: (e: React.FormEvent) => void;
  username: string;
  handleUsername: (e: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Login = ({submit,username,handleUsername,password,handlePassword}: LoginProps) => {
  return (
      <div className="form-login" onSubmit={submit}>
        <h2>Inicio de Sesión</h2>
        <form >
          <div>
            <label htmlFor="username">Nombre de usuario</label>
            <input type="text" id="username" name="username" value={username} onChange={handleUsername} />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" value={password} onChange={handlePassword} />
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
  )
}


