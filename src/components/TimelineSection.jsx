import { useEffect } from 'react'

const jsonCardStyles = `
  .json-card {
    background: #1a1b2e;
    border-radius: 12px;
    overflow: hidden;
    font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Courier New', monospace;
    font-size: 13.5px;
    line-height: 1.75;
    box-shadow: 0 8px 40px rgba(0,0,0,0.45), 0 2px 8px rgba(0,0,0,0.3);
    border: 1px solid rgba(255,255,255,0.07);
    max-width: 480px;
    width: 100%;
  }
  .json-card-titlebar {
    background: #252638;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .json-card-dots {
    display: flex;
    gap: 6px;
    align-items: center;
  }
  .json-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  .json-dot-red   { background: #ff5f57; }
  .json-dot-yellow{ background: #febc2e; }
  .json-dot-green { background: #28c840; }
  .json-card-filename {
    color: #8b8fa8;
    font-size: 12.5px;
    letter-spacing: 0.02em;
    margin-left: 4px;
    font-family: 'JetBrains Mono', monospace;
  }
  .json-card-body {
    padding: 20px 24px 24px;
    color: #cdd6f4;
  }
  .json-brace {
    color: #cdd6f4;
  }
  .json-key {
    color: #cba6f7;
  }
  .json-colon {
    color: #cdd6f4;
  }
  .json-string {
    color: #cdd6f4;
  }
  .json-bracket {
    color: #cdd6f4;
  }
  .json-array-item {
    color: #a6e3a1;
    padding-left: 24px;
    display: block;
  }
  .json-line {
    display: flex;
    align-items: baseline;
    gap: 0;
  }
  .json-indent {
    padding-left: 18px;
  }
  .json-indent2 {
    padding-left: 36px;
  }
  .json-comma {
    color: #cdd6f4;
  }
`

function JsonCard() {
  return (
    <>
      <style>{jsonCardStyles}</style>
      <div className="json-card">
        <div className="json-card-titlebar">
          <div className="json-card-dots">
            <span className="json-dot json-dot-red" />
            <span className="json-dot json-dot-yellow" />
            <span className="json-dot json-dot-green" />
          </div>
          <span className="json-card-filename">experience.json</span>
        </div>
        <div className="json-card-body">
          <div className="json-brace">{'{'}</div>

          <div className="json-indent">
            <span className="json-key">"role"</span>
            <span className="json-colon">: </span>
            <span className="json-string">"Python / Backend Intern"</span>
            <span className="json-comma">,</span>
          </div>

          <div className="json-indent">
            <span className="json-key">"company"</span>
            <span className="json-colon">: </span>
            <span className="json-string">"Bosch Limited, Nashik"</span>
            <span className="json-comma">,</span>
          </div>

          <div className="json-indent">
            <span className="json-key">"period"</span>
            <span className="json-colon">: </span>
            <span className="json-string">"June 2025 – Nov 2025"</span>
            <span className="json-comma">,</span>
          </div>

          <div className="json-indent">
            <span className="json-key">"stack"</span>
            <span className="json-colon">: </span>
            <span className="json-bracket">["</span>
            <span className="json-string">Django</span>
            <span className="json-bracket">", "</span>
            <span className="json-string">Python</span>
            <span className="json-bracket">"]</span>
            <span className="json-comma">,</span>
          </div>

          <div className="json-indent">
            <span className="json-key">"built"</span>
            <span className="json-colon">: </span>
            <span className="json-bracket">[</span>
          </div>

          <span className="json-array-item">"Inventory &amp; Assembly Mgmt System",</span>
          <span className="json-array-item">"Real-time manufacturing dashboards",</span>
          <span className="json-array-item">"Machine performance tracking"</span>

          <div className="json-indent">
            <span className="json-bracket">]</span>
          </div>

          <div className="json-brace">{'}'}</div>
        </div>
      </div>
    </>
  )
}

export default function TimelineSection() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal-timeline')
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

  const timelineData = [
    {
      time: "2004",
      title: "Date of Birth",
      desc: "Started my journey!",
      card: null
    },
    {
      time: "2019 - 2020",
      title: "South Point School",
      desc: "SSC Class X — 91.80%",
      card: null
    },
    {
      time: "2020 - 2022",
      title: "Adarsh Sanskar Vidyalaya",
      desc: "HSC Class XII — 72.83%",
      card: null
    },
    {
      time: "2022 - 2026",
      title: "G H Raisoni College of Engineering and Management",
      desc: "Bachelor of Technology in Computer Science — CGPA: 7.79 (Till 7th Semester)",
      card: null
    },
    {
      time: "June 2025 - Nov 2025",
      title: "Bosch Limited",
      desc: "Python / Backend Developer Intern — Satpur, Nashik",
      card: <JsonCard />
    }
  ]

  return (
    <section id="timeline" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="reveal-timeline reveal">
          <div className="section-label">Journey</div>
          <h2 className="section-title">My <span className="yellow">Timeline</span></h2>
          <div className="yellow-bar" />

          <div className="timeline-container">
            <h3 className="timeline-header">Latest from my journey</h3>
            <div className="timeline-list">
              {timelineData.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <div className="timeline-time">{item.time}</div>
                    <div className="timeline-item-title">{item.title}</div>
                    <div className="timeline-desc">{item.desc}</div>
                    {item.card && (
                      <div style={{ marginTop: '16px' }}>
                        {item.card}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}