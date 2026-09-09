import { EXPERIENCES } from "../data.js";

export default function Experience({ t, lang }) {
  return (
    <section
      id="experience"
      className="section-container experience-section"
      aria-labelledby="experience-heading"
    >
      <div className="section-header reveal">
        <span className="section-kicker" id="experience-heading">
          {t.experienceSection}
        </span>
        <h2 className="section-title">{t.experienceTitle}</h2>
      </div>

      <div className="experience-timeline reveal">
        {EXPERIENCES.map((item, index) => (
          <div key={index} className="timeline-entry">
            <div className="timeline-year-marker">
              <span className="timeline-year">{item.year}</span>
              <div className="timeline-rule" aria-hidden="true" />
            </div>

            <div className="timeline-body">
              <div className="timeline-heading-row">
                <h3 className="timeline-org">{item.organization}</h3>
                <span className="timeline-role">{item.role[lang]}</span>
              </div>

              <p className="timeline-desc">{item[lang]}</p>

              {item.tech && (
                <ul className="timeline-tech-list" aria-label="Technologies and focus">
                  {item.tech.map((tItem) => (
                    <li key={tItem} className="stack-pill">
                      {tItem}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

