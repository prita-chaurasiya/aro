import React from 'react';

const USPSection = () => {
  const features = [
    { icon: '👨‍⚕️', title: 'Expert Doctors', desc: 'Qualified Ayurvedic specialists' },
    { icon: '💬', title: 'Counsellors', desc: 'Dedicated patient support team' },
    { icon: '🏥', title: 'Medical Team', desc: 'Complete treatment handling' },
    { icon: '🏢', title: 'Infrastructure', desc: 'Modern treatment facilities' },
    { icon: '📊', title: 'Case Studies', desc: 'Proven treatment results' },
    { icon: '🔄', title: 'Follow-up System', desc: 'Regular patient follow-ups' },
    { icon: '📱', title: 'Tech Support', desc: 'Digital tracking system' },
    { icon: '📚', title: 'Training', desc: 'Complete affiliate training' }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="usp-box fade-in">
          <h2 style={{ 
            fontSize: '2.2rem', 
            marginBottom: '30px',
            lineHeight: '1.4'
          }}>
            आपका काम सिर्फ Awareness करना है
            <br />
            <span style={{ 
              color: '#ffcc80',
              display: 'inline-block',
              marginTop: '10px'
            }}>
              बाकी पूरा सिस्टम BK आरोग्यं संभालेगा
            </span>
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            margin: '40px 0'
          }}>
            {features.map((feature, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.15)',
                padding: '20px 15px',
                borderRadius: '12px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ 
                  fontSize: '2.5rem', 
                  marginBottom: '15px',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ 
                  marginBottom: '8px',
                  fontSize: '1.2rem',
                  color: '#ffcc80'
                }}>
                  {feature.title}
                </h3>
                <p style={{ 
                  fontSize: '0.9rem', 
                  opacity: '0.9',
                  lineHeight: '1.4'
                }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '30px',
            borderRadius: '15px',
            marginTop: '30px',
            border: '2px solid rgba(255, 255, 255, 0.3)'
          }}>
            <p style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              इसलिए यह Program सबके लिए Perfect है
            </p>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '30px',
              marginTop: '20px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary-green)',
                  fontSize: '1.8rem',
                  margin: '0 auto 10px'
                }}>
                  👶
                </div>
                <p style={{ fontWeight: '600' }}>Beginners</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary-green)',
                  fontSize: '1.8rem',
                  margin: '0 auto 10px'
                }}>
                  ⭐
                </div>
                <p style={{ fontWeight: '600' }}>Influencers</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary-green)',
                  fontSize: '1.8rem',
                  margin: '0 auto 10px'
                }}>
                  💼
                </div>
                <p style={{ fontWeight: '600' }}>Professionals</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary-green)',
                  fontSize: '1.8rem',
                  margin: '0 auto 10px'
                }}>
                  🏠
                </div>
                <p style={{ fontWeight: '600' }}>Home Makers</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary-green)',
                  fontSize: '1.8rem',
                  margin: '0 auto 10px'
                }}>
                  👥
                </div>
                <p style={{ fontWeight: '600' }}>Everyone</p>
              </div>
            </div>
          </div>
          
          <div style={{ 
            marginTop: '40px',
            textAlign: 'center'
          }}>
            <a href="#apply" className="btn btn-gold" style={{ 
              fontSize: '1.2rem', 
              padding: '18px 45px',
              background: 'linear-gradient(135deg, #ff9800, #ff5722)',
              border: 'none'
            }}>
              🚀 Start Earning Without Any Hassle
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;