import { useState } from "react";
import { useAppDispatch } from "@/hooks";
import { login } from "@reducers/userReducer";
import { setIngredients } from "@reducers/ingredientsReducer";
import { setRecipes } from "@reducers/recipesReducer";
import loginService from "@service/login";
import ingredientsService from "@service/ingredients";
import recipesService from "@service/recipes";
import styles from "./Login.module.css";
import { setError, setNotification } from "@reducers/notificationReducer";

export const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await loginService.login(username, password);
      const ingredients = await ingredientsService.getUserIngredients(user.id);
      const recipes = await recipesService.getUserRecipes(user.id);
      localStorage.setItem("loggedInventaryUser", JSON.stringify(user));
      recipesService.setTokenRecipes(user.token);
      ingredientsService.setTokenIngredients(user.token);
      dispatch(setIngredients(ingredients));
      dispatch(setRecipes(recipes));
      dispatch(login(user));
      setUsername("");
      setPassword("");
      dispatch(setNotification("Inicio de sesión exitoso", 3));
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      dispatch(setError("Error al iniciar sesión", 3));
    }
  };
  return (
    <div className={styles.form} onSubmit={submit}>
      <h2>Inicio de Sesión</h2>
      <form>
        <div className={styles.input}>
          <label htmlFor="username">Nombre de usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsername}
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
