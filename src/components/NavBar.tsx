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
          <Link to="/"><li onClick={() => setSelect("HOME")} className={select === "HOME" ? style.active : ""}><HomeIcon/>Home</li></Link>
          <Link to="/recipes"><li onClick={() => setSelect("RECIPE")} className={select === "RECIPE" ? style.active : ""}><RecipesIcon/>Recipes</li></Link>
          <Link to="/ingredients"><li onClick={() => setSelect("INGREDIENT")} className={select === "INGREDIENT" ? style.active : ""}><IngredientsIcon/>Ingredients</li></Link>
          <Link to="/user"><li onClick={() => setSelect("USER")} className={select === "USER" ? style.active : ""}><UserIcon/>User</li></Link>
        </ul>
      </nav>
  )
}

export default NavBar
