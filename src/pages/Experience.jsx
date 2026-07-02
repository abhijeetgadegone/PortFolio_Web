import resumeData from "../data/resumeData.js";

export default function Experience() {
  return (
    <section className="section" style={{ paddingTop: 72 }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Experience</span>
          <h2>Where I've worked.</h2>
          <p>Two internships, five shipped applications, and a lot of REST APIs.</p>
        </div>

        <div className="timeline">
          {resumeData.experience.map((job) => (
            <div className="timeline-item" key={job.company}>
              <div className="timeline-period">{job.period}</div>
              <div className="timeline-content">
                <h3>{job.company}</h3>
                <div className="timeline-role">{job.role}</div>
                <ul>
                  {job.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                <div className="stack-items">
                  {job.stack.map((s) => (
                    <span className="chip" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
