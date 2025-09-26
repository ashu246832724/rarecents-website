import { ImageCarousel } from '../components/ImageCarousel'

export function ModernClients() {
  const clientCategories = [
    {
      title: "Public Sector Undertakings",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      clients: ["GAIL", "UPPCL", "NTPC", "POWERGRID"]
    },
    {
      title: "Banking & Financial Institutions",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      clients: [
        "State Bank of India", "HDFC Bank", "Punjab National Bank", 
        "Union Bank of India", "Indian Overseas Bank", "SIDBI",
        "Bank of Baroda", "IDBI Bank", "Bank of India"
      ]
    },
    {
      title: "Corporates & Ratings",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      clients: ["ITC Ltd.", "Reliance Communications", "Rosa Power Supply Co. Ltd.", "CRISIL Ratings"]
    },
    {
      title: "Investment & Asset Management",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      clients: ["Acuity Knowledge Partners", "Dickey Asset Management Pvt. Ltd."]
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="kicker">Clients</div>
          <h1 className="hero-title">Prominent Client Engagements</h1>
          <p className="hero-subtitle">
            Our leadership has served a wide base of institutions and corporates across various sectors.
          </p>
        </div>
      </section>

      {/* Client Categories */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientCategories.map((category, index) => (
              <div key={index} className="card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.clients.map((client, clientIndex) => (
                    <div key={clientIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-secondary">{client}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section bg-tertiary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Our track record speaks for itself. We've successfully served clients across diverse sectors, 
              from public sector undertakings to leading financial institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <ImageCarousel 
                images={[
                  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ]}
                alt="Proven Track Record"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
              <p className="text-muted">
                Years of successful engagements with leading organizations across multiple sectors.
              </p>
            </div>

            <div className="card text-center">
              <ImageCarousel 
                images={[
                  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                  'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ]}
                alt="Diverse Expertise"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Diverse Expertise</h3>
              <p className="text-muted">
                Experience across banking, PSUs, corporates, and investment management sectors.
              </p>
            </div>

            <div className="card text-center">
              <ImageCarousel 
                images={[
                  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ]}
                alt="Long-term Partnerships"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Long-term Partnerships</h3>
              <p className="text-muted">
                Building lasting relationships through consistent delivery and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Esteemed Client Portfolio
          </h2>
          <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
            Experience the same level of expertise and commitment that has made us the preferred choice 
            for leading organizations across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn btn-primary">
              Start Your Journey
            </a>
            <a href="/services" className="btn btn-outline">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
