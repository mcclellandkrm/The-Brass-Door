import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

const Hero = () => {
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 500], [0, 75])

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }))

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50"
          style={{
            backgroundImage: 'url(/jamble.jpg)',
            y: backgroundY
          }}
        />

        {/* Animated gradient overlay */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-brass-light/20"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: '100%',
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, -1000],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/30 to-zinc-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-brass-light mb-6 glow-brass-strong">
            The Brass Door
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 tracking-widest mb-4 font-light">
            BAR & RESTAURANT
          </p>
          <div className="w-24 h-0.5 bg-brass-light mx-auto mb-8 glow-brass" />
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Where passion meets hospitality in the heart of Carlingford
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('cocktails').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-transparent border-2 border-brass-light text-brass-light hover:bg-brass-light/10 transition-all duration-300 tracking-widest text-sm font-medium"
          >
            DISCOVER OUR COCKTAILS
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-brass-light/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-brass-light rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
