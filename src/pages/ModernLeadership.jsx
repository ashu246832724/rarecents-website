import BhaskarImg from '../assets/Bhaskar.jpeg'

function ModernLeader({ name, title, link, photoSrc, children }) {
  return (
    <div className="card text-center group hover:shadow-lg transition-all duration-300">
      {photoSrc && (
        <div className="mb-6">
          <img
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-accent shadow-lg group-hover:scale-105 transition-transform duration-300"
            src={photoSrc}
            alt={name === "Bhaskar Rai" ? "Bhaskar Rai – Leadership Team" : name}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-accent font-medium mb-4">{title}</p>
      {link && (
        <div className="mb-4">
          <a 
            className="btn btn-outline btn-sm" 
            href={link} 
            target="_blank" 
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>
      )}
      <p className="text-secondary leading-relaxed">{children}</p>
    </div>
  )
}

export function ModernLeadership() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="kicker">Leadership</div>
          <h1 className="hero-title">Partner-led Expertise</h1>
          <p className="hero-subtitle">
            Our leadership combines audit rigor, strategic finance, and investment acumen to deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ModernLeader 
              name="CA Harish Kumar Shukla" 
              title="Founder & CEO" 
              link="https://www.linkedin.com/in/caharishkshukla" 
              photoSrc="https://drive.google.com/thumbnail?id=1N1tpLL8cSwxgSa1L6iVCq96J9iqnyLSy&sz=w800"
            >
              12+ years across financial reporting, internal/statutory audits, taxation, controls, and compliance advisory. Led audits for SBI, PNB, IOB; internal audits for GAIL and UPPCL; IND AS transitions, SOPs, and project finance.
            </ModernLeader>

            <ModernLeader 
              name="Indu Dwivedi" 
              title="Director" 
              link="https://www.linkedin.com/in/indu-dwivedi" 
              photoSrc="https://drive.google.com/thumbnail?id=1KBZyR6NHlBW_ELhiyYv5yQnc69EI6l35&sz=w800"
            >
              Senior Financial Analyst at Acuity Knowledge Partners. Deep expertise in financial models (DCF, comps, NAV), investor reporting, due diligence, portfolio analytics, and client engagement across global mandates.
            </ModernLeader>

            <ModernLeader 
              name="Bhaskar Rai" 
              title="Director" 
              link="https://www.linkedin.com/in/raibhaskar" 
              photoSrc={BhaskarImg}
            >
              7+ years in stressed assets, investment due diligence, modeling, taxation, and audits. Managed ₹35B+ transactions incl. ARC deals; earlier audit and compliance experience with major banks and corporates.
            </ModernLeader>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="section bg-tertiary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Leadership Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Client-Centric Approach</h3>
                <p className="text-muted">
                  We prioritize our clients' success by understanding their unique challenges and delivering tailored solutions.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
                <p className="text-muted">
                  We stay ahead of industry trends and regulatory changes to provide cutting-edge financial solutions.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaborative Excellence</h3>
                <p className="text-muted">
                  We foster a culture of collaboration and knowledge sharing to deliver exceptional results together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work with Our Expert Team?
          </h2>
          <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
            Connect with our leadership team to discuss your financial needs and discover how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn btn-primary">
              Get in Touch
            </a>
            <a href="/services" className="btn btn-outline">
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
