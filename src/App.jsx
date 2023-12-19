import React from 'react'
import './App.css'
import Hero from './Sections/Main/Hero/Hero'
import About from './Sections/Main/AboutMe/About'
import Projects from './Sections/Main/Projects/Projects'
import Contact from './Sections/Main/Contact/Contact'

const App = () => {
  return (
    <div className='Sections overflow-hidden'>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
