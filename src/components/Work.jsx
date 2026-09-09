import { PROJECTS } from "../data.js";

export default function Work({ t, lang, setHover, tilt, untilt }) {
  return (
    <section id="work" className="block">
      <h2 className="reveal">{t.workTitle}</h2>
      <div className="work-list">
        {PROJECTS.map((p, i) => (
          <a
            href={p.link}
            key={i}
            className="row glass reveal"
            target={p.link && p.link !== "#" ? "_blank" : undefined}
            rel="noreferrer"
            onMouseEnter={() => setHover(i)}
            onMouseLeave={(e) => { setHover(null); untilt(e); }}
            onMouseMove={tilt}
          >
            <div className="row-year">{p.year}</div>
            <div className="row-main">
              <div className="row-top">
                <h3>{p.title} <span className="arrow">↗</span></h3>
                <span className="row-tag">{p.tag}</span>
              </div>
              <p>{p[lang]}</p>
              <ul className="stack">
                {p.stack.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
