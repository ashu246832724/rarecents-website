import { Link } from 'react-router-dom'
import { ImageCarousel } from '../components/ImageCarousel'

export function ModernHome() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="kicker">Empowering Enterprises</div>
          <h1 className="hero-title">Financial Clarity, Control & Confidence</h1>
          <p className="hero-subtitle">
            Rarecents Assurance Private Limited is a boutique financial consulting and advisory firm delivering end-to-end
            solutions in accounting, taxation, audit, and strategic finance. We help businesses navigate financial responsibilities with
            accuracy, transparency, and foresight.
          </p>
          <div className="hero-cta">
            <Link className="btn btn-primary" to="/contact">Inquire Now</Link>
            <Link className="btn btn-outline" to="/services">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-tertiary">
        <div className="container">
          <div className="kicker">What we do</div>
          <h2 className="section-title">Integrated Business and Professional Services</h2>
          <p className="section-subtitle">
            Comprehensive financial solutions tailored to your business needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card animate-fade-in-up">
              <ImageCarousel 
                images={[
                  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ]}
                alt="Accounting and Bookkeeping Services"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Accounting & Bookkeeping</h3>
              <p className="text-muted mb-4">
                Outsourced finance operations, MIS, reconciliations, payroll accounting, budgeting and forecasting.
              </p>
              <Link className="btn btn-secondary" to="/services">Learn more</Link>
            </div>

            <div className="card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <ImageCarousel 
                images={[
                  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                  'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ]}
                alt="Taxation and Compliance Services"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Taxation & Compliance</h3>
              <p className="text-muted mb-4">
                Income Tax, GST, TDS, litigation, representation, filings, and MCA compliances.
              </p>
              <Link className="btn btn-secondary" to="/services#tax">Learn more</Link>
            </div>

            <div className="card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <ImageCarousel 
                images={[
                  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ]}
                alt="Audit and Assurance Services"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Audit & Assurance</h3>
              <p className="text-muted mb-4">
                Internal, concurrent, bank, and audit readiness for funding and diligence.
              </p>
              <Link className="btn btn-secondary" to="/services#audit">Learn more</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Software Expertise</h3>
              </div>
              <p className="text-muted">
                Zoho Books, QuickBooks Online, Tally Prime, MS Excel (advanced), legal tax and GST utilities.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Industries</h3>
              </div>
              <p className="text-muted">
                Banks, PSUs, manufacturing, energy, IT/ITeS, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-accent">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with us for comprehensive financial solutions that drive growth and ensure compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link className="btn bg-white text-accent hover:bg-blue-50" to="/contact">
              Get Started Today
            </Link>
            <Link className="btn border-white text-white hover:bg-white hover:text-accent" to="/services">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
