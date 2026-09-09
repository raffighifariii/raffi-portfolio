import { useState, useEffect, useRef } from "react";
import { T } from "./data.js";
import Aurora from "./components/Aurora.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Work from "./components/Work.jsx";
import Capabilities from "./components/Capabilities.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const rootRef = useRef(null);
  const [lang, setLang] = useState("en");
  const [active, setActive] = useState("hero");
  const [mounted, setMounted] = useState(false);
  const t = T[lang];

  useEffect(() => {
    const el = rootRef.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) el.setAttribute("data-reduced", "true");
    const raf = requestAnimationFrame(() => setMounted(true));

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    if (!reduced) window.addEventListener("mousemove", onMove);

    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      el.style.setProperty("--prog", `${Math.min(p * 100, 100)}%`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const ro = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.08 }
    );
    el.querySelectorAll(".reveal").forEach((r) => ro.observe(r));

    const so = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -45% 0px" }
    );
    el.querySelectorAll("section[id], footer[id]").forEach((s) => so.observe(s));

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      ro.disconnect();
      so.disconnect();
    };
  }, []);

  return (
    <div className={`pf-root${mounted ? " is-mounted" : ""}`} ref={rootRef}>
      <div className="progress" aria-hidden="true" />
      <Aurora />

      <Navbar t={t} lang={lang} setLang={setLang} active={active} />

      <main id="main-content" className="editorial-main">
        <Hero t={t} />
        <About t={t} />
        <Work t={t} lang={lang} />
        <Capabilities t={t} lang={lang} />
        <Experience t={t} lang={lang} />
      </main>

      <Contact t={t} />
    </div>
  );
}
