import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import FeaturesSection from './components/Featured'
import AboutUs from './components/AboutUs'
import ServicesSection from './components/Services'
import TestimonialSection from './components/Testimonial'
import PartnerSection from './components/Partner'
import Card from './components/Cards'
import Contact from './components/Contact'
import Footer from './components/Footer'
const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutUs />
      <ServicesSection />
      <TestimonialSection />
      <PartnerSection />
      <Card />
      <Contact />
      <Footer />
    </div>
  )
}

export default page
