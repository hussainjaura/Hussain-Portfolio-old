import { useEffect, useState } from 'react'
import { profile } from '../data.js'
import { MenuIcon, CloseIcon } from './Icons.jsx'

const links = ['about', 'experience', 'projects', 'skills', 'education', 'contact']

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // add a shadow to the nav once u scroll down a bit
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <a href="#top" className="logo">HJ<span>.</span></a>
      <nav className={`nav-links ${open ? 'open' : ''}`}>
        {links.map((l, i) => (
          <a key={l} href={`#${l}`} onClick={() => setOpen(false)}>
            <span className="mono">0{i + 1}.</span> {l}
          </a>
        ))}
        {profile.cv ? (
          <a className="btn btn-outline" href={`${import.meta.env.BASE_URL}${profile.cv}`} target="_blank" rel="noreferrer">Resume</a>
        ) : (
          <a className="btn btn-outline" href="#contact" onClick={() => setOpen(false)}>Resume</a>
        )}
      </nav>
      <button className="menu-btn" aria-label="toggle menu" onClick={() => setOpen(!open)}>
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>
    </header>
  )
}
