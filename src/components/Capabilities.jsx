import { CAPABILITIES } from "../data.js";

export default function Capabilities({ t, lang }) {
  return (
    <section
      id="capabilities"
      className="section-container capabilities-section"
      aria-labelledby="capabilities-heading"
    >
      <div className="section-header reveal">
        <span className="section-kicker" id="capabilities-heading">
          {t.capabilitiesSection}
        </span>
        <h2 className="section-title">{t.capabilitiesTitle}</h2>
      </div>

      <div className="capabilities-grid reveal">
        {CAPABILITIES.map((group) => (
          <div key={group.index} className="capability-block">
            <div className="capability-header">
              <span className="capability-index">{group.index}</span>
              <h3 className="capability-name">{group[lang]}</h3>
            </div>

            <ul className="capability-items-list">
              {group.items.map((item) => (
                <li key={item} className="capability-item">
                  <span className="item-bullet" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

