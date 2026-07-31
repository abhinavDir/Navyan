import React from 'react';
import './whychoose.css';

import happyStudentImg from '../../assets/whychoose/happy_student.png';

export default function WhyChoose() {
  const reasonsList = [
    {
      id: 1,
      num: '01',
      title: 'Real Experience',
      desc: 'Students work through structured tasks and applied execution instead of passive learning.',
      colorClass: 'card-pink',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#db2777" strokeWidth="2.5">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      )
    },
    {
      id: 2,
      num: '02',
      title: 'Live Mentorship',
      desc: 'Guidance stays close to the work so students always know what to do next.',
      colorClass: 'card-blue',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      id: 3,
      num: '03',
      title: 'Performance Tracking',
      desc: 'Applications, progress, submissions, and outcomes stay visible in one dashboard.',
      colorClass: 'card-olive',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#65a30d" strokeWidth="2.5">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    },
    {
      id: 4,
      num: '04',
      title: 'Rewards & Certificates',
      desc: 'Strong performers can unlock recognition, and every completed track stays verifiable.',
      colorClass: 'card-orange',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2.5">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      )
    }
  ];

  return (
    <section className="whychoose-orbital-section" id="whychoose">
      {/* Background Centered Watermark */}
      <div className="page-section-watermark-container">
        <span className="page-section-watermark-text">NAVYAN</span>
        <span className="page-section-watermark-sub">WHY CHOOSE US</span>
      </div>

      {/* Background Pulse Rings */}
      <div className="orbital-pulse-ring ring-outer" aria-hidden="true"></div>
      <div className="orbital-pulse-ring ring-inner" aria-hidden="true"></div>

      <div className="whychoose-container">
        {/* Section Header */}
        <div className="whychoose-header">
          <div className="whychoose-tagline">
            <span className="whychoose-tagline-dot"></span>
            <span>WHY CHOOSE NAVYAN</span>
          </div>
          <h2 className="whychoose-title">Why students choose NAVYAN.</h2>
          <p className="whychoose-subtitle">
            Everything you need to gain practical experience, track real progress, and unlock verified career credentials.
          </p>
        </div>

        {/* UNIFIED ORBITAL STAGE (SINGLE SET OF 4 CORNER CARDS) */}
        <div className="orbital-stage-wrapper">
          {/* CURVED ARROWS SVG CANVAS */}
          <svg className="curved-arrows-svg-canvas" viewBox="0 0 1000 600" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrowhead" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb" />
              </marker>
            </defs>

            {/* Top-Left Arrow */}
            <path d="M 240 100 Q 380 130 430 230" stroke="#ec4899" strokeWidth="2.5" strokeDasharray="5 4" markerEnd="url(#arrowhead)" />

            {/* Bottom-Left Arrow */}
            <path d="M 240 500 Q 380 470 430 370" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="5 4" markerEnd="url(#arrowhead)" />

            {/* Top-Right Arrow */}
            <path d="M 760 100 Q 620 130 570 230" stroke="#65a30d" strokeWidth="2.5" strokeDasharray="5 4" markerEnd="url(#arrowhead)" />

            {/* Bottom-Right Arrow */}
            <path d="M 760 500 Q 620 470 570 370" stroke="#ea580c" strokeWidth="2.5" strokeDasharray="5 4" markerEnd="url(#arrowhead)" />
          </svg>

          {/* DEAD-CENTER STUDENT PORTRAIT */}
          <div className="center-student-box">
            <div className="student-glow-backdrop"></div>
            <img src={happyStudentImg} alt="Navyan Student" className="center-student-img" />
            <div className="student-center-badge">
              <span className="sparkle">✦</span>
              <span>VERIFIED LEARNING</span>
            </div>
          </div>

          {/* SINGLE SET OF 4 CORNER CARDS (NO DUPLICATES) */}
          <div className="orbital-cards-grid">
            <div className={`orbital-card card-top-left ${reasonsList[0].colorClass}`}>
              <div className="card-icon-header">
                <div className="icon-circle">{reasonsList[0].icon}</div>
                <span className="card-num">01</span>
              </div>
              <h3 className="card-title">{reasonsList[0].title}</h3>
              <p className="card-desc">{reasonsList[0].desc}</p>
            </div>

            <div className={`orbital-card card-bottom-left ${reasonsList[1].colorClass}`}>
              <div className="card-icon-header">
                <div className="icon-circle">{reasonsList[1].icon}</div>
                <span className="card-num">02</span>
              </div>
              <h3 className="card-title">{reasonsList[1].title}</h3>
              <p className="card-desc">{reasonsList[1].desc}</p>
            </div>

            <div className={`orbital-card card-top-right ${reasonsList[2].colorClass}`}>
              <div className="card-icon-header">
                <div className="icon-circle">{reasonsList[2].icon}</div>
                <span className="card-num">03</span>
              </div>
              <h3 className="card-title">{reasonsList[2].title}</h3>
              <p className="card-desc">{reasonsList[2].desc}</p>
            </div>

            <div className={`orbital-card card-bottom-right ${reasonsList[3].colorClass}`}>
              <div className="card-icon-header">
                <div className="icon-circle">{reasonsList[3].icon}</div>
                <span className="card-num">04</span>
              </div>
              <h3 className="card-title">{reasonsList[3].title}</h3>
              <p className="card-desc">{reasonsList[3].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
