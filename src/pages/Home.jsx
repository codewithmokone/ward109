import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Issues from '../components/Issues'
import Endorsements from '../components/Endorsements'
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
        <Issues />
        <Endorsements />
        {/* <Events /> */}
        <CTA  />
        <Contact />
        <Footer />
    </main>
  )
}

export default Home