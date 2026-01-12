import React, { useState } from 'react';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profile: '',
    experience: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        profile: '',
        experience: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="apply" className="section" style={{ 
      background: 'linear-gradient(135deg, #f1f8e9, #e8f5e9)'
    }}>
      <div className="container">
        <h2 className="section-title">अब देर मत कीजिए – आज ही जुड़िए</h2>
        
        <div className="card fade-in">
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '40px' 
          }}>
            <p style={{ 
              fontSize: '1.4rem', 
              marginBottom: '30px',
              color: '#555',
              lineHeight: '1.6'
            }}>
              यदि आप भी
              <br />
              <span style={{ 
                color: 'var(--primary-green)', 
                fontWeight: 'bold',
                display: 'inline-block',
                margin: '10px 0'
              }}>
                ✔️ कमाई करना चाहते हैं
              </span>
              <br />
              <span style={{ 
                color: 'var(--primary-green)', 
                fontWeight: 'bold',
                display: 'inline-block',
                margin: '10px 0'
              }}>
                ✔️ आयुर्वेद को प्रमोट करना चाहते हैं
              </span>
              <br />
              <span style={{ 
                color: 'var(--primary-green)', 
                fontWeight: 'bold',
                display: 'inline-block',
                margin: '10px 0'
              }}>
                ✔️ बिना झंझट के Affiliate Income चाहते हैं
              </span>
              <br />
              तो अभी Apply करें 👇
            </p>
            
            <div style={{ 
              display: 'flex', 
              gap: '25px', 
              justifyContent: 'center', 
              marginBottom: '40px',
              flexWrap: 'wrap'
            }}>
              <a href="#apply-form" className="btn btn-gold" style={{ 
                fontSize: '1.2rem', 
                padding: '18px 45px',
                minWidth: '300px'
              }}>
                <span style={{ fontSize: '1.3rem' }}>👉</span> Apply for Affiliate Partnership
              </a>
              <a href="#apply-form" className="btn" style={{ 
                fontSize: '1.2rem', 
                padding: '18px 45px',
                minWidth: '300px',
                background: 'rgba(46, 125, 50, 0.9)'
              }}>
                <span style={{ fontSize: '1.3rem' }}>🤝</span> Join BK Arogyam Affiliate Program
              </a>
            </div>
          </div>
          
          {/* Application Form */}
          <div id="apply-form">
            {isSubmitted ? (
              <div style={{
                textAlign: 'center',
                padding: '50px 30px',
                background: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)',
                borderRadius: '15px',
                border: '3px solid var(--primary-green)'
              }}>
                <div style={{
                  fontSize: '4rem',
                  marginBottom: '20px',
                  color: 'var(--primary-green)'
                }}>
                  ✅
                </div>
                <h3 style={{ 
                  color: 'var(--dark-green)', 
                  marginBottom: '15px',
                  fontSize: '1.8rem'
                }}>
                  Application Submitted Successfully!
                </h3>
                <p style={{ 
                  fontSize: '1.1rem', 
                  color: '#555',
                  marginBottom: '20px'
                }}>
                  Thank you for your interest in BK Arogyam Affiliate Program.
                  Our team will contact you within 24 hours.
                </p>
                <p style={{ 
                  fontSize: '1rem', 
                  color: 'var(--gold)',
                  fontWeight: 'bold'
                }}>
                  Check your email for confirmation and next steps.
                </p>
              </div>
            ) : (
              <>
                <h3 style={{ 
                  textAlign: 'center', 
                  color: 'var(--dark-green)', 
                  marginBottom: '30px',
                  fontSize: '1.8rem'
                }}>
                  Application Form
                </h3>
                
                <form onSubmit={handleSubmit} style={{ maxWidth: '700px', margin: '0 auto' }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '25px',
                    marginBottom: '30px'
                  }}>
                    <div className="form-group">
                      <label>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-control"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-control"
                        placeholder="Enter your email address"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="form-control"
                        placeholder="Enter your WhatsApp number"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label>
                        Your Profile / Profession *
                      </label>
                      <select
                        name="profile"
                        value={formData.profile}
                        onChange={handleChange}
                        required
                        className="form-control"
                      >
                        <option value="">Select your profile</option>
                        <option value="youtuber">YouTuber / Content Creator</option>
                        <option value="influencer">Social Media Influencer</option>
                        <option value="coach">Health / Wellness Coach</option>
                        <option value="ayurveda">Ayurveda Promoter / Practitioner</option>
                        <option value="mlm">MLM / Network Marketing Professional</option>
                        <option value="affiliate">Affiliate Marketer</option>
                        <option value="blogger">Blogger / Website Owner</option>
                        <option value="group_admin">Telegram/WhatsApp Group Admin</option>
                        <option value="medical">Medical Professional</option>
                        <option value="student">Student</option>
                        <option value="housewife">Housewife / Home Maker</option>
                        <option value="working">Working Professional</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label>
                        Experience Level *
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        className="form-control"
                      >
                        <option value="">Select experience level</option>
                        <option value="beginner">Beginner (No experience)</option>
                        <option value="intermediate">Intermediate (Some experience)</option>
                        <option value="advanced">Advanced (Experienced)</option>
                        <option value="professional">Professional (Expert)</option>
                      </select>
                    </div>
                    
                    <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                      <label>
                        Why do you want to join BK Arogyam Affiliate Program?
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Share your motivation and expectations..."
                        rows="4"
                        style={{ resize: 'vertical' }}
                      ></textarea>
                    </div>
                  </div>
                  
                  <div style={{
                    background: 'rgba(46, 125, 50, 0.05)',
                    padding: '20px',
                    borderRadius: '10px',
                    marginBottom: '30px',
                    borderLeft: '4px solid var(--primary-green)'
                  }}>
                    <p style={{ 
                      fontSize: '0.9rem', 
                      color: '#555',
                      textAlign: 'center'
                    }}>
                      By submitting this form, you agree to our Terms & Conditions and Privacy Policy.
                      Our team will contact you within 24 hours for the next steps.
                    </p>
                  </div>
                  
                  <div style={{ textAlign: 'center' }}>
                    <button 
                      type="submit" 
                      className="btn btn-gold" 
                      style={{ 
                        fontSize: '1.2rem', 
                        padding: '18px 50px',
                        minWidth: '300px'
                      }}
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
          
          {/* Alternative Contact Methods */}
          <div style={{
            marginTop: '50px',
            padding: '30px',
            background: 'linear-gradient(to right, #fff3e0, #ffecb3)',
            borderRadius: '15px',
            textAlign: 'center'
          }}>
            <h3 style={{ 
              color: 'var(--dark-gold)', 
              marginBottom: '20px',
              fontSize: '1.5rem'
            }}>
              Prefer to Contact Directly?
            </h3>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '30px',
              marginTop: '20px'
            }}>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: '#25D366',
                  color: 'white',
                  padding: '12px 25px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(37, 211, 102, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <span style={{ fontSize: '1.3rem' }}>💬</span>
                WhatsApp Now
              </a>
              
              <a href="tel:+919999999999" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'var(--primary-green)',
                  color: 'white',
                  padding: '12px 25px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(46, 125, 50, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <span style={{ fontSize: '1.3rem' }}>📞</span>
                Call Us Now
              </a>
              
              <a href="mailto:affiliate@bkarogyam.com" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: '#EA4335',
                  color: 'white',
                  padding: '12px 25px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(234, 67, 53, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <span style={{ fontSize: '1.3rem' }}>✉️</span>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;