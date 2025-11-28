import { motion } from 'framer-motion'
import { useState } from 'react'
import AmbientBackground from './AmbientBackground'

const cocktails = [
  {
    name: 'Mona Lisa',
    ingredients: ['Gin', 'Elderflower Liquor', 'Strawberry', 'Homemade Lemonade'],
    description: 'A masterpiece in a glass, delicate and refined',
    color: 'from-pink-900/20 to-rose-900/20',
    glowColor: 'rgba(244, 114, 182, 0.2)',
  },
  {
    name: 'Jamble',
    ingredients: ['Gin', 'Chambord', 'Homemade Bramble Jam', 'Lemon'],
    description: 'Rich berry flavors meet artisanal craftsmanship',
    color: 'from-purple-900/20 to-violet-900/20',
    glowColor: 'rgba(167, 139, 250, 0.2)',
  },
  {
    name: 'Watermelon Margarita',
    ingredients: ['Tequila', 'Watermelon Liquor', 'Fresh Watermelon', 'Lime', 'Sugar'],
    description: 'Summer in a glass, refreshingly bold',
    color: 'from-green-900/20 to-emerald-900/20',
    glowColor: 'rgba(52, 211, 153, 0.2)',
  },
]

const CocktailCard = ({ cocktail, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-8 transition-all duration-500 h-full">
        {/* Animated background gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${cocktail.color} opacity-0 transition-opacity duration-500`}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0"
          animate={{
            boxShadow: isHovered
              ? `inset 0 0 60px ${cocktail.glowColor}, 0 0 30px ${cocktail.glowColor}`
              : 'none',
          }}
          transition={{ duration: 0.5 }}
        />

        <div className="relative z-10">
          <motion.h3
            className="text-3xl font-serif font-bold text-brass-light mb-4"
            animate={{
              textShadow: isHovered
                ? '0 0 20px rgba(212, 175, 55, 0.5)'
                : '0 0 0px rgba(212, 175, 55, 0)',
            }}
          >
            {cocktail.name}
          </motion.h3>

          <p className="text-zinc-400 italic mb-6 text-sm">{cocktail.description}</p>

          <div className="space-y-2">
            {cocktail.ingredients.map((ingredient, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                className="flex items-center space-x-3"
              >
                <div className="w-1.5 h-1.5 bg-brass-light rounded-full" />
                <span className="text-zinc-300 text-sm">{ingredient}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-brass-light/0 transition-all duration-500"
          animate={{
            borderColor: isHovered ? 'rgba(212, 175, 55, 0.5)' : 'rgba(212, 175, 55, 0)',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-brass-light/0 transition-all duration-500"
          animate={{
            borderColor: isHovered ? 'rgba(212, 175, 55, 0.5)' : 'rgba(212, 175, 55, 0)',
          }}
        />
      </div>
    </motion.div>
  )
}

const Cocktails = () => {
  return (
    <section id="cocktails" className="relative py-24 px-6 bg-black overflow-hidden">
      <AmbientBackground intensity="medium" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-brass-light mb-6 glow-brass">
            Signature Cocktails
          </h2>
          <div className="w-24 h-0.5 bg-brass-light mx-auto mb-6 glow-brass" />
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Handcrafted with passion, served with soul. Each cocktail tells a story of artistry
            and attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cocktails.map((cocktail, index) => (
            <CocktailCard key={cocktail.name} cocktail={cocktail} index={index} />
          ))}
        </div>

        {/* Additional offerings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            {
              icon: '🍺',
              title: 'The Perfect Pint',
              description: 'Guinness poured to perfection',
            },
            {
              icon: '🥃',
              title: 'Whisky Selection',
              description: 'Heartwarming spirits from Ireland and beyond',
            },
            {
              icon: '🍾',
              title: 'Champagne & Wine',
              description: 'Glasses of elegance and celebration',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-zinc-900/50 border border-zinc-800 hover:border-brass/30 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-serif text-brass-light mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Cocktails
