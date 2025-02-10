import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import { About } from './sections/About'
import Projects from './sections/Projects'

const App = () => {
  return (
    <main className=' max-w-7xl mx-auto border-3 border-l-purple-500 border-r-purple-500 border-b-purple-500 shadow-2xl'>
    <Navbar /> 

    <Hero />

    <About />

    <Projects />

    </main>
  )
}

export default App;