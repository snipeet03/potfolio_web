import { useEffect, useRef, useState } from 'react'
import { SKILLS, PROJECTS, ACHIEVEMENTS, CONTACT_LINKS } from '../lib/constants'

/* Reveal — IntersectionObserver, same logic as original HTML */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      })
    }, { threshold: 0.12 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

/* ── SKILLS ── */
function SkillsSection() {
  return (
    <section id="skills" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign:'center', marginBottom:52 }}>
          <div className="section-label" style={{ justifyContent:'center' }}>Skills</div>
          <h2 className="section-title">Tech <span className="yellow">Arsenal</span></h2>
          <p style={{ color:'var(--muted)', fontSize:14, fontWeight:300 }}>Everything I've picked up building real products.</p>
        </div>
        <div className="skills-grid">
          {SKILLS.map((g, i) => (
            <div key={g.name} className={`skill-card reveal reveal-d${(i % 5) + 1}`}>
              <div className="skill-card-header">
                <div className="skill-icon">{g.icon}</div>
                <span className="skill-cat-name">{g.name}</span>
              </div>
              <div className="skill-tags">
                {g.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── PROJECTS ── */
function ProjectsGrid() {
  return (
    <section id="projects" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign:'center', marginBottom:52 }}>
          <div className="section-label" style={{ justifyContent:'center' }}>Projects</div>
          <h2 className="section-title">What I've <span className="yellow">Built</span></h2>
          <p style={{ color:'var(--muted)', fontSize:14, fontWeight:300 }}>Real products, real code, real impact.</p>
        </div>
        <div className="bento">
          {PROJECTS.map(p => (
            <div key={p.name} className={`${p.cls} reveal ${p.delay}`}>
              <div className="proj-card">
                <div className="proj-bar">
                  <div className="t-dot t-red" /><div className="t-dot t-yellow" /><div className="t-dot t-green" />
                  <span className="proj-filename">{p.file}</span>
                  <span className="proj-lang-tag">{p.lang}</span>
                </div>
                <div className="proj-body">
                  <div className="proj-icon">{p.icon}</div>
                  <div className="proj-name">{p.name}</div>
                  <div className="proj-desc">{p.desc}</div>
                  <div className="proj-tags">
                    {p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
                  </div>
                  <div className="proj-links">
                    {p.links.map(l => <a key={l.label} href={l.href} className="proj-link">{l.label}</a>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── ACHIEVEMENTS ── */
function AchievementsSection() {
  return (
    <section id="achievements" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign:'center', marginBottom:52 }}>
          <div className="section-label" style={{ justifyContent:'center' }}>Achievements</div>
          <h2 className="section-title">Milestones & <span className="yellow">Recognition</span></h2>
          <p style={{ color:'var(--muted)', fontSize:14, fontWeight:300 }}>What I've earned outside the codebase.</p>
        </div>
        <div className="ach-grid">
          {ACHIEVEMENTS.map(a => (
            <div key={a.title} className={`ach-card reveal ${a.delay}`}>
              <div className="ach-emoji">{a.emoji}</div>
              <div className="ach-title">{a.title}</div>
              <div className="ach-sub">{a.sub}</div>
              <div className="ach-desc">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── CONTACT ── */
const GhIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

function ContactSection() {
  const [form,   setForm]   = useState({ name:'', email:'', msg:'' })
  const [status, setStatus] = useState(null)
  const set = k => e => setForm(p => ({ ...p, [k]: e.target.value }))

  const submit = () => {
    if (!form.name || !form.email || !form.msg) {
      setStatus('err'); setTimeout(() => setStatus(null), 2000); return
    }
    setStatus('ok')
    setForm({ name:'', email:'', msg:'' })
    setTimeout(() => setStatus(null), 3000)
  }

  const renderIcon = (icon) => {
    if (icon === 'gh') return <GhIcon />
    if (icon === 'li') return <span style={{ color:'#0a66c2', fontWeight:700 }}>in</span>
    return icon
  }

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign:'center', marginBottom:56 }}>
          <div className="section-label" style={{ justifyContent:'center' }}>Contact</div>
          <h2 className="section-title">Let's <span className="yellow">Build Together</span></h2>
          <p style={{ color:'var(--muted)', fontSize:14, fontWeight:300, maxWidth:440, margin:'0 auto' }}>Open to full-time roles, internships, freelance, and exciting side projects.</p>
        </div>

        <div className="contact-grid">
          {/* Left */}
          <div className="reveal">
            <p style={{ fontSize:13, color:'var(--muted)', lineHeight:1.8, marginBottom:28, fontWeight:300 }}>
              I'm actively looking for new opportunities. Whether you have a question, a project idea, or just want to say hello — my inbox is always open.
            </p>
            {CONTACT_LINKS.map(l => (
              <a key={l.key} href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer" className="contact-link"
                style={l.accent ? { borderColor:'rgba(212,247,0,.2)' } : {}}
              >
                <div className="contact-icon"
                  style={l.accent ? { background:'var(--yellow)', borderColor:'var(--yellow)', color:'#000', fontWeight:700, fontSize:12 } : {}}
                >
                  {renderIcon(l.icon)}
                </div>
                <div>
                  <div className="contact-key">{l.key}</div>
                  <div className="contact-val" style={l.accent ? { color:'var(--yellow)' } : {}}>{l.val}</div>
                </div>
                <div className="contact-arrow" style={l.accent ? { color:'var(--yellow)' } : {}}>→</div>
              </a>
            ))}
          </div>

          {/* Right — form */}
          <div className="reveal reveal-d2">
            <div className="terminal">
              <div className="terminal-bar">
                <div className="t-dot t-red" /><div className="t-dot t-yellow" /><div className="t-dot t-green" />
                <span className="terminal-filename">send_message.sh</span>
              </div>
              <div style={{ padding: 28 }}>
                {[
                  { id:'name',  lbl:'$ name',    type:'text',  ph:'Your name'                           },
                  { id:'email', lbl:'$ email',   type:'email', ph:'your@email.com'                      },
                ].map(f => (
                  <div key={f.id} className="form-group">
                    <label className="form-label">{f.lbl}</label>
                    <input type={f.type} placeholder={f.ph} value={form[f.id]} onChange={set(f.id)} className="form-input" />
                  </div>
                ))}
                <div className="form-group">
                  <label className="form-label">$ message</label>
                  <textarea placeholder="Tell me about your project or opportunity..." value={form.msg} onChange={set('msg')} className="form-input" />
                </div>
                <button className="btn-submit" onClick={submit}
                  style={status === 'ok' ? { background:'#22c55e' } : status === 'err' ? { background:'#f59e0b' } : {}}
                >
                  {status === 'ok' ? '✓ Message Sent!' : status === 'err' ? '⚠ Please fill all fields' : <><span>▶</span> Send Message</>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── DEFAULT EXPORT ── */
export default function ProjectsSection() {
  useReveal()
  return (
    <>
      <hr className="divider" />
      <SkillsSection />
      <hr className="divider" />
      <ProjectsGrid />
      <hr className="divider" />
      <AchievementsSection />
      <hr className="divider" />
      <ContactSection />
    </>
  )
}
