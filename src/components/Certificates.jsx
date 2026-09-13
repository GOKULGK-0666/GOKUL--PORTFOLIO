import { ArrowUpRight } from 'lucide-react'
import { certificates } from '../data/portfolio'

export default function Certificates({ showAll, setShowAll }) {
  return (
    <section className="certificates section" id="certificates">
      <div className="section-label">04 — Certificates</div>
      <div className="certificates-layout">
        <h2>
          Always
          <br />
          <em>learning.</em>
        </h2>
        <div className="certificate-list">
          {certificates
            .slice(0, showAll ? certificates.length : 4)
            .map(([title, issuer, year, url], index) => (
              <a
                className="certificate-item"
                href={url}
                target="_blank"
                rel="noreferrer"
                key={title}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{issuer}</p>
                </div>
                <span className="certificate-year">{year} ↗</span>
              </a>
            ))}
          <button
            className="certificate-toggle"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll
              ? 'Show fewer'
              : `View all ${certificates.length} certificates`}{' '}
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </section>
  )
}
