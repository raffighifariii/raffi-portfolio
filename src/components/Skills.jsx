import {
  SiReact, SiLaravel, SiVite, SiTailwindcss, SiTypescript,
  SiJavascript, SiPhp, SiGit, SiMysql, SiFigma,
} from "react-icons/si";
import { LOGOS, SKILLS } from "../data.js";

// Map each data key to its react-icons component.
const ICONS = {
  react: SiReact,
  laravel: SiLaravel,
  vite: SiVite,
  tailwindcss: SiTailwindcss,
  typescript: SiTypescript,
  javascript: SiJavascript,
  php: SiPhp,
  git: SiGit,
  mysql: SiMysql,
  figma: SiFigma,
};

export default function Skills({ t, lang, tilt, untilt }) {
  return (
    <section id="skills" className="block">
      <h2 className="reveal">{t.skillsTitle}</h2>

      <div className="logo-grid reveal">
        {LOGOS.map(({ key, brand }) => {
          const Icon = ICONS[key];
          if (!Icon) return null;
          // --brand drives the hover color via CSS.
          return (
            <div className="logo" key={key} style={{ "--brand": brand }} title={key}>
              <Icon />
            </div>
          );
        })}
      </div>

      <div className="skills">
        {SKILLS.map((g) => (
          <div key={g.en} className="skill-group glass reveal" onMouseMove={tilt} onMouseLeave={untilt}>
            <h4>{g[lang]}</h4>
            <ul>{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}
