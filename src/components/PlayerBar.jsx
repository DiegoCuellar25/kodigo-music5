import { usePlayer } from '../context/PlayerContext.jsx'

export default function PlayerBar() {
  const { current, isPlaying, togglePlay, next, prev } = usePlayer()

  return (
    <footer className="fixed bottom-0 inset-x-0 h-[var(--player-height)] border-t border-neutral-800 bg-neutral-950/90 backdrop-blur">
      <div className="container-padded h-full flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm text-neutral-300">Reproduciendo</p>
          <h3 className="truncate font-medium">{current?.title ?? 'Selecciona una canción'}</h3>
          <p className="truncate text-sm text-neutral-400">{current?.artist ?? ''}</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={prev} className="rounded-xl border border-neutral-700 px-3 py-2 text-sm hover:bg-neutral-800">◀</button>
          <button onClick={togglePlay} className="rounded-xl bg-brand-500 px-4 py-2 font-semibold text-black hover:bg-brand-600">
            {isPlaying ? 'Pausa' : 'Reproducir'}
          </button>
          <button onClick={next} className="rounded-xl border border-neutral-700 px-3 py-2 text-sm hover:bg-neutral-800">▶</button>
        </div>
      </div>
    </footer>
  )
}
