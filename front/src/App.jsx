import { Routes, Route } from 'react-router-dom'

import Home from './home/Home'
import Products from './products/Products'
import Categories from './categories/categories.jsx'
// import History from './history/History'

import './index.css'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='/products' element={ <Products /> }/>
      <Route path='/categories' element={ <Categories /> }/>
      {/* <Route path='/history' element={ <History /> }/> */}
    </Routes>
  )
}


