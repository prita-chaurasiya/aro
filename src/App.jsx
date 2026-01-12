import React from 'react'
import HeroSection from './components/HeroSection'
import TrustSection from './components/TrustSection'
import WhyAffiliate from './components/WhyAffiliate'
import WhoCanJoin from './components/WhoCanJoin'
import HowItWorks from './components/HowItWorks'
import EarningSection from './components/EarningSection'
import USPSection from './components/USPSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <HeroSection />
      <TrustSection />
      <WhyAffiliate />
      <WhoCanJoin />
      <HowItWorks />
      <EarningSection />
      <USPSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App