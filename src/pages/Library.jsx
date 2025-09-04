import { useState } from 'react'
import Section from '../components/Section.jsx'
import TrackCard from '../components/TrackCard.jsx'
import { tracks } from '../data/tracks.js'

export default function Library() {
  const [favorites, setFavorites] = useState([])

  const toggleFav = (t) => {
    setFavorites(prev => prev.some(x => x.id === t.id) ? prev.filter(x => x.id !== t.id) : [...prev, t])
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Tu biblioteca</h1>
      <p className="mb-4 text-sm text-neutral-400">Haz clic en una tarjeta para reproducir. Usa el botón para agregar a favoritos.</p>

      <Section title="Canciones">
        {tracks.map(t => (
          <div key={t.id} className="relative">
            <TrackCard track={t} />
            <button onClick={() => toggleFav(t)} className="absolute right-3 top-3 rounded-lg border border-neutral-700 bg-neutral-900/70 px-2 py-1 text-xs hover:bg-neutral-800">
              {favorites.some(x => x.id === t.id) ? '★ Favorito' : '☆ Agregar'}
            </button>
          </div>
        ))}
      </Section>

      <Section title="Tus favoritos">
        {favorites.length === 0 ? <p className="text-neutral-400">Aún no tienes favoritos.</p> :
          favorites.map(t => <TrackCard key={t.id} track={t} />)
        }
      </Section>
    </div>
  )
}
