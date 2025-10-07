import Experience from '../../components/about/Experience'
import Hero from '../../components/about/Hero'
import OurMission from '../../components/about/OurMission'
import OurStory from '../../components/about/OurStory'
import VisitUs from '../../components/about/VisitUs'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen'>
        <Hero />
        <OurStory />
        <OurMission />
        <Experience />
        <VisitUs />
    </div>
  )
}

export default page