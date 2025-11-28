import { motion } from 'framer-motion'

const AmbientBackground = ({ intensity = 'medium' }) => {
  const intensityMap = {
    low: { particles: 10, glowOpacity: 0.02, blurAmount: 100 },
    medium: { particles: 15, glowOpacity: 0.04, blurAmount: 120 },
    high: { particles: 25, glowOpacity: 0.06, blurAmount: 150 },
  }

  const settings = intensityMap[intensity]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Ambient glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 rounded-full bg-brass/10"
        style={{
          width: settings.blurAmount,
          height: settings.blurAmount,
          filter: `blur(${settings.blurAmount}px)`,
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.8, 1],
          opacity: [settings.glowOpacity, settings.glowOpacity * 1.5, settings.glowOpacity],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 rounded-full bg-brass/10"
        style={{
          width: settings.blurAmount * 1.2,
          height: settings.blurAmount * 1.2,
          filter: `blur(${settings.blurAmount * 1.2}px)`,
        }}
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 50, -100, 0],
          scale: [1, 0.8, 1.3, 1],
          opacity: [settings.glowOpacity, settings.glowOpacity * 1.3, settings.glowOpacity],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating particles */}
      {[...Array(settings.particles)].map((_, i) => {
        const randomX = Math.random() * 100
        const randomDelay = Math.random() * 5
        const randomDuration = 15 + Math.random() * 15
        const randomSize = 1 + Math.random() * 2

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brass-light"
            style={{
              width: randomSize,
              height: randomSize,
              left: `${randomX}%`,
              top: '100%',
              opacity: 0.1,
              filter: 'blur(1px)',
            }}
            animate={{
              y: ['0vh', '-100vh'],
              opacity: [0, 0.3, 0],
              x: [0, Math.sin(i) * 50, 0],
            }}
            transition={{
              duration: randomDuration,
              delay: randomDelay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        )
      })}

      {/* Subtle vignette effect */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)',
        }}
      />
    </div>
  )
}

export default AmbientBackground
