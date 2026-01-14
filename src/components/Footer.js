import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Footer.css';
import SuccessAnimation from './SuccessAnimation';

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration
    // Get credentials from environment variables
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    const recipientEmail = process.env.REACT_APP_RECIPIENT_EMAIL || 'pkosimpson@gmail.com';

    // Debug: Log environment variables (remove in production)
    console.log('EmailJS Config:', {
      serviceId: serviceId ? '✓ Set' : '✗ Missing',
      templateId: templateId ? '✓ Set' : '✗ Missing',
      publicKey: publicKey ? '✓ Set' : '✗ Missing'
    });

    // Check if EmailJS is configured
    if (!serviceId || !templateId || !publicKey) {
      alert('EmailJS is not configured. Please restart the development server after creating the .env file. See README.md for instructions.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Initialize EmailJS if not already initialized
      if (!emailjs.isInitialized) {
        emailjs.init(publicKey);
      }

      // Template parameters - must match your EmailJS template variables exactly
      // Based on your template: {{name}}, {{email}}, {{message}}, {{title}}, {{time}}
      const currentTime = new Date().toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      // Build message with all contact details
      const messageContent = `A new contact form submission has been received from The Simpsons Autos website.

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}

Please respond at your earliest convenience.`;

      const templateParams = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        title: 'The Simpsons Autos',
        time: currentTime,
        message: messageContent
      };

      console.log('=== EmailJS Configuration ===');
      console.log('Service ID:', serviceId);
      console.log('Template ID:', templateId);
      console.log('Public Key:', publicKey ? `${publicKey.substring(0, 10)}...` : 'Missing');
      console.log('Template Parameters:', templateParams);

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('✅ Email sent successfully!', response);

      console.log('Email sent successfully:', response);

      setShowSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: ''
      });

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('EmailJS Error Details:', {
        error,
        text: error.text,
        status: error.status,
        serviceId,
        templateId
      });
      
      let errorMessage = '';
      
      // Show actual EmailJS error message first
      if (error.text) {
        errorMessage = `EmailJS Error: ${error.text}\n\n`;
      } else if (error.message) {
        errorMessage = `Error: ${error.message}\n\n`;
      }
      
      // Add specific guidance based on error status
      if (error.status === 400) {
        errorMessage += `Invalid template configuration (Status 400).\n\n` +
          `Make sure your EmailJS template includes these variables:\n\n` +
          `• {{name}}\n` +
          `• {{email}}\n` +
          `• {{message}}\n` +
          `• {{title}}\n` +
          `• {{time}}\n\n` +
          `The code is sending:\n` +
          `• name: "${formData.firstName} ${formData.lastName}"\n` +
          `• email: "${formData.email}"\n` +
          `• title: "The Simpsons Autos"\n` +
          `• message: (contact details)\n` +
          `• time: (current timestamp)\n\n` +
          `Check browser console (F12) for full details.\n` +
          `Template ID: ${templateId}`;
      } else if (error.status === 401) {
        errorMessage += 'Authentication failed. Please check your public key.';
      } else if (error.status === 404) {
        errorMessage += `Service or template not found.\n\n` +
          `Please verify:\n` +
          `• Service ID: ${serviceId}\n` +
          `• Template ID: ${templateId}\n` +
          `• Both exist in your EmailJS dashboard`;
      } else {
        errorMessage += 'Please check your EmailJS configuration and try again.';
      }
      
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <span className="logo-icon">🚗</span>
            <span className="logo-text">THE SIMPSONS AUTOS</span>
          </div>
          <div className="footer-contact">
            <p className="contact-item">East Legon, Accra</p>
            <p className="contact-item">+233 024-992-37-26</p>
            <p className="contact-item">pkosimpson@gmail.com</p>
          </div>
          <div className="footer-social">
            <a href="#" className="social-icon" aria-label="Facebook">📘</a>
            <a href="#" className="social-icon" aria-label="Twitter">🐦</a>
            <a href="#" className="social-icon" aria-label="Instagram">📷</a>
            <a href="#" className="social-icon" aria-label="YouTube">▶️</a>
          </div>
        </div>
        <div className="footer-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-row">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="form-input form-input-full"
              />
              <button 
                type="submit" 
                className="form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">Copyright © 2024 The Simpsons Autos</p>
        <p className="footer-developer">Developed by Rodney Simpson</p>
      </div>
      {showSuccess && <SuccessAnimation />}
    </footer>
  );
};

export default Footer;
