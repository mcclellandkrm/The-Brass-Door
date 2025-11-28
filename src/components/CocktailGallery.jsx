import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'

// Your actual cocktail photos from The Brass Door
const cocktailImages = [
  {
    id: 1,
    title: 'Signature Cocktail',
    description: 'Handcrafted with passion',
    placeholder: '/cocktail1.jpg',
  },
  {
    id: 2,
    title: 'Jamble',
    description: 'Gin, Chambord, bramble jam',
    placeholder: '/jamble.jpg',
  },
  {
    id: 3,
    title: 'Watermelon Margarita',
    description: 'Tequila, watermelon, lime',
    placeholder: '/watermelon.jpg',
  },
  {
    id: 4,
    title: 'Perfect Pint',
    description: 'Guinness poured to perfection',
    placeholder: '/guinness.jpg',
  },
  {
    id: 5,
    title: 'Jamble',
    description: 'Gin, Chambord, bramble jam',
    placeholder: '/jamble.jpg',
  },
  {
    id: 6,
    title: 'Watermelon Margarita',
    description: 'Tequila, watermelon, lime',
    placeholder: '/watermelon.jpg',
  },
]

const GalleryImage = ({ image, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative aspect-square overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image.placeholder})`,
        }}
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950/90"
        animate={{
          opacity: isHovered ? 1 : 0.7,
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          boxShadow: isHovered
            ? 'inset 0 0 80px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.2)'
            : 'none',
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <motion.div
          animate={{
            y: isHovered ? 0 : 10,
            opacity: isHovered ? 1 : 0.9,
          }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-serif font-bold text-brass-light mb-2 glow-brass">
            {image.title}
          </h3>
          <p className="text-zinc-300 text-sm">{image.description}</p>
        </motion.div>
      </div>

      {/* Corner accents */}
      <motion.div
        className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2"
        animate={{
          borderColor: isHovered ? 'rgba(212, 175, 55, 0.8)' : 'rgba(212, 175, 55, 0)',
        }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2"
        animate={{
          borderColor: isHovered ? 'rgba(212, 175, 55, 0.8)' : 'rgba(212, 175, 55, 0)',
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  )
}

const CocktailGallery = () => {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-brass-light mb-6 glow-brass">
            Moments & Memories
          </h2>
          <div className="w-24 h-0.5 bg-brass-light mx-auto mb-6 glow-brass" />
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Every pour, every sip, every conversation captured in the warm glow of The Brass Door
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cocktailImages.map((image, index) => (
            <GalleryImage key={image.id} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CocktailGallery
