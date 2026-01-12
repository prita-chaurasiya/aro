import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section fade-in" style={{
      background: 'linear-gradient(rgba(27, 94, 32, 0.9), rgba(46, 125, 50, 0.9)), url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '100px 0',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          padding: '40px',
          borderRadius: '20px',
          maxWidth: '900px',
          margin: '0 auto',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <h1 style={{ 
            fontSize: '3.2rem', 
            marginBottom: '25px',
            lineHeight: '1.2',
            fontWeight: '700'
          }}>
            कमाई भी करें, समाज की सेवा भी –
            <span style={{ color: '#ffcc80', display: 'block', marginTop: '10px' }}>
              BK आरोग्यं के साथ Affiliate Partner बनें
            </span>
          </h1>
          
          <p style={{ 
            fontSize: '1.4rem', 
            marginBottom: '40px', 
            maxWidth: '800px', 
            margin: '0 auto 40px',
            opacity: '0.95',
            lineHeight: '1.6'
          }}>
            भारत के भरोसेमंद आयुर्वेदिक हेल्थकेयर ब्रांड 
            <strong style={{ color: '#ffcc80' }}> BK आरोग्यं & आरोग्य भारत </strong>
            के साथ जुड़कर अपने कंटेंट से लोगों की मदद करें और
            <strong style={{ color: '#ffcc80' }}> 10%–20% तक की कमाई करें – बिना किसी हैंडलिंग के</strong>
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '25px', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            marginTop: '40px'
          }}>
            <a href="#apply" className="btn btn-gold" style={{ 
              fontSize: '1.2rem', 
              padding: '18px 45px',
              minWidth: '250px'
            }}>
              <span style={{ fontSize: '1.3rem' }}>👉</span> Become an Affiliate Partner Now
            </a>
            <a href="#how-it-works" className="btn" style={{ 
              fontSize: '1.2rem', 
              padding: '18px 45px',
              minWidth: '250px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: '2px solid white'
            }}>
              <span style={{ fontSize: '1.3rem' }}>📖</span> अधिक जानें
            </a>
          </div>
          
          <div style={{
            marginTop: '50px',
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ffcc80' }}>10-20%</div>
              <div style={{ fontSize: '1rem' }}>Commission Rate</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ffcc80' }}>₹0</div>
              <div style={{ fontSize: '1rem' }}>Registration Fee</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ffcc80' }}>24/7</div>
              <div style={{ fontSize: '1rem' }}>Support</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ffcc80' }}>🏆</div>
              <div style={{ fontSize: '1rem' }}>Trusted Brand</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '100px',
        background: 'linear-gradient(to top, #f8f9fa, transparent)'
      }}></div>
    </section>
  );
};

export default HeroSection;