import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Issues from '../components/Issues'
import Endorsements from '../components/Endorsements'

function Home() {
  return (
    <main className='min-h-screen'>
        <Nav />
        <Hero />
        <About />
        <Issues />
        <Endorsements />
    </main>
  )
}

export default Home