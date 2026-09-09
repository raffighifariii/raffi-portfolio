import { PROJECTS } from "../data.js";

export default function FloatingPreview({ previewRef, hover }) {
  return (
    <div ref={previewRef} className={`float-prev${hover !== null ? " show" : ""}`} aria-hidden="true">
      {hover !== null && (
        <div className="fp-card" style={{ background: PROJECTS[hover].grad }}>
          <span>{PROJECTS[hover].title}</span>
        </div>
      )}
    </div>
  );
}
