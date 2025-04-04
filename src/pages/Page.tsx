import {Routes, Route} from 'react-router'
import { Recipes } from '../components/Recipes'
import Home from '../components/Home'
import Ingredients from '../components/Ingredients'
import User from '../components/User'


const Page = () => {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/ingredients' element={<Ingredients/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes>
  )
}

export default Page
