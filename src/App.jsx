import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import About from './components/about/About'
import Aggregator from './components/aggregator/Aggregator'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div className='w-[100vw]'>
    <Nav/>
    <Home/>
    <About/>
    <Aggregator/>
    <Footer/>
    </div>
    
  )
}

export default App
