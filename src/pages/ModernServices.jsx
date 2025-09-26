export function ModernServices() {
  const services = [
    {
      id: 'accounting',
      title: 'Accounting & Bookkeeping',
      subtitle: 'Outsourced F&O',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      items: [
        'Day-to-day bookkeeping and ledger management',
        'MIS preparation (monthly/quarterly)',
        'Bank, vendor, intercompany reconciliations',
        'Payroll accounting and statutory reporting',
        'Financial statements, budgeting, and forecasting'
      ]
    },
    {
      id: 'tax',
      title: 'Taxation & Compliance',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      items: [
        'Income Tax, TDS, GST compliance and filings',
        'Corporate tax planning and litigation handling',
        'Representation before tax authorities',
        'MCA compliances and advisory'
      ]
    },
    {
      id: 'audit',
      title: 'Audit & Assurance',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      items: [
        'Internal and concurrent audits',
        'Bank audits: advances, revenue, forensic',
        'Audit readiness for funding rounds and due diligence'
      ]
    },
    {
      id: 'pe',
      title: 'Private Equity & Fund Operations',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      items: [
        'Fund NAV and IRR computation',
        'Portfolio analytics and performance tracking',
        'Deal evaluation, investment modeling, and documentation'
      ]
    },
    {
      id: 'advisory',
      title: 'Financial Advisory & Consulting',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      items: [
        'Business restructuring and SOP implementation',
        'Cost control and working capital management',
        'Debt syndication and financial due diligence',
        'Resolution and acquisition of stressed assets'
      ]
    },
    {
      id: 'setup',
      title: 'Company Incorporation & Business Setup',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      items: [
        'Company incorporation',
        'Direct & Indirect tax registrations',
        'RBI/MCA approvals for foreign-owned business setup in India'
      ]
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="kicker">Services</div>
          <h1 className="hero-title">Comprehensive Financial and Advisory Services</h1>
          <p className="hero-subtitle">
            Partner-led, compliance-ready, and insight-driven offerings tailored to your stage and scale.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                    {service.subtitle && (
                      <p className="text-muted">{service.subtitle}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-secondary">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-tertiary">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
            Let's discuss how our comprehensive financial services can support your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn btn-primary">
              Contact Us Today
            </a>
            <a href="/leadership" className="btn btn-outline">
              Meet Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
