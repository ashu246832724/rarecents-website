import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function Layout({ children }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved)
      document.documentElement.setAttribute('data-theme', saved)
    } else {
      setTheme('light')
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <nav className="nav">
              <NavLink to="/" end>Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/leadership">Leadership</NavLink>
              <NavLink to="/clients">Clients</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
            <button
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              className="btn"
              onClick={toggleTheme}
              style={{ padding: '8px 10px' }}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </header>
      <main className="site-main">
        {children}
      </main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">Rarecents Assurance Pvt Ltd</div>
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


