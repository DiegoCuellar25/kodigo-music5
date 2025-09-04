import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  const linkCls = ({ isActive }) =>
    `px-3 py-2 rounded-xl text-sm transition hover:bg-neutral-800 ${isActive ? 'bg-neutral-800 text-white' : 'text-neutral-300'}`

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/70 backdrop-blur">
      <div className="container-padded flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-3 w-3 rounded-sm bg-brand-500" />
          <span>Kodigo Music</span>
        </Link>

        <nav className="flex items-center gap-1">
          <NavLink to="/" className={linkCls} end>Inicio</NavLink>
          <NavLink to="/browse" className={linkCls}>Explorar</NavLink>
          <NavLink to="/library" className={linkCls}>Tu Biblioteca</NavLink>
          <NavLink to="/signup" className={linkCls}>Registro</NavLink>
        </nav>
      </div>
    </header>
  )
}
