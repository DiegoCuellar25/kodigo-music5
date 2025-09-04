import { createContext, useContext, useMemo, useState } from 'react'
import { tracks } from '../data/tracks.js'

const PlayerCtx = createContext(null)

export function PlayerProvider({ children }) {
  const [queue, setQueue] = useState(tracks)
  const [index, setIndex] = useState(0)
  const [isPlaying, setPlaying] = useState(false)

  const current = queue[index] ?? null

  const play = (t) => {
    const i = queue.findIndex(x => x.id === t.id)
    if (i >= 0) setIndex(i)
    setPlaying(true)
  }
  const togglePlay = () => setPlaying(p => !p)
  const next = () => setIndex(i => (i + 1) % queue.length)
  const prev = () => setIndex(i => (i - 1 + queue.length) % queue.length)

  const value = useMemo(() => ({
    queue, setQueue, index, setIndex, isPlaying, setPlaying, current, play, togglePlay, next, prev
  }), [queue, index, isPlaying, current])

  return <PlayerCtx.Provider value={value}>{children}</PlayerCtx.Provider>
}

export const usePlayer = () => useContext(PlayerCtx)
