import React from 'react'
import './index.css'
import Header from './components/header'
import Hero from './components/hero'
import About from './components/about'
import Skill from './components/skill'
import Project from './components/project'
import Contact from './components/contact'
const App = () => {
  return (
    <>
     <Header />
     <main>
    <Hero />
    <About />
    <Skill />
    <Project />
    <Contact />
    </main>
    </>
    
    
  )
}

export default App