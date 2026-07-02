import resumeData from "../data/resumeData.js";

export default function Education() {
  return (
    <section className="section" style={{ paddingTop: 72 }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Education</span>
          <h2>Academic background.</h2>
        </div>

        <div className="card-grid">
          {resumeData.education.map((edu) => (
            <div className="card edu-card" key={edu.school}>
              <div>
                <div className="edu-degree">{edu.degree}</div>
                <h3>{edu.school}</h3>
                <p style={{ margin: 0 }}>{edu.detail}</p>
              </div>
              <div className="edu-period">{edu.period}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
