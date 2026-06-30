import UtilityBar from './components/UtilityBar'
import Header from './components/Header'
import Hero from './components/Hero'
import ServiceHighlights from './components/ServiceHighlights'
import SpecialsBand from './components/SpecialsBand'
import ServicesGrid from './components/ServicesGrid'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import FinancingBand from './components/FinancingBand'
import ServiceArea from './components/ServiceArea'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Phone } from './components/Icons'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="accent-bar h-1 w-full" />
      <UtilityBar />
      <Header />
      <main>
        <Hero />
        <ServiceHighlights />
        <SpecialsBand />
        <ServicesGrid />
        <WhyChooseUs />
        <Testimonials />
        <FinancingBand />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />

      {/* Floating click-to-call, mobile only */}
      <a
        href="tel:+18775843223"
        className="fixed bottom-5 right-5 z-40 flex animate-pulsering items-center gap-2 rounded-full bg-warm px-5 py-3.5 font-bold text-white shadow-warm transition-transform hover:scale-105 active:scale-95 sm:hidden"
        aria-label="Call The A/C Doctor at (877) 584-3223"
      >
        <Phone className="h-5 w-5" />
        Call Now
      </a>
    </div>
  )
}
