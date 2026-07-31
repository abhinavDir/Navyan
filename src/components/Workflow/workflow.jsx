import React from 'react';
import './workflow.css';

export default function Workflow() {
  const steps = [
    {
      number: '1',
      title: 'Application Submitted',
      desc: 'Simple 2-minute apply experience for free & paid tracks.',
      status: 'Active',
      iconBg: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
      iconColor: '#15803d',
      borderColor: '#10b981',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    },
    {
      number: '2',
      title: 'Under Review by Navyan',
      desc: 'Expert mentors review your profile & select your track.',
      iconBg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
      iconColor: '#d97706',
      borderColor: '#f59e0b',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      )
    },
    {
      number: '3',
      title: 'Internship Started with Tasks',
      desc: 'Work on live projects with 4 weeks, 3 & 6 months options.',
      iconBg: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
      iconColor: '#2563eb',
      borderColor: '#2563eb',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      number: '4',
      title: 'Performance Tracked & Certified',
      desc: 'Unlock your verified industry certificate upon completion.',
      iconBg: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
      iconColor: '#9333ea',
      borderColor: '#8b5cf6',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 15l-2 5l-2.5 -1.5l-2.5 1.5l1 -5.5" />
          <circle cx="12" cy="9" r="6" />
        </svg>
      )
    }
  ];

  const highlights = [
    {
      title: 'Student-ready flow',
      subtitle: 'Simple apply experience'
    },
    {
      title: 'Free + paid tracks',
      subtitle: '4 weeks, 3 months, 6 months'
    },
    {
      title: 'Live workflow preview',
      subtitle: 'What students see after applying'
    }
  ];

  return (
    <section className="workflow" id="workflow">
      {/* Giant Navyan Watermark Background */}
      <div className="workflow-watermark-container" aria-hidden="true">
        <span className="workflow-watermark-text">NAVYAN</span>
        <span className="workflow-watermark-sub">WORKFLOW & CAREER PLATFORM</span>
      </div>

      {/* Background Soft Glows */}
      <div className="workflow-bg-glow glow-left"></div>
      <div className="workflow-bg-glow glow-right"></div>

      <div className="workflow-container">
        {/* 1. Section Header Title */}
        <div className="workflow-header">
          <div className="workflow-tagline">
            <span className="workflow-tagline-dot"></span>
            <span>STUDENT + LAPTOP WORKFLOW</span>
          </div>
          <h2 className="workflow-title">
            Clear steps, real mentorship, and visible progress.
          </h2>
          <p className="workflow-subtitle">
            A seamless journey engineered for ambitious students to gain real-world IT experience.
          </p>
        </div>

        {/* 2. Feature Highlights Pills */}
        <div className="workflow-highlights-bar">
          {highlights.map((h, i) => (
            <div key={i} className="workflow-highlight-chip">
              <span className="highlight-dot"></span>
              <div className="highlight-text-group">
                <span className="highlight-title">{h.title}</span>
                <span className="highlight-sub">{h.subtitle}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Ultra-Enhanced 4-Step Card Banner */}
        <div className="workflow-banner-card">
          <div className="workflow-banner-grid">
            {steps.map((step) => (
              <div
                key={step.number}
                className="workflow-step-col"
                style={{ '--step-accent': step.borderColor }}
              >
                {/* Step Icon Circle */}
                <div
                  className="workflow-step-icon-wrap"
                  style={{ background: step.iconBg, color: step.iconColor }}
                >
                  {step.icon}
                  <span className="workflow-step-badge">{step.number}</span>
                </div>

                {/* Active Tag */}
                {step.status && (
                  <span className="workflow-active-pill">
                    <span className="active-pill-dot"></span>
                    {step.status}
                  </span>
                )}

                {/* Content */}
                <h3 className="workflow-step-title">{step.title}</h3>
                <p className="workflow-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
