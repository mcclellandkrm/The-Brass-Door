import { motion } from 'framer-motion'
import { useState } from 'react'

const ContactCard = ({ icon, title, content, delay }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <div className="relative bg-zinc-900/50 border border-zinc-800 p-8 h-full overflow-hidden transition-all duration-500">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-brass/5 to-transparent"
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

        <div className="relative z-10 text-center">
          <motion.div
            className="text-5xl mb-4"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-serif text-brass-light mb-3">{title}</h3>
          <p className="text-zinc-400 leading-relaxed">{content}</p>
        </div>
      </div>
    </motion.div>
  )
}

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-brass-light mb-6 glow-brass">
            Visit Us
          </h2>
          <div className="w-24 h-0.5 bg-brass-light mx-auto mb-6 glow-brass" />
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Find us in the heart of Carlingford, where every visit becomes a cherished memory
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ContactCard
            icon="📍"
            title="Location"
            content="The Brass Door Bar & Restaurant, Carlingford, Co. Louth"
            delay={0}
          />
          <ContactCard
            icon="🕐"
            title="Opening Hours"
            content="Mon-Thu: 4pm - 11pm
Fri-Sat: 12pm - 12:30am
Sun: 12pm - 11pm"
            delay={0.1}
          />
          <ContactCard
            icon="📞"
            title="Reservations"
            content="Call us to book your table or simply drop by for a drink at the bar"
            delay={0.2}
          />
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-2 border-brass/30 p-12 md:p-16 relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-brass/5 via-transparent to-brass/10 opacity-50" />

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-brass-light mb-6">
                Experience The Brass Door
              </h3>
              <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                Whether it's a perfectly crafted cocktail, a hearty meal, or an evening of live music,
                we're here to make your time with us unforgettable.
              </p>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-brass-light text-zinc-950 font-semibold tracking-widest text-sm hover:bg-brass transition-all duration-300"
              >
                MAKE A RESERVATION
              </motion.button>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-brass/20" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-brass/20" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
