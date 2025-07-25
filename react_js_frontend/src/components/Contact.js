import React, { useState } from 'react';
import './Contact.css';

// PUBLIC_INTERFACE
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Form could post to an endpoint in production, but for now, just show thank you
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h2 className="section-title">Contact</h2>
      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text" name="name" placeholder="Your Name"
            value={form.name} onChange={handleChange} required
          />
          <input
            type="email" name="email" placeholder="Your Email"
            value={form.email} onChange={handleChange} required
          />
          <textarea
            name="message" placeholder="Your Message" rows={4}
            value={form.message} onChange={handleChange} required
          />
          <button type="submit" className="btn-accent">Send Message</button>
        </form>
      ) : (
        <div className="contact-thankyou">
          <h3>Thank you!</h3>
          <p>We'll be in touch soon.</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
