function Leader({ name, title, link, photoSrc, children }) {
  return (
    <div className="card leader-card">
      {photoSrc && (
        <img
          className="leader-photo"
          src={photoSrc}
          alt={name}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
      )}
      <div className="h3" style={{ marginBottom: 6 }}>{name}</div>
      <div className="muted" style={{ marginBottom: 8 }}>{title}</div>
      {link && (
        <div style={{ marginBottom: 10 }}>
          <a className="btn" href={link} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      )}
      <div className="muted">{children}</div>
    </div>
  )
}

export function Leadership() {
  return (
    <div className="container">
      <section className="hero">
        <div className="kicker">Leadership</div>
        <h1>Partner-led Expertise</h1>
        <p className="muted">Our leadership combines audit rigor, strategic finance, and investment acumen.</p>
      </section>

      <section className="section">
        <div className="grid-3">
          <Leader name="CA Harish Kumar Shukla" title="Founder & CEO" link="https://www.linkedin.com/in/caharishkshukla" photoSrc={"https://drive.google.com/thumbnail?id=1N1tpLL8cSwxgSa1L6iVCq96J9iqnyLSy&sz=w800"}>
            12+ years across financial reporting, internal/statutory audits, taxation, controls, and compliance advisory. Led audits for SBI, PNB, IOB; internal audits for GAIL and UPPCL; IND AS transitions, SOPs, and project finance.
          </Leader>
          <Leader name="Indu Dwivedi" title="Director" link="https://www.linkedin.com/in/indu-dwivedi" photoSrc={"https://drive.google.com/thumbnail?id=1KBZyR6NHlBW_ELhiyYv5yQnc69EI6l35&sz=w800"}>
            Senior Financial Analyst at Acuity Knowledge Partners. Deep expertise in financial models (DCF, comps, NAV), investor reporting, due diligence, portfolio analytics, and client engagement across global mandates.
          </Leader>
          <Leader name="Bhaskar Rai" title="Director" link="https://www.linkedin.com/in/raibhaskar">
            7+ years in stressed assets, investment due diligence, modeling, taxation, and audits. Managed ₹35B+ transactions incl. ARC deals; earlier audit and compliance experience with major banks and corporates.
          </Leader>
        </div>
      </section>
    </div>
  )
}


