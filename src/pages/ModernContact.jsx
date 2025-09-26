export function ModernContact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="kicker">Contact</div>
          <h1 className="hero-title">Let's Grow Together</h1>
          <p className="hero-subtitle">
            Strengthen your accounting backbone, navigate compliance, and prepare for growth with our expert guidance.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Reach Us</h3>
                </div>
                <div className="space-y-3 text-sm">
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
                  <div>
                    <span className="text-muted">Location:</span>
                    <span className="ml-2">Lucknow, Uttar Pradesh, India</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Regulatory</h3>
                </div>
                <p className="text-sm text-muted">Registered in India.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Write to Us</h3>
                </div>
                
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-light rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-light rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-light rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-light rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      How can we help? *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-light rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none"
                      placeholder="Tell us about your requirements and how we can assist you..."
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section bg-tertiary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quick Response</h3>
              <p className="text-muted">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Free Consultation</h3>
              <p className="text-muted">
                Initial consultation to understand your needs and provide tailored solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-muted">
                Work with experienced professionals who understand your industry challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
