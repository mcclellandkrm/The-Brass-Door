import { motion } from 'framer-motion'
import { useState } from 'react'
import AmbientBackground from './AmbientBackground'

const features = [
  {
    title: 'Open Stone & Brickwork',
    description: 'Authentic character with exposed textures that tell stories of tradition',
    icon: '🧱',
  },
  {
    title: 'Brass Bar Top',
    description: 'Gleaming surfaces that reflect the warmth of shared moments',
    icon: '✨',
  },
  {
    title: 'Wood Burning Fire',
    description: 'Crackling warmth in the corner, creating an inviting sanctuary',
    icon: '🔥',
  },
  {
    title: 'Candlelit Ambiance',
    description: 'Soft flickering light dancing across intimate conversations',
    icon: '🕯️',
  },
  {
    title: 'Friendly Bar Staff',
    description: 'Passionate hospitality from people who genuinely care',
    icon: '🤝',
  },
  {
    title: 'Great Food',
    description: 'Culinary excellence crafted with attention to every detail',
    icon: '🍽️',
  },
]

const FeatureCard = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="relative overflow-hidden bg-zinc-900/50 border border-zinc-800 p-8 h-full transition-all duration-500">
        {/* Hover glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-brass/5 to-transparent opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className="absolute inset-0"
          animate={{
            boxShadow: isHovered
              ? 'inset 0 0 40px rgba(212, 175, 55, 0.1)'
              : 'none',
          }}
          transition={{ duration: 0.5 }}
        />

        <div className="relative z-10">
          <motion.div
            className="text-5xl mb-4"
            animate={{
              scale: isHovered ? 1.1 : 1,
              filter: isHovered ? 'brightness(1.3)' : 'brightness(1)',
            }}
            transition={{ duration: 0.3 }}
          >
            {feature.icon}
          </motion.div>

          <h3 className="text-xl font-serif font-semibold text-brass-light mb-3">
            {feature.title}
          </h3>

          <p className="text-zinc-400 text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>

        {/* Decorative corner */}
        <motion.div
          className="absolute bottom-0 right-0 w-16 h-16"
          animate={{
            borderBottom: isHovered ? '2px solid rgba(212, 175, 55, 0.3)' : '2px solid transparent',
            borderRight: isHovered ? '2px solid rgba(212, 175, 55, 0.3)' : '2px solid transparent',
          }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  )
}

const Atmosphere = () => {
  return (
    <section id="atmosphere" className="relative py-24 px-6 bg-gradient-to-b from-black to-zinc-950 overflow-hidden">
      <AmbientBackground intensity="low" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-brass-light mb-6 glow-brass">
            The Experience
          </h2>
          <div className="w-24 h-0.5 bg-brass-light mx-auto mb-6 glow-brass" />
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Step into a world where every detail matters. From the warmth of our wood-burning fire
            to the gleam of our brass bar top, we've crafted an atmosphere that feels like home —
            intimate, welcoming, and alive with character.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative"
        >
          <div className="relative bg-zinc-900/30 border-l-2 border-r-2 border-brass/30 p-12">
            <div className="absolute top-0 left-0 text-6xl text-brass/20 font-serif leading-none">
              "
            </div>
            <p className="text-2xl md:text-3xl font-serif text-zinc-300 italic leading-relaxed">
              Passion for hospitality,
              <br />
              <span className="text-brass-light">attention to every detail</span>
            </p>
            <div className="absolute bottom-0 right-0 text-6xl text-brass/20 font-serif leading-none">
              "
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Atmosphere
