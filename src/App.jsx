import { useState, useEffect, useRef } from "react";
import { T } from "./data.js";
import Aurora from "./components/Aurora.jsx";
import Sidebar from "./components/Sidebar.jsx";
import About from "./components/About.jsx";
import Work from "./components/Work.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import FloatingPreview from "./components/FloatingPreview.jsx";

export default function App() {
  const rootRef = useRef(null);
  const previewRef = useRef(null);
  const reducedRef = useRef(false);
  const [lang, setLang] = useState("en");
  const [active, setActive] = useState("about");
  const [mounted, setMounted] = useState(false);
  const [hover, setHover] = useState(null);
  const t = T[lang];

  useEffect(() => {
    const el = rootRef.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    reducedRef.current = reduced;
    if (reduced) el.setAttribute("data-reduced", "true");
    const raf = requestAnimationFrame(() => setMounted(true));

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
      if (previewRef.current)
        previewRef.current.style.transform = `translate(${e.clientX + 24}px, ${e.clientY - 60}px)`;
    };
    if (!reduced) window.addEventListener("mousemove", onMove);

    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      el.style.setProperty("--prog", `${Math.min(p * 100, 100)}%`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const ro = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    el.querySelectorAll(".reveal").forEach((r) => ro.observe(r));

    const so = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    el.querySelectorAll("section[id]").forEach((s) => so.observe(s));

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      ro.disconnect();
      so.disconnect();
    };
  }, []);

  const tilt = (e) => {
    if (reducedRef.current) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-py * 5}deg) rotateY(${px * 5}deg) translateY(-4px)`;
  };
  const untilt = (e) => { e.currentTarget.style.transform = ""; };

  return (
    <div className={`pf-root${mounted ? " is-mounted" : ""}`} ref={rootRef}>
      <div className="progress" aria-hidden="true" />
      <Aurora />
      <FloatingPreview previewRef={previewRef} hover={hover} />

      <div className="shell">
        <Sidebar t={t} lang={lang} setLang={setLang} active={active} />
        <main className="content">
          <About t={t} />
          <Work t={t} lang={lang} setHover={setHover} tilt={tilt} untilt={untilt} />
          <Skills t={t} lang={lang} tilt={tilt} untilt={untilt} />
          <Contact t={t} tilt={tilt} untilt={untilt} />
        </main>
      </div>
    </div>
  );
}
