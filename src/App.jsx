import React, { useEffect } from 'react'
import Nav from './components/Nav/nav'
import Hero from './components/Hero/hero'
import TickerStrip from './components/TickerStrip/tickerstrip'
import Workflow from './components/Workflow/workflow'
import WhyChoose from './components/WhyChoose/whychoose'
import HowItWorks from './components/HowItWorks/howitworks'
import Programs from './components/Programs/programs'
import Internships from './components/Internships/internships'
import Services from './components/Services/services'
import Faq from './components/Faq/faq'
import Footer from './components/Footer/footer'

export default function App() {
  useEffect(() => {
    // If user types a random URL or refreshes, reset to root URL without any hash
    if (window.location.pathname !== '/' || window.location.hash) {
      window.history.replaceState(null, '', '/');
    }
    // Always scroll to the top of the home page on initial load/refresh
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Workflow />
      <TickerStrip />
      <HowItWorks />
      <Programs />
      <Internships />
      <Services />
      <WhyChoose />
      <Faq />
      <Footer />
    </>
  )
}
