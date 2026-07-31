import React from 'react';
import './tickerstrip.css';

export default function TickerStrip() {
  const tickerItems = [
    "✦ 100% VERIFIED INTERNSHIPS",
    "✦ LIVE EXPERT MENTORSHIP",
    "✦ REAL-WORLD PROJECTS",
    "✦ CAREER ASSISTANCE",
    "✦ 4 WEEKS FREE TRIAL",
    "✦ SKILL DEVELOPMENT",
    "✦ INDUSTRY CERTIFICATION",
    "✦ JOB READY PORTFOLIO"
  ];

  return (
    <div className="ticker-strip-wrapper">
      <div className="ticker-strip-track">
        {/* We duplicate the items a few times to create an infinite loop effect */}
        <div className="ticker-content">
          {tickerItems.map((item, index) => (
            <span key={`a-${index}`} className="ticker-item">{item}</span>
          ))}
        </div>
        <div className="ticker-content" aria-hidden="true">
          {tickerItems.map((item, index) => (
            <span key={`b-${index}`} className="ticker-item">{item}</span>
          ))}
        </div>
        <div className="ticker-content" aria-hidden="true">
          {tickerItems.map((item, index) => (
            <span key={`c-${index}`} className="ticker-item">{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
