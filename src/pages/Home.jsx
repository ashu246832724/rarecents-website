import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="kicker">Empowering Enterprises</div>
          <h1>Financial Clarity, Control & Confidence</h1>
          <p>
            Rarecents Assurance Private Limited is a boutique financial consulting and advisory firm delivering end-to-end
            solutions in accounting, taxation, audit, and strategic finance. We help businesses navigate financial responsibilities with
            accuracy, transparency, and foresight.
          </p>
          <div className="hero-cta">
            <Link className="btn primary" to="/contact">Inquire Now</Link>
            <Link className="btn" to="/services">Explore Services</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">What we do</div>
          <div className="h2">Integrated Business and Professional Services</div>
          <div className="grid-3">
            <div className="card">
              <div className="h3">Accounting & Bookkeeping</div>
              <p className="muted">Outsourced finance operations, MIS, reconciliations, payroll accounting, budgeting and forecasting.</p>
              <Link className="btn" to="/services">Learn more</Link>
            </div>
            <div className="card">
              <div className="h3">Taxation & Compliance</div>
              <p className="muted">Income Tax, GST, TDS, litigation, representation, filings, and MCA compliances.</p>
              <Link className="btn" to="/services#tax">Learn more</Link>
            </div>
            <div className="card">
              <div className="h3">Audit & Assurance</div>
              <p className="muted">Internal, concurrent, bank, and audit readiness for funding and diligence.</p>
              <Link className="btn" to="/services#audit">Learn more</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          <div className="card">
            <div className="kicker">MCA CIN</div>
            <div className="h2">U69200UP2025PTC227099</div>
            <p className="muted">Registered as Rarecents Assurance Private Limited in India.</p>
          </div>
          <div className="card">
            <div className="kicker">Software Expertise</div>
            <p className="muted">Zoho Books, QuickBooks Online, Tally Prime, MS Excel (advanced), legal tax and GST utilities.</p>
          </div>
          <div className="card">
            <div className="kicker">Industries</div>
            <p className="muted">Banks, PSUs, manufacturing, energy, IT/ITeS, and more.</p>
          </div>
        </div>
      </section>
    </div>
  )
}


