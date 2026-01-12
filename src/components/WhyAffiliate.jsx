import React from 'react';

const WhyAffiliate = () => {
  const points = [
    'यह Paid Promotion नहीं, Revenue Sharing Partnership है',
    'आपको कोई Patient / Customer Handle नहीं करना',
    'पूरी Counselling, Follow-up, Conversion हमारी Medical Team करेगी',
    'High Ticket Consultation & IPD – ज्यादा कमाई का मौका',
    'समाज की सेवा + Long Term Passive Income',
    'Trusted Ayurveda Brand के साथ जुड़ने का अवसर',
    'No Minimum Followers Required',
    'Complete Training & Support Provided',
    'Monthly Payouts Without Delay',
    'Professional Marketing Materials'
  ];

  return (
    <section className="section" style={{ background: 'linear-gradient(135deg, #f1f8e9, #e8f5e9)' }}>
      <div className="container">
        <h2 className="section-title">
          क्यों BK आरोग्यं का Affiliate Program सबसे अलग है?
        </h2>
        
        <div className="card fade-in">
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '30px',
            alignItems: 'center',
            marginBottom: '30px'
          }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h3 style={{ 
                color: 'var(--dark-green)', 
                marginBottom: '20px',
                fontSize: '1.6rem'
              }}>
                Traditional vs Our Affiliate Program
              </h3>
              
              <div style={{
                background: 'white',
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  marginBottom: '15px',
                  paddingBottom: '10px',
                  borderBottom: '2px dashed #ddd'
                }}>
                  <div style={{ fontWeight: 'bold', color: '#666' }}>Feature</div>
                  <div style={{ fontWeight: 'bold', color: 'var(--primary-green)' }}>BK Arogyam</div>
                  <div style={{ fontWeight: 'bold', color: '#666' }}>Others</div>
                </div>
                
                {[
                  ['Customer Handling', 'हम करेंगे', 'आप करें'],
                  ['Medical Support', '24/7 Available', 'Limited'],
                  ['Commission', '10-20%', '5-10%'],
                  ['Training', 'Complete Free', 'Self Learning'],
                  ['Payout', 'Monthly', 'Quarterly']
                ].map(([feature, bk, others], index) => (
                  <div key={index} style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    padding: '10px 0',
                    borderBottom: '1px solid #eee'
                  }}>
                    <div style={{ width: '120px' }}>{feature}</div>
                    <div style={{ width: '120px', color: 'var(--primary-green)', fontWeight: '600' }}>{bk}</div>
                    <div style={{ width: '120px', color: '#666' }}>{others}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ flex: '1', minWidth: '300px' }}>
              <div style={{
                background: 'linear-gradient(135deg, var(--primary-green), var(--dark-green))',
                color: 'white',
                padding: '25px',
                borderRadius: '15px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🏆</div>
                <h3 style={{ marginBottom: '15px' }}>Zero Responsibility</h3>
                <p style={{ fontSize: '1.1rem', opacity: '0.9' }}>
                  You just share, we handle everything else - from consultation to treatment
                </p>
              </div>
            </div>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '20px' 
          }}>
            <ul className="points-list" style={{ margin: '0' }}>
              {points.slice(0, 5).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            
            <ul className="points-list" style={{ margin: '0' }}>
              {points.slice(5).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          
          <div style={{
            marginTop: '30px',
            padding: '20px',
            background: 'linear-gradient(to right, rgba(255, 152, 0, 0.1), rgba(76, 175, 80, 0.1))',
            borderRadius: '10px',
            borderLeft: '5px solid var(--gold)'
          }}>
            <p style={{ 
              textAlign: 'center', 
              fontSize: '1.2rem', 
              fontWeight: '600',
              color: 'var(--dark-green)'
            }}>
              💡 यह सिर्फ कमाई नहीं, एक समाज सेवा का अवसर है जहाँ आप पैसे भी कमाएँगे और लोगों की मदद भी करेंगे।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAffiliate;