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

  if (typeof window !== 'undefined') {
    import("https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js").then((module) => {
      module.default.init({
        chatflowid: "8d72884e-e9d1-4023-a684-63cf70054e74",   // ← paste the new one here
        apiHost: "https://unbefitting-fae-improvidently.ngrok-free.dev",
        theme: {
          button: {
            backgroundColor: "#ffd700",
            right: 30,
            bottom: 30,
            size: 68,
            iconColor: "#000",
          },
          chatWindow: {
            welcomeMessage: "Dia dhuit! Welcome to the Brass Door. What can I get ye tonight?",
            backgroundColor: "#1a1a1a",
            textColor: "#ffffff",
            botMessage: {
              backgroundColor: "#2d2d2d",   // dark grey
              textColor: "#ffffff"         // white text – now perfectly readable
            },
            userMessage: {
              backgroundColor: "#ffd700",
              textColor: "#000000"
            },
            poweredByTextColor: "#666"
          }
        }
        })
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-zinc-950 overflow-x-hidden">
      <Navigation />
      <Hero />
      <Cocktails />

      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1600&q=80"
        quote="Where passion meets perfection, one cocktail at a time"
      />

      <CocktailGallery />

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