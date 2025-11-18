import Hero from './components/Hero'
import Gallery from './components/Gallery'
import MapSection from './components/MapSection'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Gallery />
      <MapSection />

      <footer className="py-12 border-t border-white/10 bg-slate-950/80">
        <div className="max-w-6xl mx-auto px-6 text-white/70 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} StudioShare — Share your photos and work</p>
          <a href="/test" className="hover:text-white">System status</a>
        </div>
      </footer>
    </div>
  )
}

export default App
