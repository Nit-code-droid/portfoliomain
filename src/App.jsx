import React from 'react'
import Navigation from './components/navbar'
import HeroSection from './components/hero'
import Aboutme from './components/aboutme'
import TechStack from './components/techsatck'
import InternshipsSection from './components/tranings'
import PositionsAndCreatives from './components/achievements'
import ProjectsSection from './components/projects'


const App = () => {
  return (
<div className="gap-y-2">
  {/* Home Section */}
  <div id="home">
    <Navigation />
    <HeroSection />
  </div>

  {/* Academics Section */}
  <div id="academics">
    <Aboutme />
  </div>

  {/* Tech Stack Section */}
  <div id="techstack">
    <TechStack />
  </div>

  {/* Trainings Section */}
  <div id="trainings">
    <InternshipsSection />
  </div>

  {/* Achievements Section */}
  <div id="achievements">
    <PositionsAndCreatives />
  </div>

  {/* Projects Section */}
  <div id="projects">
    <ProjectsSection />
  </div>
</div>

  )
}

export default App