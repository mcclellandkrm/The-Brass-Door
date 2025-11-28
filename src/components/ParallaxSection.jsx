import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ParallaxSection = ({ imageUrl, quote, author, height = 'h-[60vh]' }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className={`relative ${height} overflow-hidden`}>
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageUrl})`,
            filter: 'brightness(0.3) contrast(1.1)',
          }}
        />
      </motion.div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/50 via-transparent to-zinc-950/50" />

      {/* Content */}
      {quote && (
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="max-w-4xl text-center">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-12 border-l-2 border-r-2 border-brass/20" />

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <p className="text-3xl md:text-5xl font-serif text-zinc-200 italic leading-relaxed mb-6">
                  "{quote}"
                </p>
                {author && (
                  <p className="text-brass-light text-lg tracking-widest">— {author}</p>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Atmospheric particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brass-light rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default ParallaxSection
