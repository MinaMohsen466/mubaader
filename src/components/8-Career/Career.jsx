import React, { useState } from 'react';
import './Career.css';

const Career = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: 'male',
    position: '',
    experience: '',
    education: '',
    resume: null
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Validate file
      if (!formData.resume) {
        throw new Error('Please upload your resume');
      }

      if (formData.resume.type !== 'application/pdf') {
        throw new Error('Only PDF files are allowed');
      }

      if (formData.resume.size > 5 * 1024 * 1024) {
        throw new Error('File size should not exceed 5MB');
      }

      // Simulate form submission
      console.log('Form Data:', {
        ...formData,
        resume: formData.resume.name
      });

      // Show success message
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        gender: 'male',
        position: '',
        experience: '',
        education: '',
        resume: null
      });

      // Reset file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';

      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);

    } catch (error) {
      setError(error.message || 'Failed to submit application');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="career-section">
      <div className="career-container">
        <div className="career-header">
          <h1 className="career-title">Career with Mubaader</h1>
          <p className="career-quote">
            "Have the courage to follow your heart and intuition. They somehow know what you truly want to become."
          </p>
          <p className="quote-author">– Steve Jobs</p>
        </div>

        <form className="career-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-control"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Gender</label>
            <div className="gender-group">
              <div className="gender-option">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="gender-option">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="position">Desired Position</label>
            <input
              type="text"
              id="position"
              name="position"
              className="form-control"
              value={formData.position}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="experience">Years of Experience</label>
            <input
              type="number"
              id="experience"
              name="experience"
              className="form-control"
              value={formData.experience}
              onChange={handleChange}
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="education">Education Level</label>
            <select
              id="education"
              name="education"
              className="form-control"
              value={formData.education}
              onChange={handleChange}
              required
            >
              <option value="">Select Education Level</option>
              <option value="high_school">High School</option>
              <option value="bachelors">Bachelor's Degree</option>
              <option value="masters">Master's Degree</option>
              <option value="phd">Ph.D.</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="resume">Upload Resume (PDF)</label>
            <input
              type="file"
              id="resume"
              name="resume"
              className="form-control"
              accept=".pdf"
              onChange={handleChange}
              required
            />
            <small className="file-hint">Maximum file size: 5MB</small>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>

          {error && (
            <div className="error-message show">
              {error}
            </div>
          )}

          {showSuccess && (
            <div className="success-message show">
              <h3>Thank you for your application!</h3>
              <p>We will review it and get back to you soon.</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Career;
