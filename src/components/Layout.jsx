import { Link, NavLink } from 'react-router-dom'

export function Layout({ children }) {
  return (
    <div className="site">
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand">
            <div className="logo-circle">R</div>
            <div className="brand-text">
              <span className="brand-name">Rarecents</span>
              <span className="brand-sub">Assurance Private Limited</span>
            </div>
          </Link>
          <nav className="nav">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/leadership">Leadership</NavLink>
            <NavLink to="/clients">Clients</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>
      <main className="site-main">
        {children}
      </main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">Rarecents Assurance Pvt Ltd</div>
            <div className="footer-sub">MCA CIN: U69200UP2025PTC227099</div>
            <div className="footer-sub">Headquarter: Lucknow, Uttar Pradesh, India</div>
          </div>
          <div>
            <div className="footer-head">Contact</div>
            <div>Email: rarecentsapl@gmail.com</div>
            <div>Email: caharishshukla@gmail.com</div>
            <div>Phone: +91 8574955848</div>
          </div>
          <div>
            <div className="footer-head">Social</div>
            <a href="https://www.linkedin.com/in/caharishkshukla" target="_blank" rel="noreferrer">LinkedIn - Harish</a>
            <a href="https://www.linkedin.com/in/indu-dwivedi" target="_blank" rel="noreferrer">LinkedIn - Indu</a>
            <a href="https://www.linkedin.com/in/raibhaskar" target="_blank" rel="noreferrer">LinkedIn - Bhaskar</a>
          </div>
        </div>
        <div className="container copyright">
          © {new Date().getFullYear()} Rarecents. All rights reserved.
        </div>
      </footer>
    </div>
  )
}


