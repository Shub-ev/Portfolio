import React from 'react'
import './App.css'
import Hero from './Sections/Main/Hero/Hero'
import About from './Sections/Main/AboutMe/About'

const App = () => {
  return (
    <div className='Sections overflow-x-hidden'>
      <Hero/>
      <About/>
    </div>
  )
}

export default App
