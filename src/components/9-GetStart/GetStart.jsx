import React, { useState } from 'react';
import './GetStart.css';

const GetStart = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const services = [
    'Consultation',
    'Interior Design',
    'Videography',
    'Feasibility Study',
    'Business Construction',
    'Branding',
    'Human Resources',
    'Ministerial Support',
    'Photography',
    'Accounting',
    'Location Search',
    'Bloggers Connection',
    'Website/Application Design & Development',
    'Business Performance Analysis / Follow Up',
    'Social Media Marketing & Management',
    'Negotiation',
    'Financial Resources'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <section className="get-start-section">
      <div className="get-start-container">
        <div className="contact-info">
          <h2>Get Started</h2>
          <div className="address">
            <p>Mazaya 2, 15th Floor,</p>
            <p>Khalid Ibn Alwaleed St.</p>
            <p>KBT, Kuwait City</p>
          </div>
          
          <div className="contact-details">
            <div className="contact-item">
              <span className="label">Email:</span>
              <a href="mailto:info@mubaader.com">info@mubaader.com</a>
            </div>
            <div className="contact-item">
              <span className="label">Office:</span>
              <a href="tel:+96522282205">+965 22282205</a>
            </div>
            <div className="contact-item">
              <span className="label">Fax:</span>
              <span>+965 22282204</span>
            </div>
            <div className="contact-item">
              <span className="label">Appointment:</span>
              <a href="tel:+96555990313">+965 55990313</a>
            </div>
          </div>
        </div>

        <div className="consultation-form">
          <h2>Consultation Request</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="form-group">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select Service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit Request
            </button>
          </form>

          {showSuccess && (
            <div className="success-message">
              <h3>Thank you!</h3>
              <p>Your Consultation Request has been submitted.</p>
              <p>You will be contacted shortly.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GetStart;
