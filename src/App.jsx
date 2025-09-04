import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import PlayerBar from './components/PlayerBar.jsx'
import Home from './pages/Home.jsx'
import Browse from './pages/Browse.jsx'
import Library from './pages/Library.jsx'
import Signup from './pages/Signup.jsx'
import { PlayerProvider } from './context/PlayerContext.jsx'

export default function App() {
  return (
    <PlayerProvider>
      <div className="flex min-h-screen flex-col pb-[var(--player-height)]">
        <NavBar />
        <main className="flex-1 container-padded py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/library" element={<Library />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <PlayerBar />
      </div>
    </PlayerProvider>
  )
}
