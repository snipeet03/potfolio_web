import { useEffect, useRef, useState } from 'react'
import { ROLES, BADGES } from '../lib/constants'

/* Typed text — exactly as in original HTML */
function useTyped(roles) {
  const [text, setText] = useState('')
  const ri  = useRef(0)
  const ci  = useRef(0)
  const del = useRef(false)

  useEffect(() => {
    let timer
    function tick() {
      const cur = roles[ri.current]
      if (!del.current) {
        setText(cur.slice(0, ++ci.current))
        if (ci.current === cur.length) {
          timer = setTimeout(() => { del.current = true; tick() }, 2000)
          return
        }
      } else {
        setText(cur.slice(0, --ci.current))
        if (ci.current === 0) {
          del.current = false
          ri.current = (ri.current + 1) % roles.length
        }
      }
      timer = setTimeout(tick, del.current ? 50 : 90)
    }
    timer = setTimeout(tick, 90)
    return () => clearTimeout(timer)
  }, [])

  return text
}

/* Count-up — exactly as in original HTML */
function CountUp({ target, suffix = '+', style }) {
  const [n, setN]   = useState(0)
  const ref         = useRef(null)

  useEffect(() => {
    if (!target) return
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      obs.disconnect()
      let count = 0
      const step = Math.ceil(target / 40)
      const iv = setInterval(() => {
        count = Math.min(count + step, target)
        setN(count)
        if (count >= target) clearInterval(iv)
      }, 35)
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  return <span ref={ref} style={style}>{n}{suffix}</span>
}

const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function HeroSection() {
  const typed = useTyped(ROLES)

  return (
    <section id="hero">
      {/* Badges — fadeUp d1 */}
      <div className="badges-row anim-up d1">
        {BADGES.map((b, i) => (
          <div key={i} className="badge">
            <div className="badge-medal">{b.icon}</div>
            <div>
              <div className="badge-label">{b.cat}</div>
              <div className="badge-value">{b.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Typed role — fadeUp d2 */}
      <div className="typed-wrapper anim-up d2">
        <span style={{ color: 'var(--muted2)' }}>$ </span>
        <span className="typed-text">{typed}</span>
        <span className="cursor blink">█</span>
      </div>

      {/* Title — fadeUp d3 */}
      <h1 className="hero-title anim-up d3">
        Navneet <span className="yellow">Lonare</span>
      </h1>

      {/* Sub — fadeUp d4 */}
      <p className="hero-sub anim-up d4">
        Building scalable backend systems and AI-powered applications.<br />
        Open to full-time roles and exciting projects.
      </p>

      {/* Buttons — fadeUp d5 */}
      <div className="hero-btns anim-up d5">
        <button className="btn-primary" onClick={() => scrollTo('projects')}>
          <span>▶</span> View Projects
        </button>
        <button className="btn-outline" onClick={() => scrollTo('contact')}>
          <span>✉</span> Get in Touch
        </button>
        <a href="#" className="btn-outline">
          <span>↓</span> Download Resume
        </a>
      </div>

      {/* Trusted — fadeUp d6 */}
      <p className="hero-trusted anim-up d6">
        Based in <strong>Nagpur, India 🇮🇳</strong> · Available for opportunities
      </p>

      {/* Stats — fadeUp, delay .65s — count-up on scroll into view */}
      <div className="stats-grid anim-up" style={{ animationDelay: '.65s', maxWidth: 760, width: '100%' }}>
        <div className="stat-cell">
          <div className="stat-num"><CountUp target={4} /></div>
          <div className="stat-label">Projects Built</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num"><CountUp target={150} /></div>
          <div className="stat-label">DSA Problems</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num"><CountUp target={20} /></div>
          <div className="stat-label">Hackathons</div>
        </div>
        <div className="stat-cell" style={{ borderRight: 'none' }}>
          <div className="stat-num" style={{ fontSize: '1.5rem' }}>Top&nbsp;51</div>
          <div className="stat-label">IIT Bombay</div>
        </div>
      </div>
    </section>
  )
}
