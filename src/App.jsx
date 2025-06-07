window.global = window;

import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Register from './pages/Register';
import Home from './pages/Home';
function App() {
  

  return (
   
      <Routes>
        <Route path="/" element= {<Landing/>}  />
        <Route path='/register' element = {<Register/>} />
        <Route path='/home' element = {<Home/>}/>
      </Routes>
  
  )
}

export default App
