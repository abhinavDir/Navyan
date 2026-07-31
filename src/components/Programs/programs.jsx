import React, { useRef } from 'react';
import './programs.css';

export default function Programs() {
  const scrollRef = useRef(null);

  const programsList = [
    {
      id: 1,
      type: 'FREE PASS',
      badgeText: '4 WEEKS FREE',
      duration: '4 Weeks',
      couponCode: 'NAV-FREE-4W',
      price: 'Free',
      desc: 'Basic learning roadmap, structured task execution, and verified certificate support.',
      accentColor: '#38bdf8', // Neon Sky Blue
      cardTheme: 'prog-card-sky',
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
      features: [
        'Basic learning roadmap',
        'Structured tasks & submissions',
        'Verified completion certificate'
      ]
    },
    {
      id: 2,
      type: 'PRO PASS',
      badgeText: '3 MONTHS PAID',
      duration: '3 Months',
      couponCode: 'NAV-PRO-3M',
      price: 'Paid Track',
      desc: 'Live classes, expert coordinator support, and stronger real-world project execution.',
      accentColor: '#fbbf24', // Neon Gold/Amber
      cardTheme: 'prog-card-gold',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
      features: [
        'Live interactive mentorship classes',
        'Coordinator-led workflow',
        'Real-world industry project exposure'
      ]
    },
    {
      id: 3,
      type: 'ELITE PASS',
      badgeText: '6 MONTHS PAID',
      duration: '6 Months',
      couponCode: 'NAV-ELITE-6M',
      price: 'Paid Track',
      desc: 'Advanced enterprise projects, 1-on-1 industry mentorship, and reward eligibility.',
      accentColor: '#a78bfa', // Neon Purple/Violet
      cardTheme: 'prog-card-purple',
      imageUrl: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=600&q=80',
      features: [
        'Advanced enterprise project work',
        'Longer 1-on-1 mentorship cycle',
        'Rewards & career placement assistance'
      ]
    }
  ];

  return (
    <section className="programs-section" id="programs">
      {/* 3D Curved Top Section Connector */}
      <div className="programs-section-connector">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="connector-svg">
          <path d="M0,0 Q720,80 1440,0 L1440,80 L0,80 Z" fill="rgba(6, 11, 24, 0.4)" filter="blur(8px)" />
          <path d="M0,0 Q720,70 1440,0" stroke="#fed7aa" strokeWidth="12" strokeLinecap="round" />
          <path d="M0,0 Q720,70 1440,0 L1440,80 L0,80 Z" fill="#130909" />
        </svg>
      </div>

      {/* Background Centered Watermark */}
      <div className="page-section-watermark-container dark-section-watermark">
        <span className="page-section-watermark-text">NAVYAN</span>
        <span className="page-section-watermark-sub">PROGRAM PASS</span>
      </div>
      
      <div className="programs-container">
        {/* Section Header */}
        <div className="programs-header">
          <div className="programs-tagline">
            <span className="programs-tagline-dot"></span>
            <span>INTERNSHIP PROGRAMS</span>
          </div>
          <h2 className="programs-title">Programs for different levels of commitment</h2>
          <p className="programs-subtitle">
            Start with a free program or move into paid tracks for deeper support, stronger execution, and bigger outcomes.
          </p>
        </div>

        {/* High-End Program Cards Grid */}
        <div className="programs-grid" ref={scrollRef}>
          {programsList.map((prog) => (
            <div
              key={prog.id}
              className={`programs-premium-card ${prog.cardTheme}`}
              style={{
                '--card-accent': prog.accentColor
              }}
            >
              {/* Image Banner Container with Unsplash Background */}
              <div className="card-image-banner">
                <img src={prog.imageUrl} alt={prog.duration} className="unsplash-card-img" />
                <div className="card-image-overlay"></div>
                
                {/* Floating Tech Badge over Image */}
                <div className="floating-program-badge">
                  <span className="badge-pulse-dot" style={{ background: prog.accentColor }}></span>
                  <span>{prog.type}</span>
                </div>

                <div className="card-price-tag">
                  <span>{prog.price}</span>
                </div>
              </div>

              {/* Card Details & Body */}
              <div className="card-info-content">
                <div className="card-title-row">
                  <h3 className="card-duration-title">{prog.duration}</h3>
                  <span className="card-serial-tag">{prog.couponCode}</span>
                </div>
                
                <p className="card-description">{prog.desc}</p>

                {/* Features Checkbox Logs */}
                <div className="card-features-checklist">
                  {prog.features.map((feat, idx) => (
                    <div key={idx} className="features-check-item">
                      <div className="features-check-icon" style={{ borderColor: prog.accentColor, color: prog.accentColor }}>
                        ✓
                      </div>
                      <span className="features-check-text">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Interactive Action Stub */}
              <div className="card-action-bar">
                <a href="#internships" className="card-apply-action-btn">
                  <span>Apply Now</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="btn-arrow-icon">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
