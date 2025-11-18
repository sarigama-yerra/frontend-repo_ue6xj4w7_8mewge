import { useEffect, useRef } from 'react'
import { MapPin } from 'lucide-react'

// Simple map using Leaflet via CDN inside an iframe-like container
// We avoid adding new npm packages by loading Leaflet from unpkg in an HTML blob

export default function MapSection() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>
          <style>
            html, body, #map { height: 100%; margin: 0; }
            .leaflet-control-attribution { display: none; }
          </style>
        </head>
        <body>
          <div id="map"></div>
          <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
          <script>
            const map = L.map('map').setView([37.7749, -122.4194], 11);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              maxZoom: 19,
              attribution: '© OpenStreetMap'
            }).addTo(map);
            const marker = L.marker([37.7749, -122.4194]).addTo(map);
            marker.bindPopup('Your location or shoot spot').openPopup();
          </script>
        </body>
      </html>
    `

    const blob = new Blob([html], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    ref.current.src = url

    return () => URL.revokeObjectURL(url)
  }, [])

  return (
    <section id="map" className="relative py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-white/10 backdrop-blur border border-white/10 text-white"><MapPin size={20} /></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Find the Spot</h2>
        </div>
        <p className="text-white/70 mb-6 max-w-2xl">Explore locations tied to your shoots. Zoom, pan, and get a feel for the area.</p>

        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <iframe ref={ref} title="map" className="w-full h-[420px] md:h-[520px]" />
        </div>
      </div>
    </section>
  )
}
