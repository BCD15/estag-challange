import { useState } from 'react'

import { Routes, Route } from 'react-router-dom'

import { FiZap, FiZapOff } from "react-icons/fi";

import NavBar from "./components/NavBar";

import Home from './home/Home'
import Products from './products/Products'
import Categories from './categories/categories.jsx'
import History from './history/history'

import './index.css'
import './App.css'

export default function App() {
  const [dark, setDark] = useState(false)
  const [zap, setZap] = useState(FiZapOff)

  function click() {
    if(dark == false) {
      setZap(FiZap)
    } else {
      setZap(FiZapOff)
    }

    if (localStorage.getItem("darks") === null) {
      setDark(!dark)
      localStorage.setItem("darks", JSON.stringify([dark]));
    } else {
      setDark(!dark)
      localStorage.setItem("darks", JSON.stringify([dark]));
    }
  }

  const darkTheme = JSON.parse(localStorage.getItem('darks'));  

  const navTheme = {
      backgroundColor: darkTheme[0] ? '#010409' : '#6a6ffffe',
      color: darkTheme[0] ? 'white' : 'black',
      borderColor: darkTheme[0] ? '#484f58' : 'lightgray',
  }
  
  const bodyTheme = {
      backgroundColor: darkTheme[0] ? '#0d1117' : 'white',
      color: darkTheme[0] ? 'white' : 'black',
      borderColor: darkTheme[0] ? '#484f58' : 'lightgray',
  }

  const submitButtonTheme = {
      backgroundColor: darkTheme[0] ? '#3fb950' : '#6a6ffffe',
      color: darkTheme[0] ? 'white' : 'black',
  }

  const buttonTheme = {
      backgroundColor: darkTheme[0] ? '#21262d' : 'lightgray',
      color: darkTheme[0] ? 'white' : 'black',
  }

  return (
    <>
      <NavBar navTheme={navTheme}/>
      <Routes>
        <Route path='/' element={ <Home bodyTheme={bodyTheme} submitButtonTheme={submitButtonTheme} buttonTheme={buttonTheme}/> }/>
        <Route path='/products' element={ <Products bodyTheme={bodyTheme} submitButtonTheme={submitButtonTheme} buttonTheme={buttonTheme}/> }/>
        <Route path='/categories' element={ <Categories bodyTheme={bodyTheme} submitButtonTheme={submitButtonTheme} buttonTheme={buttonTheme}/> }/>
        <Route path='/history' element={ <History bodyTheme={bodyTheme} buttonTheme={buttonTheme}/> }/>
      </Routes>
      <button style={{position: 'absolute', right: 25, top: 34, backgroundColor: 'transparent', borderRadius: '10px', padding: '6px', border: 'none', color:'white', fontSize: '18px',}} onClick={click}>{zap}</button>
    </>
  )
}


