import React from 'react'
import Hero from './sections/Hero'
import ShowCaseSection from './sections/ShowCaseSection'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import NavBar from './sections/Navbar'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
    <NavBar/>
    <Hero />
    <ShowCaseSection/>
    <ExperienceSection/>
    <TechStack/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App