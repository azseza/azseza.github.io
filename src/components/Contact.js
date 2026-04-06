import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import './Contact.css';

emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "NrD3gk_yQi60MCxq9");

const Contact = () => {
  const { t } = useTranslation();
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

    const formDataWithMeta = new FormData(form.current);
    formDataWithMeta.append('timestamp', new Date().toLocaleString());
    formDataWithMeta.append('source', 'Personal Portfolio Website');
    formDataWithMeta.append('to_email', 'azeer.ltifi@gmail.com');

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_cgtbben',
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_7q78avc',
      form.current
    )
      .then(() => {
        setStatus('success');
        setFormData({
          user_name: '',
          user_email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-header">
          <h1>{t('contact.title', { defaultValue: 'Get In Touch' })}</h1>
          <p className="contact-intro">
            {t('contact.intro', { defaultValue: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!" })}
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">
                <span className="label-text">{t('contact.form.name', { defaultValue: 'Name' })}</span>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.form.namePlaceholder', { defaultValue: 'Your name' })}
                  className={formData.user_name ? 'has-value' : ''}
                />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <span className="label-text">{t('contact.form.email', { defaultValue: 'Email' })}</span>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.form.emailPlaceholder', { defaultValue: 'Your email' })}
                  className={formData.user_email ? 'has-value' : ''}
                />
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">
              <span className="label-text">{t('contact.form.subject', { defaultValue: 'Subject' })}</span>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder={t('contact.form.subjectPlaceholder', { defaultValue: 'Subject of your message' })}
                className={formData.subject ? 'has-value' : ''}
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="message">
              <span className="label-text">{t('contact.form.message', { defaultValue: 'Message' })}</span>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder={t('contact.form.messagePlaceholder', { defaultValue: 'Your message' })}
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
              {isSubmitting
                ? t('contact.form.submitting', { defaultValue: 'Sending...' })
                : t('contact.form.submit', { defaultValue: 'Send Message' })}
            </span>
          </button>

          {status && (
            <div className={`status-message ${status}`}>
              {status === 'success'
                ? t('contact.status.success', { defaultValue: 'Message sent successfully! I will get back to you soon.' })
                : t('contact.status.error', {
                    defaultValue: 'Failed to send message. Please try again or contact me directly at azeer.ltifi@gmail.com',
                    error: ''
                  })}
            </div>
          )}
        </form>

        <div className="direct-contact">
          <p>{t('contact.direct', { defaultValue: 'Or contact me directly at:' })} <a href="mailto:azeer.ltifi@gmail.com">azeer.ltifi@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
