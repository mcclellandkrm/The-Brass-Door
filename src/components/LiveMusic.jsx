import { motion } from 'framer-motion'
import { useState } from 'react'

const LiveMusic = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="music" className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-brass rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brass rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-brass-light mb-6 glow-brass">
            Live Music
          </h2>
          <div className="w-24 h-0.5 bg-brass-light mx-auto mb-6 glow-brass" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-12 md:p-16 overflow-hidden">
            {/* Animated glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-brass/10 via-transparent to-brass/5"
              animate={{
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
            />

            <motion.div
              className="absolute inset-0"
              animate={{
                boxShadow: isHovered
                  ? 'inset 0 0 80px rgba(212, 175, 55, 0.15), 0 0 40px rgba(212, 175, 55, 0.1)'
                  : 'none',
              }}
              transition={{ duration: 0.5 }}
            />

            <div className="relative z-10 text-center">
              {/* Musical note animation */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-7xl md:text-8xl mb-8 inline-block"
              >
                🎵
              </motion.div>

              <h3 className="text-4xl md:text-5xl font-serif font-bold text-brass-light mb-6">
                Every Friday Night
              </h3>

              <p className="text-xl md:text-2xl text-zinc-300 mb-8 leading-relaxed">
                The sounds of live music fill the air as our talented musicians
                create the perfect backdrop to your evening
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[
                  { icon: '🎸', text: 'Acoustic Sessions' },
                  { icon: '🎤', text: 'Local Talent' },
                  { icon: '🎹', text: 'Intimate Performances' },
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center p-6 bg-zinc-900/50 border border-zinc-800"
                  >
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <p className="text-zinc-300">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-12 text-zinc-500 italic"
              >
                "Where melodies meet memories in the glow of candlelight"
              </motion.p>
            </div>

            {/* Decorative corners */}
            <motion.div
              className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2"
              animate={{
                borderColor: isHovered
                  ? 'rgba(212, 175, 55, 0.5)'
                  : 'rgba(212, 175, 55, 0.2)',
              }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2"
              animate={{
                borderColor: isHovered
                  ? 'rgba(212, 175, 55, 0.5)'
                  : 'rgba(212, 175, 55, 0.2)',
              }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2"
              animate={{
                borderColor: isHovered
                  ? 'rgba(212, 175, 55, 0.5)'
                  : 'rgba(212, 175, 55, 0.2)',
              }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2"
              animate={{
                borderColor: isHovered
                  ? 'rgba(212, 175, 55, 0.5)'
                  : 'rgba(212, 175, 55, 0.2)',
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LiveMusic
