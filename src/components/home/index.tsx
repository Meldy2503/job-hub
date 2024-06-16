import React from 'react'
import LandingPage from './landing-page'
import OurClients from './our-clients'
import GetStarted from './get-started'
import Metrics from './metrics'
import Cta from './cta'
import Feature from './feature'
import Testimonials from './testimonials'
import Footer from '../footer'
import Navbar from '../navbar'

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <LandingPage/>
    <OurClients/>
    <GetStarted/>
    <Metrics/>
    <Testimonials/>
    <Feature/>
    <Cta/>
    <Footer/>
    </>
  )
}

export default HomePage