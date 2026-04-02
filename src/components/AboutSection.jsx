import { useEffect, useRef } from 'react'
import { MARQUEE_SKILLS } from '../lib/constants'

/* Marquee — exactly as in original HTML */
function Marquee() {
  const doubled = [...MARQUEE_SKILLS, ...MARQUEE_SKILLS]
  // Double again for seamless loop (same as original: items + items)
  const all = [...doubled, ...doubled]

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {all.map((s, i) => (
          <div key={i} className="marquee-item">
            <div className="marquee-dot" />
            {s}
          </div>
        ))}
      </div>
    </div>
  )
}

/* Reveal hook — IntersectionObserver adds .visible (same as original) */
function useReveal(selector = '.reveal') {
  useEffect(() => {
    const els = document.querySelectorAll(selector)
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

export default function AboutSection() {
  useReveal()

  return (
    <>
      <Marquee />

      <section id="about" className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="about-grid">

            {/* Left */}
            <div className="reveal">
              <div className="section-label">About</div>
              <h2 className="section-title">Who I <span className="yellow">Am</span></h2>
              <div className="yellow-bar" />
              <p className="about-text">
                I'm a passionate Full Stack Developer from Nagpur, India with a strong foundation in backend systems, database architecture, and AI-powered applications.
              </p>
              <p className="about-text">
                I love turning complex engineering problems into elegant, maintainable code — from RESTful APIs and real-time dashboards to LLM-powered tools. Currently focused on the intersection of web tech and Generative AI.
              </p>
              <div style={{ marginTop: 24 }}>
                {[
                  { k: '📍 Location', v: 'Nagpur, Maharashtra, India' },
                  { k: '🎓 College',  v: 'GHRCEMN — Comp. Engg.'     },
                  { k: '💼 Status',   v: 'Open to Opportunities'      },
                  { k: '👑 Club',     v: 'President, Coding Club'     },
                  { k: '📜 Cert',     v: '100xDevs Full Stack'        },
                ].map(f => (
                  <div key={f.k} className="fact-row">
                    <span className="fact-key">{f.k}</span>
                    <span className="fact-val">{f.v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="reveal reveal-d2">
              <div className="terminal" style={{ marginBottom: 16 }}>
                <div className="terminal-bar">
                  <div className="t-dot t-red" /><div className="t-dot t-yellow" /><div className="t-dot t-green" />
                  <span className="terminal-filename">experience.json</span>
                </div>
                <div className="terminal-body">
                  <span className="t-brace">{'{'}</span><br />
                  &nbsp;&nbsp;<span className="t-key">"role"</span>: <span className="t-str">"Python / Backend Intern"</span>,<br />
                  &nbsp;&nbsp;<span className="t-key">"company"</span>: <span className="t-str">"Bosch Limited, Nashik"</span>,<br />
                  &nbsp;&nbsp;<span className="t-key">"period"</span>: <span className="t-str">"June 2025 – Nov 2025"</span>,<br />
                  &nbsp;&nbsp;<span className="t-key">"stack"</span>: [<span className="t-str">"Django"</span>, <span className="t-str">"Python"</span>],<br />
                  &nbsp;&nbsp;<span className="t-key">"built"</span>: [<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="t-str">"Inventory &amp; Assembly Mgmt System"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="t-str">"Real-time manufacturing dashboards"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="t-str">"Machine performance tracking"</span><br />
                  &nbsp;&nbsp;]<br />
                  <span className="t-brace">{'}'}</span>
                </div>
              </div>

              {/* Bosch badge */}
              <div style={{ display:'flex', alignItems:'center', gap:14, background:'var(--bg2)', border:'1px solid var(--border)', borderRadius:8, padding:'16px 20px' }}>
                <div style={{ width:44, height:44, background:'#c00', borderRadius:6, display:'flex', alignItems:'center', justifyContent:'center', fontSize:12, fontWeight:900, color:'#fff', flexShrink:0 }}>BSH</div>
                <div>
                  <div style={{ fontWeight:700, fontSize:15, marginBottom:3 }}>Bosch Limited</div>
                  <div style={{ fontSize:11, color:'var(--muted2)' }}>Backend Developer Intern · 2025</div>
                </div>
                <div style={{ marginLeft:'auto', background:'rgba(212,247,0,.1)', border:'1px solid rgba(212,247,0,.3)', borderRadius:4, padding:'4px 10px', fontSize:10, color:'var(--yellow)', letterSpacing:'.1em' }}>✓ VERIFIED</div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
