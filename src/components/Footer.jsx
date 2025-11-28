import { motion } from 'framer-motion'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <Logo variant="footer" className="mb-4" />
            <p className="text-zinc-500 text-sm leading-relaxed">
              A haven of hospitality in Carlingford, where every detail is crafted with passion
              and every guest becomes family.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif text-brass-light mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Cocktails', 'Atmosphere', 'Live Music', 'Contact'].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    whileHover={{ x: 5, color: '#D4AF37' }}
                    className="text-zinc-400 hover:text-brass-light transition-colors duration-300 text-sm"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-serif text-brass-light mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {['Facebook', 'Instagram'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, color: '#D4AF37' }}
                  className="text-zinc-400 hover:text-brass-light transition-colors duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-10 h-10 border border-zinc-700 hover:border-brass-light flex items-center justify-center transition-colors duration-300">
                    {social === 'Facebook' ? 'f' : 'i'}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-900 text-center">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} The Brass Door Bar & Restaurant. All rights reserved.
          </p>
          <p className="text-zinc-700 text-xs mt-2">
            Crafted with passion in Carlingford
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
