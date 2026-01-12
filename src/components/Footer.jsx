import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div style={{
          background: 'rgba(0, 0, 0, 0.2)',
          padding: '30px',
          borderRadius: '15px',
          marginBottom: '40px',
          textAlign: 'center',
          border: '2px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h3 style={{ 
            marginBottom: '15px', 
            fontSize: '1.8rem',
            color: '#ffcc80'
          }}>
            Limited Affiliate Slots Available
          </h3>
          <p style={{ 
            fontSize: '1.3rem', 
            fontWeight: 'bold',
            marginBottom: '10px'
          }}>
            ⚠️ Shortlisted Applicants को ही Onboard किया जाएगा
          </p>
          <p style={{ 
            fontSize: '1.1rem', 
            opacity: '0.9',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            We maintain high quality standards by onboarding only serious and dedicated partners
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          <div>
            <h3 style={{ 
              marginBottom: '20px',
              fontSize: '1.5rem',
              color: '#ffcc80'
            }}>
              BK आरोग्यं & आरोग्य भारत
            </h3>
            <p style={{ marginBottom: '15px', opacity: '0.9' }}>
              Trusted Ayurvedic Healthcare Partner
            </p>
            <p style={{ opacity: '0.8', fontSize: '0.95rem' }}>
              Bringing authentic Ayurveda to every home in India
            </p>
          </div>
          
          <div>
            <h4 style={{ 
              marginBottom: '20px',
              fontSize: '1.2rem',
              color: '#ffcc80'
            }}>
              Contact Information
            </h4>
            <div style={{ marginBottom: '15px' }}>
              <p style={{ marginBottom: '5px', fontWeight: '600' }}>
                <span style={{ marginRight: '10px' }}>📞</span>
                Phone: +91-9876543210
              </p>
              <p style={{ marginBottom: '5px', fontWeight: '600' }}>
                <span style={{ marginRight: '10px' }}>📧</span>
                Email: affiliate@bkarogyam.com
              </p>
              <p style={{ marginBottom: '5px', fontWeight: '600' }}>
                <span style={{ marginRight: '10px' }}>🏢</span>
                Address: Delhi NCR, India
              </p>
            </div>
          </div>
          
          <div>
            <h4 style={{ 
              marginBottom: '20px',
              fontSize: '1.2rem',
              color: '#ffcc80'
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              {[
                { name: 'About Us', href: '#about' },
                { name: 'How It Works', href: '#how-it-works' },
                { name: 'Earnings', href: '#earnings' },
                { name: 'Who Can Join', href: '#who-can-join' },
                { name: 'Apply Now', href: '#apply' }
              ].map((link, index) => (
                <li key={index} style={{ marginBottom: '10px' }}>
                  <a href={link.href} style={{
                    color: 'white',
                    textDecoration: 'none',
                    opacity: '0.9',
                    transition: 'opacity 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}>
                    <span>→</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 style={{ 
              marginBottom: '20px',
              fontSize: '1.2rem',
              color: '#ffcc80'
            }}>
              Office Hours
            </h4>
            <p style={{ marginBottom: '10px', opacity: '0.9' }}>
              Monday - Saturday: 9 AM - 7 PM
            </p>
            <p style={{ opacity: '0.9' }}>
              Sunday: 10 AM - 5 PM
            </p>
            
            <div style={{ marginTop: '20px' }}>
              <p style={{ fontWeight: '600', marginBottom: '10px' }}>
                Emergency Support: 24/7 Available
              </p>
            </div>
          </div>
        </div>
        
        {/* Social Media Links */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '30px',
          flexWrap: 'wrap'
        }}>
          {[
            { icon: '📘', name: 'Facebook', color: '#1877F2' },
            { icon: '📷', name: 'Instagram', color: '#E4405F' },
            { icon: '🐦', name: 'Twitter', color: '#1DA1F2' },
            { icon: '🎬', name: 'YouTube', color: '#FF0000' },
            { icon: '💼', name: 'LinkedIn', color: '#0A66C2' }
          ].map((social, index) => (
            <a 
              key={index}
              href="#" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                background: social.color,
                color: 'white',
                borderRadius: '50%',
                fontSize: '1.5rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 8px 20px ${social.color}80`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
        
        {/* Copyright */}
        <div style={{ 
          marginTop: '40px', 
          borderTop: '1px solid rgba(255, 255, 255, 0.2)', 
          paddingTop: '30px',
          textAlign: 'center'
        }}>
          <p style={{ marginBottom: '15px', opacity: '0.9' }}>
            © {currentYear} BK Arogyam & Arogya Bharat. All rights reserved.
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '30px',
            flexWrap: 'wrap',
            marginTop: '20px'
          }}>
            <a href="#" style={{ 
              color: 'white', 
              opacity: '0.8',
              textDecoration: 'none',
              fontSize: '0.9rem'
            }}>
              Privacy Policy
            </a>
            <a href="#" style={{ 
              color: 'white', 
              opacity: '0.8',
              textDecoration: 'none',
              fontSize: '0.9rem'
            }}>
              Terms & Conditions
            </a>
            <a href="#" style={{ 
              color: 'white', 
              opacity: '0.8',
              textDecoration: 'none',
              fontSize: '0.9rem'
            }}>
              Affiliate Agreement
            </a>
            <a href="#" style={{ 
              color: 'white', 
              opacity: '0.8',
              textDecoration: 'none',
              fontSize: '0.9rem'
            }}>
              Disclaimer
            </a>
            <a href="#" style={{ 
              color: 'white', 
              opacity: '0.8',
              textDecoration: 'none',
              fontSize: '0.9rem'
            }}>
              Contact Us
            </a>
          </div>
        </div>
        
        {/* Trust Badges */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '30px',
          flexWrap: 'wrap',
          opacity: '0.8'
        }}>
          <div style={{
            padding: '10px 20px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            fontSize: '0.9rem'
          }}>
            ✅ ISO Certified
          </div>
          <div style={{
            padding: '10px 20px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            fontSize: '0.9rem'
          }}>
            ✅ GMP Certified
          </div>
          <div style={{
            padding: '10px 20px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            fontSize: '0.9rem'
          }}>
            ✅ Ayurveda License
          </div>
          <div style={{
            padding: '10px 20px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            fontSize: '0.9rem'
          }}>
            ✅ Trusted Since 2010
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;