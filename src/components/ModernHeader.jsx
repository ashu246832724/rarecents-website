import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

export function ModernHeader() {
  const [theme, setTheme] = useState('light')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    } else {
      setTheme('light')
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="navbar">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Brand */}
          <Link to="/" className="navbar-brand">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              R
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg">Rarecents</span>
              <span className="text-xs text-muted">Assurance Private Limited</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex navbar-nav">
            <NavLink to="/" end className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/services" className="nav-link">
              Services
            </NavLink>
            <NavLink to="/leadership" className="nav-link">
              Leadership
            </NavLink>
            <NavLink to="/clients" className="nav-link">
              Clients
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-tertiary transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-light py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                end 
                className="nav-link py-2" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className="nav-link py-2" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to="/services" 
                className="nav-link py-2" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </NavLink>
              <NavLink 
                to="/leadership" 
                className="nav-link py-2" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Leadership
              </NavLink>
              <NavLink 
                to="/clients" 
                className="nav-link py-2" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Clients
              </NavLink>
              <NavLink 
                to="/contact" 
                className="nav-link py-2" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
