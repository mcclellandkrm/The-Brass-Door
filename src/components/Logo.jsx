import { motion } from 'framer-motion'

const Logo = ({ variant = 'navigation', className = '' }) => {
  // Navigation variant - horizontal, compact
  if (variant === 'navigation') {
    return (
      <div className={`text-left ${className}`}>
        <div className="flex flex-col leading-none">
          <span className="text-[9px] tracking-[0.35em] text-zinc-400 uppercase font-sans mb-0.5">
            +THE
          </span>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-brass-light glow-brass tracking-[0.02em] mb-0.5">
            BRASS DOOR
          </h1>
          <span className="text-[8px] tracking-[0.3em] text-zinc-400 uppercase font-sans mb-0.5">
            BAR & RESTAURANT
          </span>
          <span className="text-[8px] tracking-[0.5em] text-zinc-500 uppercase font-sans">
            CARLINGFORD
          </span>
        </div>
      </div>
    )
  }

  // Hero variant - large, centered
  if (variant === 'hero') {
    return (
      <div className={`text-center ${className}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center leading-none"
        >
          <span className="block text-lg md:text-xl tracking-[0.4em] text-zinc-300 uppercase font-sans mb-4">
            +THE
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-brass-light glow-brass-strong tracking-[0.05em] mb-4">
            BRASS DOOR
          </h1>
          <span className="block text-sm md:text-lg tracking-[0.3em] text-zinc-300 uppercase font-sans mb-3">
            BAR & RESTAURANT
          </span>
          <span className="block text-base md:text-xl tracking-[0.6em] text-zinc-400 uppercase font-sans">
            CARLINGFORD
          </span>
        </motion.div>
      </div>
    )
  }

  // Square variant - for favicon, social media
  if (variant === 'square') {
    return (
      <div className={`bg-black flex items-center justify-center p-8 ${className}`}>
        <div className="text-center">
          <div className="relative">
            {/* Decorative corners */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-brass-light/50" />
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-brass-light/50" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-brass-light/50" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-brass-light/50" />

            <div className="px-6 py-4">
              <span className="block text-[8px] tracking-[0.4em] text-zinc-500 uppercase font-sans">
                The
              </span>
              <h1 className="text-2xl font-serif font-bold text-brass-light glow-brass leading-tight">
                Brass<br />Door
              </h1>
              <span className="block text-[7px] tracking-[0.5em] text-zinc-400 uppercase font-sans mt-1">
                Carlingford
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Minimal variant - just text, no decorations
  if (variant === 'minimal') {
    return (
      <div className={`${className}`}>
        <span className="text-2xl font-serif font-bold text-brass-light">
          The Brass Door
        </span>
      </div>
    )
  }

  // Footer variant
  if (variant === 'footer') {
    return (
      <div className={`${className}`}>
        <div className="flex flex-col leading-none">
          <span className="block text-[9px] tracking-[0.35em] text-zinc-600 uppercase font-sans mb-1">
            +THE
          </span>
          <h2 className="text-2xl font-serif font-bold text-brass-light glow-brass tracking-[0.02em] mb-1">
            BRASS DOOR
          </h2>
          <span className="block text-[7px] tracking-[0.3em] text-zinc-600 uppercase font-sans mb-0.5">
            BAR & RESTAURANT
          </span>
          <span className="block text-[7px] tracking-[0.5em] text-zinc-700 uppercase font-sans">
            CARLINGFORD
          </span>
        </div>
      </div>
    )
  }
}

export default Logo
