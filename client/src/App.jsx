import React from 'react'
import './App.css'
// import Signup from './components/Signup'
import { Link, useNavigate, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'


function App() {


  return (
    <>
    <Routes>
      <Route path = "/" element={<Signup/>}/>
      <Route path = "/login" element={<Login/>}/>
      <Route path = "/home" element={<Home/>}/>
    </Routes>

    </>
  )
}

export default App
