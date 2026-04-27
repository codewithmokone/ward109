import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'

function Home() {
  return (
    <main className='min-h-screen'>
        <Nav />
        <Hero />
        <About />
    </main>
  )
}

export default Home