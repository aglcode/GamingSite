import React from 'react'
import Hero from './components/hero.jsx'
import About from './components/about.jsx'


const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Hero />
      <About />
    </main>
  )
}

export default App
