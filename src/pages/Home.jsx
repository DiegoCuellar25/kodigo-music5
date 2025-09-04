import Section from '../components/Section.jsx'
import TrackCard from '../components/TrackCard.jsx'
import { tracks, trending, forYou } from '../data/tracks.js'

export default function Home() {
  return (
    <div>
      <div className="mb-8 rounded-2xl bg-gradient-to-br from-brand-500/10 to-neutral-800 p-6">
        <h1 className="mb-2 text-2xl font-extrabold">Bienvenido a Kodigo Music</h1>
        <p className="max-w-2xl text-neutral-300">
          Explora, guarda y reproduce tu música favorita. Inspirado en Spotify, Deezer y Apple Music.
        </p>
      </div>

      <Section title="Tendencias" subtitle="Lo que suena ahora">
        {trending.map(t => <TrackCard key={t.id} track={t} />)}
      </Section>

      <Section title="Para ti" subtitle="Basado en tus gustos">
        {forYou.map(t => <TrackCard key={t.id} track={t} />)}
      </Section>

      <Section title="Todo" subtitle="Catálogo demo">
        {tracks.map(t => <TrackCard key={t.id} track={t} />)}
      </Section>
    </div>
  )
}
