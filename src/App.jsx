import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Headline from './Components/Headline/Headline'
import Services from './Components/Services/Services'
import AboutMe from './Components/AboutMe/AboutMe'
import Project from './Components/Projects/Project'
import Education from './Components/Education/Education'
import Skills from './Components/Skills/Skills'
import ContactMe from './Components/ContactMe/ContactMe'
import Footer from './Components/Footer/Footer'
import Achiev from './Components/Achievements/Achiev'

const App = () => {
  return (
    <div>
      <Navbar/>
       <Hero/>
      <Headline/>
      <Services/>
      <AboutMe/>
      <Project/>
      <Headline/>
      <Education/>
      <Achiev/>
      <Skills/>
      <Headline/>
      <ContactMe/>
      <Headline/>
      <Footer/>
    </div>
  )
}

export default App