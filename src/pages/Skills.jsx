import resumeData from "../data/resumeData.js";

const groups = [
  { title: "Languages", items: resumeData.skills.languages },
  { title: "Java Concepts", items: resumeData.skills.javaConcepts },
  { title: "Frameworks", items: resumeData.skills.frameworks },
  { title: "Frontend", items: resumeData.skills.frontend },
  { title: "Databases", items: resumeData.skills.databases },
  { title: "Tools", items: resumeData.skills.tools },
];

export default function Skills() {
  return (
    <section className="section" style={{ paddingTop: 72 }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Skills</span>
          <h2>The toolbox.</h2>
          <p>Backend-heavy foundation in Java and Spring Boot, paired with a frontend built in React.</p>
        </div>

        <div className="card-grid">
          {groups.map((g) => (
            <div className="card skill-group" key={g.title}>
              <h3>{g.title}</h3>
              <div className="stack-items">
                {g.items.map((item) => (
                  <span className="chip" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
