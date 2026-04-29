import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Platform from '../components/Platform'
import Community from '../components/Community'
import Events from '../components/Events'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <main className='min-h-screen'>
        <Nav />
        <Hero />
        <About />
        <Platform />
        <Community />
        {/* <Events /> */}
        <CTA  />
        <Contact />
        <Footer />
    </main>
  )
}

export default Home