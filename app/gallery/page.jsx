import React from 'react'
import Hero from "../../components/gallery/Hero"
import GallerySection from "../../components/gallery/GallerySection"
import GalleryCollage from "../../components/gallery/GalleryCollage"




const page = () => {
  return (
    <div>
        <Hero />
        <GallerySection />
        <GalleryCollage/>
    </div>
  )
}

export default page