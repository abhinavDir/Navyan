import React from 'react';
import './hero.css';
import heroImage from '../../assets/hero-woman.png';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Giant Navyan Watermark Background */}
      <div className="hero-watermark-container" aria-hidden="true">
        <span className="hero-watermark-text">NAVYAN</span>
        <span className="hero-watermark-sub">INTERNSHIPS & IT SERVICES</span>
      </div>

      {/* Decorative Background Elements */}
      <div className="hero-bg-glow hero-bg-glow-1"></div>
      <div className="hero-bg-glow hero-bg-glow-2"></div>
      <div className="hero-bg-shape hero-bg-shape-1"></div>
      <div className="hero-bg-grid"></div>

      {/* Decorative Icons scattered in background */}
      <svg className="hero-bg-icon icon-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      <svg className="hero-bg-icon icon-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
      <svg className="hero-bg-icon icon-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"></path><path d="M12 2v20"></path><path d="M4.93 4.93l14.14 14.14"></path><path d="M19.07 4.93L4.93 19.07"></path></svg>
      <svg className="hero-bg-icon icon-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 22l10-4 10 4L12 2z"></path></svg>


      {/* PROMINENT CONICAL CURVED BOTTOM BACKGROUND (SVG Arch + Gradient) */}
      <div className="hero-conical-bottom-shape" aria-hidden="true">
        <svg viewBox="0 0 1440 280" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="hero-conical-svg">
          {/* Main Conical Arc Path */}
          <path d="M0,120 C360,260 1080,260 1440,120 L1440,280 L0,280 Z" fill="url(#conicalGrad1)" />
          {/* Inner Layered Curve */}
          <path d="M0,170 C420,270 1020,270 1440,170 L1440,280 L0,280 Z" fill="url(#conicalGrad2)" />
          {/* Top Curved Accent Border Line */}
          <path d="M0,120 C360,260 1080,260 1440,120" stroke="url(#conicalStroke)" strokeWidth="3.5" fill="none" opacity="0.8" />
          {/* Solid White Base Arch Fill connecting directly to Workflow section */}
          <path d="M0,195 C450,280 990,280 1440,195 L1440,280 L0,280 Z" fill="#ffffff" />
          <defs>
            <linearGradient id="conicalGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a56db" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#f27a1a" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#1a56db" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient id="conicalGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#fed7aa" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.85" />
            </linearGradient>
            <linearGradient id="conicalStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1a56db" />
              <stop offset="50%" stopColor="#f27a1a" />
              <stop offset="100%" stopColor="#1a56db" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          {/* Tagline Badge */}
          <div className="hero-tagline">
            <span className="hero-tagline-dot"></span>
            <span className="hero-tagline-text">LEARN. GROW. THRIVE.</span>
          </div>

          {/* Heading */}
          <h1 className="hero-heading" id="hero-heading">
            <span className="hero-heading-brand">NAVYAN</span>
            <span className="hero-heading-script">Internship</span>
            <span className="hero-heading-brand">& Skill</span>
            <span className="hero-heading-outline">Development</span>
            <svg className="hero-heading-wave" viewBox="0 0 240 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12C35 3 60 15 95 9C130 3 155 15 190 9C205 6 215 8 237 9" stroke="#f27a1a" strokeWidth="4.5" strokeLinecap="round" opacity="0.8" />
            </svg>
          </h1>

          {/* Description */}
          <p className="hero-description">
            4 Weeks Free + 3 & 6 Months Paid Internships. Apply, get reviewed,
            and track every step clearly with our elite mentorship platform.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#apply" className="hero-cta-primary" id="hero-apply-now">
              <span>APPLY NOW</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <button className="hero-cta-secondary" id="hero-watch-video">
              <span className="hero-play-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span>WATCH HOW IT WORKS</span>
            </button>
          </div>

          {/* Trust & Stats Bar */}
          <div className="hero-trust-bar">
            <div className="hero-trust-item">
              <div className="hero-trust-stars">★★★★★</div>
              <span className="hero-trust-text"><strong>4.9/5</strong> Rating</span>
            </div>
            <div className="hero-trust-divider"></div>
            <div className="hero-trust-item">
              <span className="hero-trust-number">10k+</span>
              <span className="hero-trust-text">Students Trained</span>
            </div>
            <div className="hero-trust-divider"></div>
            <div className="hero-trust-item">
              <span className="hero-trust-number">100+</span>
              <span className="hero-trust-text">Hiring Partners</span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero-visual">
          {/* Floating Chip */}
          <div className="hero-floating-chip chip-top-right">
            <span className="chip-icon">⚡</span>
            <span className="chip-text">4 Weeks Free Trial</span>
          </div>

          {/* Orange 100% Support Badge */}
          <div className="hero-badge" id="hero-support-badge">
            <span className="hero-badge-percent">100%</span>
            <span className="hero-badge-label">SUPPORT</span>
          </div>

          {/* Image Frame */}
          <div className="hero-image-wrapper">
            <img
              src={heroImage}
              alt="Student working on laptop"
              className="hero-image"
              loading="eager"
            />
          </div>

          {/* Career Status Card */}
          <div className="hero-status-card" id="hero-career-card">
            <div className="hero-status-content">
              <span className="hero-status-label">CAREER STATUS</span>
              <div className="hero-status-title">
                <span>FUTURE READY</span>
                <span className="hero-status-dot"></span>
              </div>
            </div>
            <div className="hero-status-check">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
          </div>

          {/* Decorative Ring */}
          <div className="hero-decorative-ring"></div>
        </div>
      </div>
    </section>
  );
}
