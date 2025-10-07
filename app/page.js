import Hero from '../components/home/Hero'
import PopularCategory from '../components/home/PopularCategory'
import MenuPage from '../components/home/Menu'
import React from 'react'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Testimonials from '../components/home/Testimonials'

const page = () => {
  return (
    <div>
      <Hero />
      <PopularCategory />
      <MenuPage />
      <WhyChooseUs />
      <Testimonials/>
    </div>
  )
}

export default page