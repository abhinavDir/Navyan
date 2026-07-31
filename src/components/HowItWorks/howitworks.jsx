import React, { useState } from 'react';
import './howitworks.css';

import step1Img from '../../assets/howitworks/step1.png';
import step2Img from '../../assets/howitworks/step2.png';
import step3Img from '../../assets/howitworks/step3.png';
import step4Img from '../../assets/howitworks/step4.png';

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(1); // Default center active card

  const steps = [
    {
      id: 1,
      number: '01',
      stepTag: 'STEP 01',
      title: 'Apply Online',
      subTitle: 'Duration & Application',
      desc: 'Choose your internship duration, submit your application, and enter review flow.',
      accentColor: '#ffedd5',
      cardTheme: 'card-theme-orange',
      cardBg: 'linear-gradient(145deg, #ea580c 0%, #c2410c 100%)',
      btnBg: '#ffffff',
      btnTextColor: '#c2410c',
      btnText: 'APPLY NOW →',
      image: step1Img,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      )
    },
    {
      id: 2,
      number: '02',
      stepTag: 'STEP 02',
      title: 'Get Selected',
      subTitle: 'Review & Selection',
      desc: 'Our team reviews your application and moves selected students to the next stage.',
      accentColor: '#a7f3d0',
      cardTheme: 'card-theme-green',
      cardBg: 'linear-gradient(145deg, #065f46 0%, #044e3a 100%)',
      btnBg: '#ffffff',
      btnTextColor: '#065f46',
      btnText: 'VIEW TRACKS →',
      image: step2Img,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      )
    },
    {
      id: 3,
      number: '03',
      stepTag: 'STEP 03',
      title: 'Start Internship',
      subTitle: 'Task Flow & Learning',
      desc: 'Access your task flow, learning path, and guided execution inside one structured system.',
      accentColor: '#bae6fd',
      cardTheme: 'card-theme-navy',
      cardBg: 'linear-gradient(145deg, #0f172a 0%, #0a0f1d 100%)',
      btnBg: '#ffffff',
      btnTextColor: '#0f172a',
      btnText: 'START FLOW →',
      image: step3Img,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      id: 4,
      number: '04',
      stepTag: 'STEP 04',
      title: 'Track Performance',
      subTitle: 'Certificates & Rewards',
      desc: 'Complete tasks, maintain performance, unlock certificates, and earn rewards.',
      accentColor: '#f5d0fe',
      cardTheme: 'card-theme-purple',
      cardBg: 'linear-gradient(145deg, #6b21a8 0%, #581c87 100%)',
      btnBg: '#ffffff',
      btnTextColor: '#6b21a8',
      btnText: 'CLAIM REWARDS →',
      image: step4Img,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 15l-2 5l-2.5 -1.5l-2.5 1.5l1 -5.5" />
          <circle cx="12" cy="9" r="6" />
        </svg>
      )
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  return (
    <section className="howitworks warm-orange-bg coverflow-section" id="howitworks">
      {/* Background Watermark Text */}
      <div className="howitworks-watermark-container" aria-hidden="true">
        <span className="howitworks-watermark-text">NAVYAN</span>
        <span className="howitworks-watermark-sub">FLOW ROADMAP</span>
      </div>

      {/* Background Ambient Warm Glows */}
      <div className="howitworks-bg-glow glow-left"></div>
      <div className="howitworks-bg-glow glow-right"></div>

      <div className="howitworks-container">
        {/* Section Header */}
        <div className="howitworks-header">
          <div className="howitworks-tagline">
            <span className="howitworks-tagline-dot"></span>
            <span>HOW NAVYAN WORKS</span>
          </div>
          <h2 className="howitworks-title">
            A simple 4-step internship flow.
          </h2>
          <p className="howitworks-subtitle">
            Click or touch any card to shuffle it into the center view!
          </p>
        </div>

        {/* 3D COVER FLOW CAROUSEL CONTAINER WITH SPACED DESKTOP CARDS */}
        <div className="coverflow-stage-wrapper">
          {/* Navigation Control Arrows */}
          <button className="coverflow-arrow-btn arrow-prev" onClick={handlePrev} aria-label="Previous Card">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* 3D Cover Flow Deck Stage */}
          <div className="coverflow-deck-stage">
            {steps.map((step, idx) => {
              const offset = idx - activeIndex;
              const isCenter = offset === 0;

              return (
                <div
                  key={step.id}
                  className={`coverflow-card ${step.cardTheme} ${isCenter ? 'is-center-active' : ''}`}
                  style={{
                    '--card-accent': step.accentColor,
                    '--card-bg-gradient': step.cardBg,
                    '--btn-bg-color': step.btnBg,
                    '--btn-text-color': step.btnTextColor,
                    '--card-offset': offset
                  }}
                  onClick={() => setActiveIndex(idx)}
                >
                  {/* Top Floating Badge Tag */}
                  <div className="coverflow-badge">
                    {step.icon}
                    <span>{step.stepTag}</span>
                  </div>

                  {/* Visual Banner (65% Height) */}
                  <div className="coverflow-img-banner">
                    <img src={step.image} alt={step.title} className="coverflow-img" />
                    <div className="banner-overlay-gradient"></div>
                  </div>

                  {/* Card Content Footer */}
                  <div className="coverflow-card-footer">
                    <div className="footer-title-row">
                      <h3 className="coverflow-card-title">{step.title}</h3>
                      <span className="coverflow-step-num">{step.number}</span>
                    </div>
                    <p className="coverflow-card-desc">{step.desc}</p>

                    {/* Action Button */}
                    <button className="coverflow-btn">
                      {step.btnText}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="coverflow-arrow-btn arrow-next" onClick={handleNext} aria-label="Next Card">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Bottom Coverflow Indicator Dots */}
        <div className="coverflow-dots-bar">
          {steps.map((s, i) => (
            <button
              key={s.id}
              className={`coverflow-dot ${activeIndex === i ? 'active' : ''}`}
              style={{ '--dot-accent': s.accentColor }}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to step ${s.number}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
