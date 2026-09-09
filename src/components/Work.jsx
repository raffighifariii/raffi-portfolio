import { PROJECTS } from "../data.js";

export default function Work({ t, lang }) {
  return (
    <section id="work" className="section-container work-section" aria-labelledby="work-heading">
      <div className="section-header reveal">
        <span className="section-kicker" id="work-heading">{t.workSection}</span>
        <h2 className="section-title">{t.workTitle}</h2>
      </div>

      <div className="case-studies-list">
        {PROJECTS.map((project, index) => {
          const isEven = index % 2 === 1;
          const isDesktop = project.stageType === "desktop";

          return (
            <article
              key={project.title}
              className={`case-study-item reveal ${isEven ? "is-reversed" : ""}`}
              aria-labelledby={`project-title-${project.index}`}
            >
              <div className="case-study-content">
                <div className="case-study-meta">
                  <span className="case-study-index">{project.index}</span>
                  <span className="case-study-tag">{project.tag}</span>
                  <span className="case-study-year">{project.year}</span>
                </div>

                <h3 id={`project-title-${project.index}`} className="case-study-title">
                  {project.title}
                </h3>

                <p className="case-study-description">{project[lang]}</p>

                <ul className="case-study-stack" aria-label="Technologies used">
                  {project.stack.map((tech) => (
                    <li key={tech} className="stack-pill">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="case-study-cta">
                  <a
                    href={project.link}
                    className="case-study-link"
                    target={project.link && project.link !== "#" ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    <span>{t.viewProject}</span>
                    <span className="link-arrow" aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>

              <div className="case-study-visual" aria-hidden="true">
                {isDesktop ? (
                  <div className="visual-stage stage-desktop">
                    <div className="stage-topbar">
                      <span className="stage-dot" />
                      <span className="stage-dot" />
                      <span className="stage-dot" />
                      <span className="stage-url">camp-biotics.platform</span>
                    </div>
                    <div className="stage-canvas">
                      <div className="stage-wireframe-panel" />
                      <div className="stage-wireframe-lines">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="stage-watermark">
                        <span>FULL-STACK WEB PLATFORM</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="visual-stage stage-mobile">
                    <div className="phone-device-frame">
                      <div className="phone-notch" />
                      <div className="phone-screen">
                        <div className="mobile-wireframe-header" />
                        <div className="mobile-wireframe-grid">
                          <div className="mobile-card-slot" />
                          <div className="mobile-card-slot" />
                        </div>
                        <div className="stage-watermark">
                          <span>MOBILE APP CATALOG</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
