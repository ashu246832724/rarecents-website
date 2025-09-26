export function ModernFooter() {
  return (
    <footer className="bg-secondary border-t border-light">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                R
              </div>
              <div>
                <h3 className="font-bold text-lg">Rarecents Assurance Pvt Ltd</h3>
                <p className="text-sm text-muted">Headquarter: Lucknow, Uttar Pradesh, India</p>
              </div>
            </div>
            <p className="text-sm text-muted">
              Boutique financial consulting and advisory firm delivering end-to-end solutions in accounting, taxation, audit, and strategic finance.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-muted">Email:</span>
                <a href="mailto:rarecentsapl@gmail.com" className="text-accent hover:underline ml-2">
                  rarecentsapl@gmail.com
                </a>
              </div>
              <div>
                <span className="text-muted">Email:</span>
                <a href="mailto:caharishshukla@gmail.com" className="text-accent hover:underline ml-2">
                  caharishshukla@gmail.com
                </a>
              </div>
              <div>
                <span className="text-muted">Phone:</span>
                <a href="tel:+918574955848" className="text-accent hover:underline ml-2">
                  +91 8574955848
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Leadership</h4>
            <div className="space-y-2 text-sm">
              <div>
                <a 
                  href="https://www.linkedin.com/in/caharishkshukla" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Harish Kumar Shukla - LinkedIn
                </a>
              </div>
              <div>
                <a 
                  href="https://www.linkedin.com/in/indu-dwivedi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Indu Dwivedi - LinkedIn
                </a>
              </div>
              <div>
                <a 
                  href="https://www.linkedin.com/in/raibhaskar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Bhaskar Rai - LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-light mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} Rarecents Assurance Private Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="/privacy" className="text-muted hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-muted hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
