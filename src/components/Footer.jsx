export default function Footer() {
  const links = [
    { label:'GitHub',   href:'https://github.com/' },
    { label:'LinkedIn', href:'https://linkedin.com/' },
    { label:'Email',    href:'mailto:navneetlonare@gmail.com' },
    { label:'Resume',   href:'#' },
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
