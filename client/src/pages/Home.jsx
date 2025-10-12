import React from 'react'
import HeroBanner from '../component/template/HeroBanner'
import OurPartners from '../component/molecules/OurPartners'
import VideoPlayer from '../component/atoms/VideoPlayer'
import Benifits from '../component/template/Benifits'
import Courses from '../component/template/Courses'
import Testimonial from '../component/template/Testimonial'
import Pricing from '../component/template/Pricing'
import FAQ from '../component/template/FAQ'
import Heading from '../component/molecules/Heading'

const Home = () => {
  return (
    <>
      <HeroBanner />
      <OurPartners />
      <VideoPlayer />
      <Benifits />
      <Courses />
      <Testimonial />
      <Pricing />
      <FAQ />
      
    </>
  )
}

export default Home
