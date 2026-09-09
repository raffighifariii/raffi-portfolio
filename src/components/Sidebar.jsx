import { PROFILE } from "../data.js";

export default function Sidebar({ t, lang, setLang, active }) {
  const nav = [
    ["about", t.nav.about],
    ["work", t.nav.work],
    ["skills", t.nav.skills],
    ["contact", t.nav.contact],
  ];

  return (
    <aside className="side">
      <div className="side-inner">
        <div className="id-block">
          <a href="#about" className="name grad-text">{PROFILE.name}</a>
          <p className="role">{t.role}</p>
          <p className="intro">{t.intro}</p>
          <span className="status"><i /> {t.status}</span>
        </div>

        <nav className="side-nav">
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? "on" : ""}>
              <span className="line" /> {label}
            </a>
          ))}
        </nav>

        <div className="side-foot">
          <div className="socials">
            <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${PROFILE.email}`}>Email</a>
          </div>
          <div className="lang">
            {["en", "id"].map((l) => (
              <button key={l} className={lang === l ? "on" : ""} onClick={() => setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
