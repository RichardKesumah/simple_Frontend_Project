import Navbar from './components/navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#e5e5e5] overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
