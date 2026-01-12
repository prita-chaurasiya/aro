import React from 'react';

const TrustSection = () => {
  const specialties = [
    'किडनी रोग (Dialysis Prevention)',
    'डायबिटीज',
    'हृदय रोग',
    'मोटापा',
    'पेन मैनेजमेंट',
    'पंचकर्म एवं IPD ट्रीटमेंट'
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">
          BK आरोग्यं & आरोग्य भारत – एक भरोसेमंद आयुर्वेदिक मिशन
        </h2>
        
        <div className="card fade-in">
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: '25px',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, var(--primary-green), var(--dark-green))',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '2.5rem',
              fontWeight: 'bold',
              flexShrink: '0'
            }}>
              BK
            </div>
            <div>
              <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
                <strong>BK आरोग्यं एंड रिसर्च प्राइवेट लिमिटेड</strong>
              </p>
              <p style={{ color: '#555' }}>
                भारत का जाना-माना आयुर्वेद आधारित मल्टी-स्पेशलिटी हेल्थकेयर ब्रांड है।
              </p>
            </div>
          </div>
          
          <div className="trust-badge">
            <h3 style={{ 
              color: 'var(--dark-green)', 
              marginBottom: '15px',
              fontSize: '1.3rem',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ 
                background: 'var(--primary-green)',
                color: 'white',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem'
              }}>✓</span>
              हम मुख्य रूप से इन बीमारियों पर काम करते हैं:
            </h3>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '15px', 
            margin: '25px 0' 
          }}>
            {specialties.map((item, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)',
                padding: '15px 20px',
                borderRadius: '10px',
                textAlign: 'center',
                fontWeight: '600',
                color: 'var(--dark-green)',
                border: '2px solid rgba(76, 175, 80, 0.3)',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 15px rgba(76, 175, 80, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                {item}
              </div>
            ))}
          </div>
          
          <div style={{
            background: 'linear-gradient(to right, #f1f8e9, #fff3e0)',
            padding: '25px',
            borderRadius: '12px',
            marginTop: '30px',
            borderLeft: '5px solid var(--gold)'
          }}>
            <h4 style={{ 
              color: 'var(--dark-green)', 
              marginBottom: '15px',
              fontSize: '1.3rem'
            }}>
              आरोग्य भारत प्रोजेक्ट का उद्देश्य
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ flex: '1', minWidth: '250px' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '15px',
                  marginBottom: '15px'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'var(--gold)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    flexShrink: '0'
                  }}>
                    🏠
                  </div>
                  <div>
                    <p style={{ 
                      fontWeight: 'bold',
                      color: 'var(--dark-green)',
                      marginBottom: '5px'
                    }}>
                      आयुर्वेद को घर-घर तक पहुँचाना
                    </p>
                    <p style={{ color: '#666', fontSize: '0.95rem' }}>
                      प्रामाणिक आयुर्वेदिक उपचार हर घर तक
                    </p>
                  </div>
                </div>
              </div>
              
              <div style={{ flex: '1', minWidth: '250px' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '15px',
                  marginBottom: '15px'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'var(--primary-green)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    flexShrink: '0'
                  }}>
                    ⚕️
                  </div>
                  <div>
                    <p style={{ 
                      fontWeight: 'bold',
                      color: 'var(--dark-green)',
                      marginBottom: '5px'
                    }}>
                      बीमारी से पहले जागरूक करना
                    </p>
                    <p style={{ color: '#666', fontSize: '0.95rem' }}>
                      Preventive healthcare पर फोकस
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p style={{ 
            marginTop: '25px', 
            fontStyle: 'italic', 
            color: '#555',
            textAlign: 'center',
            padding: '15px',
            background: 'rgba(46, 125, 50, 0.05)',
            borderRadius: '8px',
            borderLeft: '4px solid var(--primary-green)'
          }}>
            आज हजारों लोग हमारे ट्रीटमेंट, कंसल्टेशन और गाइडेंस से लाभान्वित हो रहे हैं।
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;