export default function Navbar({ t, lang, setLang, active }) {
  const navItems = [
    ["about", t.nav.about],
    ["work", t.nav.work],
    ["capabilities", t.nav.capabilities],
    ["experience", t.nav.experience],
    ["contact", t.nav.contact],
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#" className="brand-monogram" aria-label="Raffi Ghifari - Back to top">
          RG<span className="brand-dot">.</span>
        </a>

        <nav className="primary-nav" aria-label="Primary Navigation">
          <ul className="nav-list">
            {navItems.map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`nav-link${active === id ? " is-active" : ""}`}
                  aria-current={active === id ? "true" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lang-toggle" role="group" aria-label="Language selection">
          {["en", "id"].map((l) => (
            <button
              key={l}
              type="button"
              className={`lang-btn${lang === l ? " is-active" : ""}`}
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

