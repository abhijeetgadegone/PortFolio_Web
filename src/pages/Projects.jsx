import resumeData from "../data/resumeData.js";

export default function Projects() {
  return (
    <section className="section" style={{ paddingTop: 72 }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Projects</span>
          <h2>Things I've built.</h2>
          <p>A mix of internship deliverables and self-driven builds, spanning auth, real-time data, and booking flows.</p>
        </div>

        <div className="card-grid">
          {resumeData.projects.map((proj) => (
            <div className="card" key={proj.name}>
              <h3 style={{ fontSize: "1.25rem" }}>{proj.name}</h3>
              <p>{proj.description}</p>
              <ul style={{ margin: "0 0 16px", paddingLeft: 20, color: "var(--text-dim)" }}>
                {proj.points.map((p, i) => (
                  <li key={i} style={{ marginBottom: 6 }}>{p}</li>
                ))}
              </ul>
              <div className="stack-items">
                {proj.tags.map((t) => (
                  <span className="chip" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
