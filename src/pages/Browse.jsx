import Section from '../components/Section.jsx'
import TrackCard from '../components/TrackCard.jsx'
import { tracks } from '../data/tracks.js'

export default function Browse() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Explorar</h1>
      <Section title="Todo el catálogo">
        {tracks.map(t => <TrackCard key={t.id} track={t} />)}
      </Section>
    </div>
  )
}
