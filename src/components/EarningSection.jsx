import React from 'react';

const EarningSection = () => {
  const commissionStructure = [
    { category: 'Products', rate: '10-20%', example: '₹1,000 sale = ₹100-200 commission' },
    { category: 'Consultation', rate: '15%', example: '₹5,000 consultation = ₹750 commission' },
    { category: 'IPD Treatment', rate: '10%', example: '₹50,000 treatment = ₹5,000 commission' },
    { category: 'Package Deals', rate: '12%', example: '₹25,000 package = ₹3,000 commission' }
  ];

  const exampleScenarios = [
    { sales: '2 Products/month', amount: '₹5,000', commission: '₹750', total: '₹9,000/month' },
    { sales: '1 Consultation/week', amount: '₹20,000', commission: '₹3,000', total: '₹12,000/month' },
    { sales: '1 IPD/month', amount: '₹30,000', commission: '₹3,000', total: '₹15,000/month' },
    { sales: 'Combined', amount: '₹55,000', commission: '₹6,750', total: '₹36,000/month' }
  ];

  return (
    <section className="section" id="earnings">
      <div className="container">
        <h2 className="section-title">आप कितनी कमाई कर सकते हैं?</h2>
        
        <div className="card fade-in">
          {/* Commission Display */}
          <div style={{ 
            textAlign: 'center',
            marginBottom: '40px' 
          }}>
            <div style={{
              fontSize: '5rem',
              color: 'var(--primary-green)',
              fontWeight: 'bold',
              marginBottom: '10px',
              background: 'linear-gradient(135deg, var(--primary-green), var(--dark-green))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              10% - 20%
            </div>
            <p style={{ 
              fontSize: '1.3rem', 
              fontWeight: '600',
              color: 'var(--dark-green)',
              marginBottom: '5px'
            }}>
              Commission Rate
            </p>
            <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Industry highest commission rates with transparent payout system
            </p>
          </div>
          
          {/* Commission Structure */}
          <h3 style={{ 
            textAlign: 'center', 
            color: 'var(--dark-green)', 
            marginBottom: '30px',
            fontSize: '1.5rem'
          }}>
            Commission Structure
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginBottom: '40px'
          }}>
            {commissionStructure.map((item, index) => (
              <div key={index} style={{
                padding: '25px',
                background: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)',
                borderRadius: '12px',
                textAlign: 'center',
                border: '2px solid rgba(76, 175, 80, 0.3)'
              }}>
                <h4 style={{ 
                  color: 'var(--dark-green)', 
                  marginBottom: '15px',
                  fontSize: '1.3rem'
                }}>
                  {item.category}
                </h4>
                <div style={{
                  fontSize: '2.5rem',
                  color: 'var(--primary-green)',
                  fontWeight: 'bold',
                  marginBottom: '10px'
                }}>
                  {item.rate}
                </div>
                <p style={{ 
                  color: '#555', 
                  fontSize: '0.95rem',
                  lineHeight: '1.5'
                }}>
                  {item.example}
                </p>
              </div>
            ))}
          </div>
          
          {/* Earning Examples */}
          <h3 style={{ 
            textAlign: 'center', 
            color: 'var(--dark-green)', 
            marginBottom: '30px',
            fontSize: '1.5rem'
          }}>
            Monthly Earning Scenarios
          </h3>
          
          <div style={{
            overflowX: 'auto',
            marginBottom: '30px'
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              background: 'white',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
            }}>
              <thead>
                <tr style={{
                  background: 'linear-gradient(135deg, var(--primary-green), var(--dark-green))',
                  color: 'white'
                }}>
                  <th style={{ padding: '15px', textAlign: 'left' }}>Sales Activity</th>
                  <th style={{ padding: '15px', textAlign: 'center' }}>Monthly Revenue</th>
                  <th style={{ padding: '15px', textAlign: 'center' }}>Your Commission</th>
                  <th style={{ padding: '15px', textAlign: 'center' }}>Monthly Total</th>
                </tr>
              </thead>
              <tbody>
                {exampleScenarios.map((scenario, index) => (
                  <tr key={index} style={{
                    borderBottom: '1px solid #eee',
                    background: index % 2 === 0 ? '#f9f9f9' : 'white'
                  }}>
                    <td style={{ padding: '15px', fontWeight: '600', color: 'var(--dark-green)' }}>
                      {scenario.sales}
                    </td>
                    <td style={{ padding: '15px', textAlign: 'center', color: '#666' }}>
                      {scenario.amount}
                    </td>
                    <td style={{ padding: '15px', textAlign: 'center', color: 'var(--primary-green)', fontWeight: '600' }}>
                      {scenario.commission}
                    </td>
                    <td style={{ padding: '15px', textAlign: 'center', color: 'var(--dark-green)', fontWeight: 'bold' }}>
                      {scenario.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Payout Information */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginBottom: '30px'
          }}>
            <div style={{
              padding: '20px',
              background: 'linear-gradient(135deg, #fff3e0, #ffecb3)',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', color: 'var(--gold)', marginBottom: '10px' }}>📅</div>
              <h3 style={{ color: '#e65100', marginBottom: '10px' }}>Monthly Payouts</h3>
              <p style={{ fontSize: '0.95rem', color: '#666' }}>15th of every month without fail</p>
            </div>
            
            <div style={{
              padding: '20px',
              background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', color: '#1976d2', marginBottom: '10px' }}>🏦</div>
              <h3 style={{ color: '#0d47a1', marginBottom: '10px' }}>Multiple Payout Methods</h3>
              <p style={{ fontSize: '0.95rem', color: '#666' }}>Bank Transfer, UPI, PayPal</p>
            </div>
            
            <div style={{
              padding: '20px',
              background: 'linear-gradient(135deg, #f3e5f5, #e1bee7)',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', color: '#7b1fa2', marginBottom: '10px' }}>📈</div>
              <h3 style={{ color: '#4a148c', marginBottom: '10px' }}>Long Term Income</h3>
              <p style={{ fontSize: '0.95rem', color: '#666' }}>Recurring commissions on follow-ups</p>
            </div>
          </div>
          
          {/* Success Message */}
          <div style={{
            marginTop: '30px',
            padding: '25px',
            background: 'linear-gradient(to right, rgba(46, 125, 50, 0.1), rgba(255, 152, 0, 0.1))',
            borderRadius: '12px',
            borderLeft: '5px solid var(--gold)',
            textAlign: 'center'
          }}>
            <p style={{ 
              fontSize: '1.2rem', 
              fontWeight: '600',
              color: 'var(--dark-green)',
              marginBottom: '10px'
            }}>
              👉 एक अच्छा कंटेंट = महीनों तक कमाई
            </p>
            <p style={{ color: '#666' }}>
              Your one piece of quality content can generate income for months through evergreen referrals
            </p>
          </div>
        </div>
        
        {/* Calculator Section */}
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '30px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          marginTop: '30px'
        }}>
          <h3 style={{ 
            textAlign: 'center', 
            color: 'var(--dark-green)', 
            marginBottom: '30px',
            fontSize: '1.5rem'
          }}>
            Earning Calculator
          </h3>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'flex-end'
          }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--dark-green)' }}>
                Monthly Referrals
              </label>
              <input 
                type="range" 
                min="1" 
                max="50" 
                defaultValue="10"
                style={{ width: '200px' }}
              />
              <div style={{ textAlign: 'center', marginTop: '5px' }}>10 referrals</div>
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--dark-green)' }}>
                Average Sale Value
              </label>
              <select style={{
                padding: '10px 15px',
                borderRadius: '8px',
                border: '2px solid rgba(0,0,0,0.1)',
                minWidth: '150px'
              }}>
                <option>₹5,000</option>
                <option>₹10,000</option>
                <option>₹25,000</option>
                <option>₹50,000</option>
              </select>
            </div>
            
            <div style={{
              padding: '20px',
              background: 'linear-gradient(135deg, var(--primary-green), var(--dark-green))',
              color: 'white',
              borderRadius: '10px',
              textAlign: 'center',
              minWidth: '200px'
            }}>
              <div style={{ fontSize: '0.9rem', marginBottom: '5px' }}>Estimated Monthly Income</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>₹25,000</div>
              <div style={{ fontSize: '0.8rem', opacity: '0.9' }}>At 15% commission</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningSection;