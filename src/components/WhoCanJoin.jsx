import React from 'react';

const WhoCanJoin = () => {
  const profiles = [
    { icon: '🎥', title: 'YouTuber / Content Creator', desc: 'Health, lifestyle, or any niche content creators' },
    { icon: '📱', title: 'Instagram Influencer', desc: 'Any follower count, any niche' },
    { icon: '💪', title: 'Health / Fitness Coach', desc: 'Wellness, fitness, yoga trainers' },
    { icon: '🌿', title: 'Ayurveda Promoter', desc: 'Ayurveda enthusiasts, practitioners' },
    { icon: '👥', title: 'MLM Leaders', desc: 'Network marketing professionals' },
    { icon: '💰', title: 'Affiliate Marketers', desc: 'Experienced affiliate marketers' },
    { icon: '📝', title: 'Bloggers / Website Owners', desc: 'Health, wellness, or general bloggers' },
    { icon: '💬', title: 'Telegram/WhatsApp Group Admin', desc: 'Health, business, or community groups' },
    { icon: '🏥', title: 'Medical Professionals', desc: 'Doctors, nurses, technicians' },
    { icon: '🎓', title: 'Students', desc: 'Medical, pharmacy, or any students' },
    { icon: '👨‍💼', title: 'Working Professionals', desc: 'From any industry background' },
    { icon: '🏠', title: 'Housewives', desc: 'Looking for home-based income' }
  ];

  return (
    <section className="section" id="who-can-join">
      <div className="container">
        <h2 className="section-title">कौन-कौन जुड़ सकता है?</h2>
        
        <p style={{ 
          textAlign: 'center', 
          fontSize: '1.2rem', 
          marginBottom: '40px',
          maxWidth: '800px',
          margin: '0 auto 40px',
          color: '#555'
        }}>
          यदि आप इनमें से किसी भी प्रोफाइल से हैं, तो यह Program आपके लिए है:
          <br/>
          <span style={{ 
            color: 'var(--primary-green)', 
            fontWeight: 'bold',
            fontSize: '1.3rem',
            display: 'inline-block',
            marginTop: '10px'
          }}>
            कोई Minimum Requirements नहीं!
          </span>
        </p>
        
        <div className="profile-grid">
          {profiles.map((profile, index) => (
            <div key={index} className="profile-card fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}>
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '15px',
                color: 'var(--primary-green)'
              }}>
                {profile.icon}
              </div>
              <h3 style={{ 
                color: 'var(--dark-green)', 
                marginBottom: '10px',
                fontSize: '1.2rem',
                minHeight: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {profile.title}
              </h3>
              <p style={{ 
                color: '#666', 
                fontSize: '0.9rem',
                lineHeight: '1.5'
              }}>
                {profile.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div style={{
          background: 'linear-gradient(135deg, var(--cream), #fff3e0)',
          padding: '30px',
          borderRadius: '15px',
          marginTop: '50px',
          border: '2px solid var(--gold)',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px',
            alignItems: 'center'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '70px',
                height: '70px',
                background: 'var(--primary-green)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
                margin: '0 auto 15px'
              }}>
                👥
              </div>
              <p style={{ fontWeight: 'bold', color: 'var(--dark-green)' }}>
                Followers की कोई Minimum Limit नहीं
              </p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                Even with 100 followers, you can join
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '70px',
                height: '70px',
                background: 'var(--gold)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
                margin: '0 auto 15px'
              }}>
                🎓
              </div>
              <p style={{ fontWeight: 'bold', color: 'var(--dark-green)' }}>
                Experience हो या न हो – Training दी जाएगी
              </p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                Complete training for beginners
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '70px',
                height: '70px',
                background: 'var(--dark-green)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
                margin: '0 auto 15px'
              }}>
                ₹0
              </div>
              <p style={{ fontWeight: 'bold', color: 'var(--dark-green)' }}>
                कोई Registration Fee नहीं
              </p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                Free to join, earn from first referral
              </p>
            </div>
          </div>
          
          <div style={{ 
            marginTop: '30px',
            padding: '15px',
            background: 'rgba(46, 125, 50, 0.1)',
            borderRadius: '10px'
          }}>
            <p style={{ 
              fontSize: '1.1rem', 
              fontWeight: 'bold',
              color: 'var(--dark-green)'
            }}>
              💼 पार्ट-टाइम या फुल-टाइम, घर बैठे काम करें – पूरी आजादी के साथ!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanJoin;