import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import brandLogo from '../assets/logo-text.png'

const links = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="nav-inner">
        <button className="hamburger" aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls="primary-navigation" type="button" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <a className="brand" href="#home"><img src={brandLogo} alt="Dev Stack" /></a>
        <nav id="primary-navigation" className={menuOpen ? 'open' : ''}>
          {links.map((link) => <a key={link} className={link === 'Home' ? 'active' : ''} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{link}</a>)}
        </nav>
        <div className="auth"><button type="button" className="sign-in">Sign In</button><button type="button" className="sign-up">Sign Up</button></div>
      </div>
    </header>
  )
}
