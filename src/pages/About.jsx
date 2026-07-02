import resumeData from "../data/resumeData.js";

export default function About() {
  return (
    <section className="section" style={{ paddingTop: 72 }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">About</span>
          <h2>A bit about how I work.</h2>
          <p>{resumeData.about}</p>
        </div>

        <div className="card-grid">
          <div className="card">
            <h3 style={{ fontSize: "1.1rem", color: "var(--cyan)" }}>Soft Skills</h3>
            <div className="stack-items">
              {resumeData.skills.soft.map((s) => (
                <span className="chip" key={s}>{s}</span>
              ))}
            </div>
          </div>
          <div className="card">
            <h3 style={{ fontSize: "1.1rem", color: "var(--amber)" }}>Certifications</h3>
            <ul style={{ margin: 0, paddingLeft: 20, color: "var(--text-dim)" }}>
              {resumeData.certificates.map((c) => (
                <li key={c} style={{ marginBottom: 8 }}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
