import resumeData from "../data/resumeData.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© {year} {resumeData.name}</span>
        <div className="footer-links">
          <a href={resumeData.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={resumeData.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${resumeData.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
