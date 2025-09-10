export function Contact() {
  return (
    <div className="container">
      <section className="hero">
        <div className="kicker">Contact</div>
        <h1>Let’s Grow Together</h1>
        <p className="muted">Strengthen your accounting backbone, navigate compliance, and prepare for growth.</p>
      </section>

      <section className="section">
        <div className="grid-3">
          <div className="card">
            <div className="h2">Reach us</div>
            <ul className="list">
              <li>Email: rarecentsapl@gmail.com</li>
              <li>Email: caharishshukla@gmail.com</li>
              <li>Phone: +91 8574955848</li>
              <li>Headquarter: Lucknow, Uttar Pradesh, India</li>
            </ul>
          </div>
          <div className="card">
            <div className="h2">Write to us</div>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: 'grid', gap: 10 }}>
                <input className="input" placeholder="Name" required />
                <input className="input" type="email" placeholder="Business Email" required />
                <input className="input" placeholder="Company" />
                <input className="input" placeholder="Phone" />
                <textarea className="input" placeholder="How can we help?" rows={4} />
                <button className="btn primary" type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div className="card">
            <div className="h2">Regulatory</div>
            <div className="muted">Registered in India.</div>
          </div>
        </div>
      </section>
    </div>
  )
}


