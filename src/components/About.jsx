export default function About({ t }) {
  return (
    <section id="about" className="section-container about-section" aria-labelledby="about-heading">
      <div className="section-header reveal">
        <span className="section-kicker" id="about-heading">{t.aboutSection}</span>
        <h2 className="section-title">{t.aboutTitle}</h2>
      </div>

      <div className="about-editorial-grid reveal">
        <div className="about-statement-col">
          <p className="about-lead-statement">{t.aboutLead}</p>
          
          <div className="about-education-block">
            <span className="education-kicker">{t.educationTitle}</span>
            <p className="education-school">{t.educationSchool}</p>
            <p className="education-degree">{t.educationDegree}</p>
          </div>
        </div>

        <div className="about-biography-col">
          {t.about.map((paragraph, index) => (
            <p key={index} className="about-body-text">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
