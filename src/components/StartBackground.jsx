import { useEffect, useRef, useState } from 'react'

function ProgressBar() {
  const [w, setW] = useState(0)
  useEffect(() => {
    const fn = () => setW(Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100))
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, height: '2px',
      width: w + '%', zIndex: 9999, pointerEvents: 'none',
      background: 'var(--y)',
      boxShadow: '0 0 8px var(--y), 0 0 18px rgba(212,247,0,.4)',
      transition: 'width .05s linear',
    }} />
  )
}

function Cursor() {
  const dot  = useRef(null)
  const ring = useRef(null)
  const mx = useRef(0), my = useRef(0)
  const rx = useRef(0), ry = useRef(0)
  const raf = useRef(null)

  useEffect(() => {
    const mv = e => { mx.current = e.clientX; my.current = e.clientY }
    window.addEventListener('mousemove', mv)

    const tick = () => {
      rx.current += (mx.current - rx.current) * .12
      ry.current += (my.current - ry.current) * .12
      if (dot.current)  { dot.current.style.left  = mx.current + 'px'; dot.current.style.top  = my.current + 'px' }
      if (ring.current) { ring.current.style.left = rx.current + 'px'; ring.current.style.top = ry.current + 'px' }
      raf.current = requestAnimationFrame(tick)
    }
    tick()

    const on  = () => document.body.classList.add('ch')
    const off = () => document.body.classList.remove('ch')
    const attach = () => {
      document.querySelectorAll('a,button,.kbadge,.proj-card,.ach-card,.sk-card').forEach(el => {
        el.addEventListener('mouseenter', on)
        el.addEventListener('mouseleave', off)
      })
    }
    attach()
    const mo = new MutationObserver(attach)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', mv)
      cancelAnimationFrame(raf.current)
      mo.disconnect()
    }
  }, [])

  return (
    <>
      <style>{`
        #cdot {
          position:fixed; width:8px; height:8px; background:var(--y);
          border-radius:50%; pointer-events:none; z-index:10000;
          transform:translate(-50%,-50%);
          box-shadow:0 0 8px var(--y);
          transition:width .12s,height .12s;
        }
        #cring {
          position:fixed; width:32px; height:32px;
          border:1.5px solid rgba(212,247,0,.45); border-radius:50%;
          pointer-events:none; z-index:9999; transform:translate(-50%,-50%);
          transition:width .16s cubic-bezier(.25,.46,.45,.94), height .16s cubic-bezier(.25,.46,.45,.94), border-color .16s;
        }
        body.ch #cdot  { width:16px; height:16px; }
        body.ch #cring { width:48px; height:48px; border-color:var(--y); }
        @media(max-width:768px){ #cdot,#cring{ display:none; } }
      `}</style>
      <div id="cdot"  ref={dot}  />
      <div id="cring" ref={ring} />
    </>
  )
}

export default function StartBackground() {
  return <><ProgressBar /><Cursor /></>
}
