//import { useState } from 'react'
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css'
import heroImg from './assets/hero.jpg'
import Carrusel from './components/carrusel'
function App() {


  return (
    <>
    <Header></Header>
    <img src={heroImg} className='w-100' alt="" />
    <Carrusel></Carrusel>
    </>
  )
}

export default App
