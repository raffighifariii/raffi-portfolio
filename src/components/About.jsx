export default function About({ t }) {
  return (
    <section id="about" className="block">
      <h2 className="reveal">{t.aboutTitle}</h2>
      {t.about.map((p, i) => (
        <p key={i} className="body reveal">{p}</p>
      ))}
    </section>
  );
}
