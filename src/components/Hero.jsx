import { PROFILE } from "../data.js";

export default function Hero({ t }) {
  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="hero-header">
            <span className="hero-role">{t.role}</span>
            <h1 className="hero-title">
              <span className="hero-name-primary">RAFFI</span>
              <span className="hero-name-offset">GHIFARI</span>
            </h1>
          </div>

          <p className="hero-intro">{t.intro}</p>

          <div className="hero-actions">
            <a href="#work" className="btn">
              {t.heroCtaWork} <span aria-hidden="true">↓</span>
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="btn ghost"
              target="_blank"
              rel="noreferrer"
            >
              {t.heroCtaResume} <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="hero-meta">
            <div className="hero-status">
              <span className="status-indicator" aria-hidden="true" />
              <span>{t.status}</span>
              <span className="meta-separator" aria-hidden="true">·</span>
              <span className="hero-location">{t.location}</span>
            </div>

            <div className="hero-socials" aria-label="Social profiles">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="social-link">
                GitHub
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="social-link">
                LinkedIn
              </a>
              <a href={`mailto:${PROFILE.email}`} className="social-link">
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="ambient-art-frame">
            <div className="art-frame-inner">
              <div className="art-line art-line-h" />
              <div className="art-line art-line-v" />
              <div className="art-circle" />
              <div className="art-badge">
                <span>QUIET OCEAN · 01</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

