import { usePlayer } from '../context/PlayerContext.jsx'

export default function TrackCard({ track }) {
  const { play } = usePlayer()

  return (
    <button
      onClick={() => play(track)}
      className="group flex items-center gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-3 text-left transition hover:bg-neutral-900"
    >
      <img src={track.cover} alt={track.title} className="h-16 w-16 rounded-xl object-cover" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm text-neutral-400">{track.artist}</p>
        <h4 className="truncate text-base font-semibold">{track.title}</h4>
        <p className="truncate text-xs text-neutral-500">{track.album} • {track.duration}</p>
      </div>
      <span className="rounded-xl bg-neutral-800 px-3 py-1 text-xs text-neutral-300 transition group-hover:bg-brand-500 group-hover:text-black">Play</span>
    </button>
  )
}
