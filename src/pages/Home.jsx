import { Link } from "react-router-dom";
import resumeData from "../data/resumeData.js";
import StackVisual from "../components/StackVisual.jsx";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Full Stack Developer — Java · Spring Boot · React</span>
            <h1>
              I build software that <span className="highlight">works end to end.</span>
            </h1>
            <p className="hero-lead">{resumeData.tagline}</p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">View Projects</Link>
              <Link to="/contact" className="btn btn-ghost">Get in Touch</Link>
            </div>
          </div>
          <StackVisual />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Quick Summary</span>
            <h2>From database to browser, I own the whole stack.</h2>
            <p>{resumeData.about}</p>
          </div>
          <div className="card-grid">
            <div className="card">
              <h3>2</h3>
              <p>Internships completed in full-stack development</p>
            </div>
            <div className="card">
              <h3>5+</h3>
              <p>Production-style applications shipped</p>
            </div>
            <div className="card">
              <h3>40%</h3>
              <p>Reduction in manual workflow time on a CRM &amp; reporting suite</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
