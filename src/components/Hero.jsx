import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient glass overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-[0_8px_30px_rgba(59,130,246,0.45)]"
        >
          Your Visual Playground
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/80"
        >
          Share photos, showcase projects, and explore locations — all in a vibrant, interactive space.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 flex items-center gap-4"
        >
          <a href="#gallery" className="inline-flex items-center rounded-full bg-white/90 hover:bg-white text-slate-900 font-semibold px-6 py-3 transition-colors shadow-lg">
            Explore Gallery
          </a>
          <a href="#map" className="inline-flex items-center rounded-full bg-slate-900/60 hover:bg-slate-900 text-white font-semibold px-6 py-3 transition-colors backdrop-blur-md border border-white/15">
            See Map
          </a>
        </motion.div>
      </div>
    </section>
  )
}
