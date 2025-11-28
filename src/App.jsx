import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
import ParallaxSection from './components/ParallaxSection'
import CocktailGallery from './components/CocktailGallery'
import Atmosphere from './components/Atmosphere'
import LiveMusic from './components/LiveMusic'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-zinc-950 overflow-x-hidden">
      <Navigation />
      <Hero />
      <Cocktails />

      {/* Parallax divider - Replace with your own atmospheric image */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1600&q=80"
        quote="Where passion meets perfection, one cocktail at a time"
      />

      <CocktailGallery />

      {/* Parallax divider - Replace with image of your bar interior */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1600&q=80"
        quote="Stone, brass, and firelight — crafted for comfort"
        height="h-[50vh]"
      />

      <Atmosphere />
      <LiveMusic />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
