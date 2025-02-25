import React from 'react'
import Hero from './components/hero.jsx'
import About from './components/about.jsx'
import Features from './components/features.jsx'
import Navbar from './components/navbar.jsx'
import Story from './components/story.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/footer.jsx'
import Button from './components/button.jsx'


const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
