import { useState } from "react";
import resumeData from "../data/resumeData.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${resumeData.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section" style={{ paddingTop: 72 }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Contact</span>
          <h2>Let's build something.</h2>
          <p>Open to full-stack roles and freelance work. Reach out directly, or send a message below.</p>
        </div>

        <div className="contact-grid">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required value={form.message} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>

          <div className="contact-list">
            <a href={`mailto:${resumeData.email}`}>✉ &nbsp; {resumeData.email}</a>
            <a href={`tel:${resumeData.phone.replace(/\s/g, "")}`}>☎ &nbsp; {resumeData.phone}</a>
            <a href={resumeData.github} target="_blank" rel="noreferrer">⌥ &nbsp; GitHub — abhijeetgadegone</a>
            <a href={resumeData.linkedin} target="_blank" rel="noreferrer">in &nbsp; LinkedIn — Abhijeet Gadegone</a>
          </div>
        </div>
      </div>
    </section>
  );
}
