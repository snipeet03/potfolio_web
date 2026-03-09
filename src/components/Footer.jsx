export default function Footer() {
  const links = [
    { label:'GitHub',   href:'https://github.com/snipeet03' },
    { label:'LinkedIn', href:'https://www.linkedin.com/in/navneet-lonare-206b6726b/' },
    { label:'Email',    href:'mailto:navneetlonare@gmail.com' },
    { label:'Resume',   href:'https://drive.google.com/file/d/1XF2I3VXAA7I_ZNV3omFvoosIhdOiRwkA/view?usp=drive_link' },
  ]
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">
          <div className="footer-logo-box">NL</div>
          <span>Navneet Lonare</span>
        </div>
        <div className="footer-copy">
          Built with ♥ in Nagpur, India · © 2025
        </div>
        <div className="footer-links">
          {links.map(l => (
            <a key={l.label} href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer" className="footer-link"
            >{l.label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
