import resumeData from "../data/resumeData.js";

export default function Contact() {
  return (
    <section className="section" style={{ paddingTop: 72 }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Contact</span>
          <h2>Let's build something.</h2>
          <p>Open to full-stack roles and freelance work. Reach out directly through any of the channels below.</p>
        </div>

        <div className="contact-list" style={{ maxWidth: 480 }}>
          <a href={`mailto:${resumeData.email}`}>✉ &nbsp; {resumeData.email}</a>
          <a href={`tel:${resumeData.phone.replace(/\s/g, "")}`}>☎ &nbsp; {resumeData.phone}</a>
          <a href={resumeData.github} target="_blank" rel="noreferrer">⌥ &nbsp; GitHub — abhijeetgadegone</a>
          <a href={resumeData.linkedin} target="_blank" rel="noreferrer">in &nbsp; LinkedIn — Abhijeet Gadegone</a>
        </div>
      </div>
    </section>
  );
}
