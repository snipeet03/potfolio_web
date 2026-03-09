import { useState } from 'react'

const THEMES = {
  kilo:   { '--bg':'#181818','--bg2':'#1f1f1f','--bg3':'#272727','--bg4':'#2f2f2f','--border':'#333','--brd2':'#444','--y':'#d4f700','--y2':'#bcdd00','--text':'#eeeeee','--muted':'#888','--dim':'#555' },
  darker: { '--bg':'#0e0e0e','--bg2':'#141414','--bg3':'#1c1c1c','--bg4':'#242424','--border':'#2a2a2a','--brd2':'#383838','--y':'#d4f700','--y2':'#bcdd00','--text':'#eeeeee','--muted':'#888','--dim':'#555' },
  green:  { '--bg':'#0f1a0f','--bg2':'#141e14','--bg3':'#1b261b','--bg4':'#222e22','--border':'#2a3a2a','--brd2':'#3a4c3a','--y':'#5fff5f','--y2':'#4de04d','--text':'#e8f5e8','--muted':'#7a9a7a','--dim':'#4a6a4a' },
}

export default function ThemeToggle() {
  const [active, setActive] = useState('kilo')
  const [open,   setOpen]   = useState(false)
  const apply = k => {
    Object.entries(THEMES[k]).forEach(([p,v])=>document.documentElement.style.setProperty(p,v))
    setActive(k); setOpen(false)
  }
  return (
    <div style={{position:'fixed',bottom:22,right:22,zIndex:5000}}>
      <button onClick={()=>setOpen(o=>!o)}
        style={{width:42,height:42,borderRadius:'50%',background:'var(--y)',border:'none',color:'#000',fontSize:18,display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 4px 18px rgba(212,247,0,.4)',transition:'transform .2s'}}
        onMouseEnter={e=>e.currentTarget.style.transform='scale(1.14)'}
        onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}
      >🎨</button>
      {open&&(
        <div style={{position:'absolute',bottom:50,right:0,background:'var(--bg2)',border:'1px solid var(--brd2)',borderRadius:6,overflow:'hidden',minWidth:130,boxShadow:'0 14px 44px rgba(0,0,0,.6)'}}>
          {Object.keys(THEMES).map(k=>(
            <button key={k} onClick={()=>apply(k)}
              style={{display:'block',width:'100%',textAlign:'left',padding:'10px 16px',background:active===k?'var(--bg3)':'transparent',border:'none',color:active===k?'var(--y)':'var(--muted)',fontSize:12,fontFamily:'var(--mono)',textTransform:'capitalize',transition:'all .15s'}}
              onMouseEnter={e=>{e.currentTarget.style.background='var(--bg3)';e.currentTarget.style.color='var(--text)'}}
              onMouseLeave={e=>{e.currentTarget.style.background=active===k?'var(--bg3)':'transparent';e.currentTarget.style.color=active===k?'var(--y)':'var(--muted)'}}
            >{active===k?'● ':'○ '}{k}</button>
          ))}
        </div>
      )}
    </div>
  )
}
