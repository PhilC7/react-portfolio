import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    emailjs.sendForm('service_6aek6pb', 'contact_form', e.target, 'HRNtxseJe5LYO6Hy0')
      .then((result) => {
        console.log(result.text);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        // Reset form to blank after submit
        setTimeout(() => {
          setSubmitted(false);
        }, 2000);
      }, (error) => {
        console.error(error.text);
      });
  };

  return (
    <div className="contact-form container container-fluid contact-form">
      {submitted ? (
        <div className="alert alert-success" role="alert">
          Your message has been sent successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name"></label>
            <input
              type="text"
              className="form-control mb-4"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              type="email"
              className="form-control mb-4"
              id="email"
              name="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message"></label>
            <textarea
              className="form-control mb-4"
              id="message"
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn w-100">
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
