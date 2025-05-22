import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import FeaturesSection from './components/Featured'
import AboutUsSection from './components/AboutUs'
import ServicesSection from './components/Services'
import TestimonialSection from './components/Testimonial'
import PartnerSection from './components/Partner'
import AirportFinderSection from './components/Cards'
import ContactSection from './components/Contact'
import Footer from './components/Footer'
const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutUsSection />
      <ServicesSection />
      <TestimonialSection />
      <PartnerSection />
      <AirportFinderSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default page
