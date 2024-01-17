import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './assets/home'
import { Routes,Route } from 'react-router-dom'
import Detail from './assets/detail'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/detail/:guid/*' element={<Detail/>}></Route>
      </Routes>
    </>
  )
}

export default App
