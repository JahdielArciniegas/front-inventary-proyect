import {Routes, Route} from 'react-router'
import { Recipes } from '@components/recipes/Recipes'
import Home from '@components/common/Home'
import Ingredients from '@components/ingredients/Ingredients'
import User from '@components/user/User'
import Recipe from '@components/recipes/Recipe'


const Page = () => {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/recipes/:id' element={<Recipe/>}/>
        <Route path='/ingredients' element={<Ingredients/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes>
  )
}

export default Page
