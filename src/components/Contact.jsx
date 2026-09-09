import { PROFILE } from "../data.js";

export default function Contact({ t }) {
  return (
    <footer id="contact" className="section-container contact-section" aria-labelledby="contact-heading">
      <div className="section-header reveal">
        <span className="section-kicker" id="contact-heading">
          {t.contactSection}
        </span>
      </div>

      <div className="contact-editorial-block reveal">
        <h2 className="contact-display-heading">
          <span>{t.contactHeading}</span>
        </h2>

        <div className="contact-action-row">
          <a href={`mailto:${PROFILE.email}`} className="contact-main-cta">
            <span className="cta-text">{t.contactCta}</span>
            <span className="cta-arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <p className="contact-body-note">{t.contactBody}</p>

        <div className="contact-links-grid">
          <div className="contact-channels" aria-label="Direct contact channels">
            <a href={`mailto:${PROFILE.email}`} className="channel-link">
              <span className="channel-label">Email</span>
              <span className="channel-value">{PROFILE.email}</span>
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="channel-link">
              <span className="channel-label">GitHub</span>
              <span className="channel-value">github.com</span>
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="channel-link">
              <span className="channel-label">LinkedIn</span>
              <span className="channel-value">linkedin.com</span>
            </a>
          </div>
        </div>

        <div className="colophon-row">
          <p className="colophon-identity">
            © {new Date().getFullYear()} {PROFILE.name}
          </p>
          <p className="colophon-credit">
            Built with React &amp; Tailwind CSS · Quiet Ocean Edition
          </p>
        </div>
      </div>
    </footer>
  );
}
