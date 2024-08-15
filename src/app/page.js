'use client'
import AboutMe from '@/Components/Aboutme'
import ContactForm from '@/Components/ContactForm'
import Footer from '@/Components/Footer'
import HeroSection from '@/Components/HeroSection'
import Nav from '@/Components/Nav'
import Projects from '@/Components/Projects'
import Services from '@/Components/Services'
import SwipperJs from '@/Components/SwipperJs'
import React from 'react'

const page = () => {
  return (
    <div className='dark:text-white text-black w-full bg-black' >
      <Nav />
      <HeroSection />
      <AboutMe />
      <Services />
      <Projects />
      <SwipperJs/>
      <ContactForm/>
      <Footer/>
      </div>
  )
}

export default page