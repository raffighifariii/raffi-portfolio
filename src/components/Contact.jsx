import { PROFILE } from "../data.js";

export default function Contact({ t, tilt, untilt }) {
  return (
    <section id="contact" className="block">
      <div className="contact glass reveal" onMouseMove={tilt} onMouseLeave={untilt}>
        <h2>{t.contactTitle}</h2>
        <p className="body">{t.contactBody}</p>
        <div className="contact-links">
          <a href={`mailto:${PROFILE.email}`} className="btn">{t.email} ↗</a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="btn ghost">GitHub</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="btn ghost">LinkedIn</a>
        </div>
      </div>
      <p className="copy">© {new Date().getFullYear()} {PROFILE.name} · Built with React + Tailwind</p>
    </section>
  );
}
