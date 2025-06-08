import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

// Initialize EmailJS with your public key
emailjs.init("NrD3gk_yQi60MCxq9");

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    // Add timestamp and source information
    const formDataWithMeta = new FormData(form.current);
    formDataWithMeta.append('timestamp', new Date().toLocaleString());
    formDataWithMeta.append('source', 'Personal Portfolio Website');
    formDataWithMeta.append('to_email', 'azeer.ltifi@gmail.com');

    emailjs.sendForm(
      'service_cgtbben',
      'template_7q78avc',
      form.current
    )
      .then((result) => {
        console.log('EmailJS success:', result);
        setStatus('Message sent successfully! I will get back to you soon.');
        setFormData({
          user_name: '',
          user_email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setStatus(`Failed to send message: ${error.text || 'Please try again or contact me directly at azeer.ltifi@gmail.com'}`);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p className="contact-intro">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>
        
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">
                <span className="label-text">Name</span>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className={formData.user_name ? 'has-value' : ''}
                />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <span className="label-text">Email</span>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                  className={formData.user_email ? 'has-value' : ''}
                />
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">
              <span className="label-text">Subject</span>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject of your message"
                className={formData.subject ? 'has-value' : ''}
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="message">
              <span className="label-text">Message</span>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                rows="6"
                className={formData.message ? 'has-value' : ''}
              />
            </label>
          </div>

          <button 
            type="submit" 
            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            <span className="button-text">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </span>
            <span className="button-icon">
              {isSubmitting ? '⌛' : '→'}
            </span>
          </button>

          {status && (
            <div className={`status-message ${status.includes('success') ? 'success' : 'error'}`}>
              {status}
            </div>
          )}
        </form>

        <div className="direct-contact">
          <p>Or contact me directly at: <a href="mailto:azeer.ltifi@gmail.com">azeer.ltifi@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
