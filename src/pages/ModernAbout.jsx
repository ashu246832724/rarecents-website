import { ImageCarousel } from '../components/ImageCarousel'

export function ModernAbout() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="kicker">About Us</div>
          <h1 className="hero-title">Rarecents Assurance Private Limited</h1>
          <p className="hero-subtitle">
            We are a boutique financial consulting and advisory firm delivering end-to-end solutions in accounting, taxation,
            audit, and strategic finance. Founded and led by seasoned professionals with decades of combined experience, we
            help businesses operate with clarity, compliance, and confidence.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold">Vision</h2>
              </div>
              <p className="text-lg text-secondary leading-relaxed">
                To redefine the standards of financial transparency, compliance, and strategic guidance by becoming the most trusted
                financial partner for businesses across sectors. We envision universal access to world-class financial insights and systems
                as the foundation for resilience, innovation, and competitive edge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-tertiary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold">Mission</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-secondary">
                    Ensure financial clarity and accuracy through precise, timely reporting.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-secondary">
                    Deliver end-to-end outsourced financial operations that scale with your business.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-secondary">
                    Provide expert taxation and regulatory compliance under evolving laws.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-secondary">
                    Offer strategic advisory with actionable insights for growth and control.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-secondary">
                    Uphold integrity, transparency, and trust in every engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <ImageCarousel 
                images={[
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ]}
                alt="Integrity in Business"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-muted">
                We maintain the highest ethical standards in all our professional relationships and business practices.
              </p>
            </div>

            <div className="card text-center">
              <ImageCarousel 
                images={[
                  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                  'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ]}
                alt="Excellence in Service"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted">
                We strive for excellence in every project, delivering superior results that exceed client expectations.
              </p>
            </div>

            <div className="card text-center">
              <ImageCarousel 
                images={[
                  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ]}
                alt="Partnership and Collaboration"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Partnership</h3>
              <p className="text-muted">
                We build lasting relationships based on trust, collaboration, and mutual success with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
