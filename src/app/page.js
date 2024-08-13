'use client'
import AboutMe from '@/Components/Aboutme'
import HeroSection from '@/Components/HeroSection'
import Nav from '@/Components/Nav'
import Projects from '@/Components/Projects'
import Services from '@/Components/Services'
import Home from '@/Components/Spline'
import React from 'react'

const page = () => {
  return (
    <div className='px-44' >
      <Nav />
      <HeroSection />
      <AboutMe />
      <Services />
      <Projects />
      <Home/>


      page</div>
  )
}

export default page