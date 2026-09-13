import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  'about',
  'work',
  'experience',
  'certificates',
  'resume',
  'skills',
  'contact',
]

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <header className="nav-wrap">
      <a href="#home" className="logo" aria-label="Gokul S home">
        G<span>.</span>S
      </a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {links.map((item) => (
          <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>
            {item}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="#contact">
        Let&apos;s talk <ArrowUpRight size={15} />
      </a>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  )
}
