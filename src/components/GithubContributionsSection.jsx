import { useEffect } from 'react'
import { GitHubCalendar } from 'react-github-calendar'

export default function GithubContributionsSection() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal-github')
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

  // Custom colors for GitHub Calendar
  // Map index: 0 = bg, 1 to 4 = shades of green
  // Using theme yellow variables since the theme is dark with yellow accents.
  // Or we can use traditional green for github heatmap as shown in the user picture.
  const theme = {
    light: [
      '#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'
    ],
    dark: [
      'var(--bg3)', '#0e4429', '#006d32', '#26a641', '#39d353'
    ]
  }

  return (
    <section id="github" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div className="reveal-github reveal">
          <div className="section-label">GitHub</div>
          <h2 className="section-title">My <span className="yellow">Contributions</span></h2>
          <div className="yellow-bar" />

          <div className="github-container">
            <GitHubCalendar 
              username="snipeet03" 
              colorScheme="dark"
              theme={theme}
              fontSize={14}
              blockSize={15}
              blockMargin={5}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
