import { useState } from 'react'
import { Menu, X, Camera, MapPin } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#gallery', label: 'Gallery' },
    { href: '#map', label: 'Map' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 shadow-lg">
          <a href="#" className="flex items-center gap-2 text-white font-semibold">
            <div className="p-2 rounded-full bg-white/20"><Camera size={18} /></div>
            StudioShare
          </a>

          <nav className="hidden md:flex items-center gap-6 text-white/90">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-white transition-colors">{n.label}</a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-4 py-2 rounded-full">
              <MapPin size={16} /> Book a Shoot
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(v => !v)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-6xl px-6">
          <div className="mt-2 rounded-2xl bg-slate-900/90 backdrop-blur border border-white/10 text-white p-4 space-y-3">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="block py-2" onClick={() => setOpen(false)}>{n.label}</a>
            ))}
            <a href="#contact" className="block py-2 font-semibold" onClick={() => setOpen(false)}>Book a Shoot</a>
          </div>
        </div>
      )}
    </header>
  )
}
