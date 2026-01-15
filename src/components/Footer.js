import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Footer.css';
import SuccessAnimation from './SuccessAnimation';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carType: '',
    trim: '',
    yearModel: '',
    purchaseDate: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const carOptions = {
    'Honda Accord': ['Ex', 'Lx', 'Sport', 'Touring'],
    'Honda Civic': ['Ex', 'Lx', 'Sport', 'Touring'],
    'Mercedes Benz': ['C250', 'C300', 'C350']
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'carType') {
      setFormData({
        ...formData,
        carType: value,
        trim: '' // Reset trim when car type changes
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert('EmailJS is not configured. Please check your environment variables.');
      setIsSubmitting(false);
      return;
    }

    try {
      if (!emailjs.isInitialized) {
        emailjs.init(publicKey);
      }

      const currentTime = new Date().toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      const messageContent = `A new contact form submission has been received from The Simpsons Autos website.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Car Type: ${formData.carType}
Trim: ${formData.trim}
Year Model: ${formData.yearModel}
Purchase Date: ${formData.purchaseDate}

Please respond at your earliest convenience.`;

      const templateParams = {
        name: formData.name,
        email: formData.email,
        yearModel: formData.yearModel,
        title: 'The Simpsons Autos - Purchase Inquiry',
        time: currentTime,
        message: messageContent
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        carType: '',
        trim: '',
        yearModel: '',
        purchaseDate: ''
      });

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again later.');
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
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-row">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="date"
                name="purchaseDate"
                placeholder="Purchase Date"
                value={formData.purchaseDate}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-row">
              <select
                name="carType"
                value={formData.carType}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="" disabled>Select Car Type</option>
                <option value="Honda Accord">Honda Accord</option>
                <option value="Honda Civic">Honda Civic</option>
                <option value="Mercedes Benz">Mercedes Benz</option>
              </select>
              <select
                name="trim"
                value={formData.trim}
                onChange={handleChange}
                required
                className="form-input"
                disabled={!formData.carType}
              >
                <option value="" disabled>Select Trim</option>
                {formData.carType && carOptions[formData.carType].map(trim => (
                  <option key={trim} value={trim}>{trim}</option>
                ))}
              </select>
              <select
                name="yearModel"
                value={formData.yearModel}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="" disabled>Year Model</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
            </div>
            <div className="form-row">
              <button
                type="submit"
                className="form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
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
