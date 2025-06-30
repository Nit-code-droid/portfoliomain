import React from 'react'
import Navigation from './components/navbar'
import HeroSection from './components/hero'
import Aboutme from './components/aboutme'
import TechStackCarousel from './components/techsatck'


const App = () => {
  return (
    <div>
      <Navigation/>
      <HeroSection/>
      <Aboutme/>
      <TechStackCarousel/>
    </div>
  )
}

export default App