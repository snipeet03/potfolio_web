import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../lib/constants'

const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const GhIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

export default function Navbar() {
  const [active, setActive] = useState('')
  const [open,   setOpen]   = useState(false)

  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.toLowerCase())
    const onScroll = () => {
      const sy = window.scrollY + 90
      ids.forEach(id => {
        const el = document.getElementById(id)
        if (el && sy >= el.offsetTop && sy < el.offsetTop + el.offsetHeight) setActive(id)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav>
        <div className="nav-inner">
          <a href="#hero" onClick={e => { e.preventDefault(); scrollTo('hero') }} className="nav-logo">
            <div className="nav-logo-box">NL</div>
            <span>Navneet Lonare</span>
          </a>

          <div className="nav-links">
            {NAV_LINKS.map(l => (
              <button
                key={l}
                className={`nav-link${active === l.toLowerCase() ? ' active' : ''}`}
                onClick={() => { scrollTo(l.toLowerCase()); setOpen(false) }}
              >{l}</button>
            ))}
          </div>

          <div className="nav-right">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="nav-github">
              <GhIcon /> 16.4k ★
            </a>
            <button className="btn-nav-hire" onClick={() => scrollTo('contact')}>Hire Me →</button>
            <button
              onClick={() => setOpen(o => !o)}
              style={{ display:'none', background:'transparent', border:'1px solid var(--border2)', color:'var(--yellow)', padding:'6px 10px', borderRadius:4, fontSize:16 }}
              className="nav-ham"
            >☰</button>
          </div>
        </div>
      </nav>

      {open && (
        <div style={{ position:'fixed', top:60, left:0, right:0, background:'var(--bg2)', borderBottom:'1px solid var(--border)', padding:'14px 20px', zIndex:999 }}>
          {NAV_LINKS.map(l => (
            <button key={l} onClick={() => { scrollTo(l.toLowerCase()); setOpen(false) }}
              style={{ display:'block', width:'100%', textAlign:'left', background:'none', border:'none', borderBottom:'1px solid var(--border)', color:'var(--text)', fontFamily:'var(--mono)', fontSize:15, padding:'12px 0' }}
            >{l}</button>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width:768px){
          .nav-ham{ display:block!important; }
        }
      `}</style>
    </>
  )
}
