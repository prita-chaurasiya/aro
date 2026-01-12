import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1️⃣',
      title: 'Sign Up & Get Access',
      description: 'Register for free and get your personal affiliate dashboard',
      icon: '📝'
    },
    {
      number: '2️⃣',
      title: 'Share & Create Awareness',
      description: 'Use our content or create your own to spread awareness',
      icon: '📢'
    },
    {
      number: '3️⃣',
      title: 'Track Your Referrals',
      description: 'Monitor all your referrals in real-time dashboard',
      icon: '📊'
    },
    {
      number: '4️⃣',
      title: 'Earn Commission',
      description: 'Get 10-20% commission on every successful conversion',
      icon: '💰'
    }
  ];

  return (
    <section className="section" id="how-it-works" style={{ 
      background: 'linear-gradient(135deg, #e8f5e9, #f1f8e9)'
    }}>
      <div className="container">
        <h2 className="section-title">Affiliate Program कैसे काम करता है?</h2>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="step-number">{step.number}</div>
              <div style={{
                fontSize: '3rem',
                marginBottom: '15px',
                color: 'var(--primary-green)'
              }}>
                {step.icon}
              </div>
              <h3 style={{ 
                color: 'var(--dark-green)', 
                marginBottom: '15px',
                fontSize: '1.3rem',
                minHeight: '60px'
              }}>
                {step.title}
              </h3>
              <p style={{ color: '#555', lineHeight: '1.6' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Detailed Process */}
        <div className="card" style={{ marginTop: '50px' }}>
          <h3 style={{ 
            textAlign: 'center', 
            color: 'var(--dark-green)', 
            marginBottom: '30px',
            fontSize: '1.5rem'
          }}>
            Detailed Process Flow
          </h3>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            position: 'relative'
          }}>
            {/* Connecting Line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '4px',
              background: 'linear-gradient(to bottom, var(--gold), var(--primary-green))',
              transform: 'translateX(-50%)',
              zIndex: '0'
            }}></div>
            
            {[
              {
                side: 'left',
                title: 'Step 1: Content Sharing',
                content: 'आप हमारे Products / Services / Consultation के बारे में अपने कंटेंट या ऑडियंस को Awareness देंगे',
                icon: '📱'
              },
              {
                side: 'right',
                title: 'Step 2: Customer Action',
                content: 'आपकी Unique Affiliate Link से लोग Booking / Purchase करेंगे',
                icon: '🛒'
              },
              {
                side: 'left',
                title: 'Step 3: Our Medical Team Takes Over',
                content: 'पूरी Handling हमारी Team करेगी (Counselling, Follow-up, Treatment)',
                icon: '⚕️'
              },
              {
                side: 'right',
                title: 'Step 4: You Earn Commission',
                content: 'हर Successful Conversion पर आपको 10%–20% तक Revenue Share',
                icon: '💳'
              }
            ].map((step, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: step.side === 'left' ? 'flex-start' : 'flex-end',
                position: 'relative',
                zIndex: '1'
              }}>
                <div style={{
                  width: 'calc(50% - 60px)',
                  background: 'white',
                  padding: '25px',
                  borderRadius: '12px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  border: '2px solid rgba(46, 125, 50, 0.2)',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    [step.side]: '-30px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '40px',
                    height: '40px',
                    background: 'var(--gold)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                  }}>
                    {index + 1}
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    marginBottom: '15px'
                  }}>
                    <div style={{
                      fontSize: '2rem'
                    }}>
                      {step.icon}
                    </div>
                    <h4 style={{
                      color: 'var(--dark-green)',
                      fontSize: '1.2rem',
                      margin: '0'
                    }}>
                      {step.title}
                    </h4>
                  </div>
                  
                  <p style={{ color: '#555', lineHeight: '1.6' }}>
                    {step.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Support Section */}
        <div style={{
          marginTop: '50px',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '20px',
            background: 'white',
            padding: '25px 40px',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <div style={{
              fontSize: '3.5rem',
              color: 'var(--primary-green)'
            }}>
              🛡️
            </div>
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ 
                color: 'var(--dark-green)', 
                marginBottom: '10px',
                fontSize: '1.4rem'
              }}>
                हम आपका साथ देते हैं हर स्टेप पर
              </h3>
              <p style={{ color: '#666', maxWidth: '500px' }}>
                Dedicated support team, marketing materials, training videos, 
                and regular updates to help you succeed
              </p>
            </div>
            <a href="#apply" className="btn" style={{ flexShrink: '0' }}>
              Start Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;