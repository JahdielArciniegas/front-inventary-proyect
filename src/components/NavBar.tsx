import { Link } from 'react-router'
import style from './NavBar.module.css'
import HomeIcon from '../assets/HomeIcon'
import RecipesIcon from '../assets/RecipesIcon'
import UserIcon from '../assets/UserIcon'
import IngredientsIcon from '../assets/IngredientsIcon'
import { useState } from 'react'

const NavBar = () => {
  const [select, setSelect] = useState("HOME")
  return (
      <nav>
        <ul className={style.ul}>
          <li onClick={() => setSelect("HOME")} className={select === "HOME" ? style.active : ""}><Link to="/"><HomeIcon/>Home</Link></li>
          <li onClick={() => setSelect("RECIPE")} className={select === "RECIPE" ? style.active : ""}><Link to="/recipes"><RecipesIcon/>Recipes</Link></li>
          <li onClick={() => setSelect("INGREDIENT")} className={select === "INGREDIENT" ? style.active : ""}><Link to="/ingredients"><IngredientsIcon/>Ingredients</Link></li>
          <li onClick={() => setSelect("USER")} className={select === "USER" ? style.active : ""}><Link to="/user"><UserIcon/>User</Link></li>
        </ul>
      </nav>
  )
}

export default NavBar
