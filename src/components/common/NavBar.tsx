import { Link } from "react-router";
import style from "./NavBar.module.css";
import { House, Cake, ShoppingBasket, User } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [select, setSelect] = useState("HOME");
  return (
    <nav>
      <ul className={style.ul}>
        <Link to="/">
          <li
            onClick={() => setSelect("HOME")}
            className={select === "HOME" ? style.active : ""}
          >
            <House className={style.icon} />
            Inicio
          </li>
        </Link>
        <Link to="/recipes">
          <li
            onClick={() => setSelect("RECIPE")}
            className={select === "RECIPE" ? style.active : ""}
          >
            <Cake className={style.icon} />
            Recetas
          </li>
        </Link>
        <Link to="/ingredients">
          <li
            onClick={() => setSelect("INGREDIENT")}
            className={select === "INGREDIENT" ? style.active : ""}
          >
            <ShoppingBasket className={style.icon} />
            Ingredientes
          </li>
        </Link>
        <Link to="/user">
          <li
            onClick={() => setSelect("USER")}
            className={select === "USER" ? style.active : ""}
          >
            <User className={style.icon} />
            Usuario
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
