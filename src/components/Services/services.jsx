import React, { useState } from 'react';
import './services.css';

export default function Services() {
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  const servicesList = [
    {
      id: 1,
      category: 'Software Development',
      title: 'Custom Software Development',
      subtitle: 'Build scalable, secure, and custom software solutions tailored to streamline operations.',
      accentColor: '#fef3c7',
      cardBg: 'linear-gradient(145deg, #d97706 0%, #b45309 100%)',
      cardClass: 'solid-card-amber',
      staggerClass: 'stagger-up',
      tags: ['Custom Software', 'CRM Development', 'ERP Solutions'],
      solutions: [
        'CRM & ERP Solutions',
        'Business Management Systems',
        'Inventory Management Software',
        'HRMS & Employee Systems',
        'School & College Management',
        'Healthcare Software',
        'Learning Management Systems (LMS)',
        'Admin Dashboards & Portals'
      ],
      whyChoose: [
        'Tailor-Made Software Solutions',
        'Modern & Intuitive UX',
        'Secure & Scalable Architecture',
        'Process Automation',
        'API & Third-Party Integration'
      ]
    },
    {
      id: 2,
      category: 'Artificial Intelligence',
      title: 'AI Solutions',
      subtitle: 'Build intelligent AI-powered applications, chatbots, and automation tools for your business.',
      accentColor: '#ede9fe',
      cardBg: 'linear-gradient(145deg, #7c3aed 0%, #5b21b6 100%)',
      cardClass: 'solid-card-purple',
      staggerClass: 'stagger-down',
      tags: ['AI Chatbots', 'Generative AI', 'AI Automation'],
      solutions: [
        'AI Chatbots & Assistants',
        'Generative AI Applications',
        'AI Workflow Automation',
        'Custom AI Software',
        'AI Document Processing',
        'Resume & CV Analyzer',
        'AI Knowledge Base Systems',
        'AI API Integration'
      ],
      whyChoose: [
        'Custom AI Solutions',
        'Scalable & Secure Architecture',
        'Fast Development & Deployment',
        'User-Friendly Interfaces',
        'Continuous Support & Upgrades'
      ]
    },
    {
      id: 3,
      category: 'Web Development',
      title: 'Custom Website Development',
      subtitle: 'Build fast, responsive, SEO-friendly, and modern websites tailored to your business.',
      accentColor: '#d1fae5',
      cardBg: 'linear-gradient(145deg, #059669 0%, #046c4e 100%)',
      cardClass: 'solid-card-emerald',
      staggerClass: 'stagger-up',
      tags: ['Responsive Design', 'Modern UI/UX', 'SEO Friendly'],
      solutions: [
        'Custom Website Development',
        'Responsive & Mobile-Friendly',
        'Modern UI/UX Design',
        'SEO & Speed Optimization',
        'CMS & Admin Dashboard Support',
        'Secure Authentication & APIs',
        'Web Applications',
        'Ongoing Maintenance & Support'
      ],
      whyChoose: [
        'Custom Website Architecture',
        'Premium Look & Experience',
        'Fast Loading & Scalable',
        'SEO Optimized',
        'Dedicated Technical Support'
      ]
    }
  ];

  const handleNextMobile = () => {
    setMobileActiveIndex((prev) => (prev < servicesList.length - 1 ? prev + 1 : 0));
  };

  const handlePrevMobile = () => {
    setMobileActiveIndex((prev) => (prev > 0 ? prev - 1 : servicesList.length - 1));
  };

  return (
    <section className="services-section solid-services-bg" id="services">
      {/* Background Centered Watermark */}
      <div className="page-section-watermark-container dark-section-watermark">
        <span className="page-section-watermark-text">NAVYAN</span>
        <span className="page-section-watermark-sub">IT SERVICES</span>
      </div>

      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <div className="services-tagline">
            <span className="services-tagline-dot"></span>
            <span>SERVICES</span>
          </div>
          <h2 className="services-title">Featured Services</h2>
          <p className="services-subtitle">
            Enterprise-grade digital solutions tailored to transform operations, build intelligent software, and power modern web platforms.
          </p>
        </div>

        {/* DESKTOP VERTICAL 3-COLUMN STAGGERED UP AND DOWN LAYOUT */}
        <div className="desktop-staggered-grid">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className={`solid-service-card ${service.cardClass} ${service.staggerClass}`}
              style={{
                '--card-bg-solid': service.cardBg,
                '--card-accent-color': service.accentColor
              }}
            >
              {/* Card Header Category Badge */}
              <div className="solid-card-header">
                <span className="solid-category-badge">{service.category}</span>
              </div>

              {/* Title & Subtitle */}
              <div className="solid-title-box">
                <h3 className="solid-card-title">{service.title}</h3>
                <p className="solid-card-subtitle">{service.subtitle}</p>
              </div>

              {/* Highlight Tags */}
              <div className="solid-tags-list">
                {service.tags.map((tag, idx) => (
                  <span key={idx} className="solid-tag-chip">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Solutions List */}
              <div className="solid-solutions-block">
                <span className="solutions-block-title">Key Capabilities:</span>
                <div className="solutions-bullets-grid">
                  {service.solutions.slice(0, 6).map((sol, idx) => (
                    <div key={idx} className="bullet-item">
                      <span className="bullet-star">✦</span>
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer CTA Stub */}
              <div className="solid-card-footer">
                <button className="solid-project-btn">
                  Start a Project →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE CIRCULAR CAROUSEL VIEW ("in the circle to show one by one") */}
        <div className="mobile-circle-carousel-wrapper">
          <div className="circle-nav-controls">
            <button className="circle-arrow-btn prev" onClick={handlePrevMobile} aria-label="Previous Service">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="circle-center-stage">
              {servicesList.map((service, index) => {
                const isCurrent = mobileActiveIndex === index;

                return (
                  <div
                    key={service.id}
                    className={`mobile-circle-card ${service.cardClass} ${isCurrent ? 'is-active-circle' : ''}`}
                    style={{
                      '--card-bg-solid': service.cardBg,
                      '--card-accent-color': service.accentColor
                    }}
                  >
                    <div className="mobile-circle-header">
                      <span className="solid-category-badge">{service.category}</span>
                    </div>

                    <h3 className="solid-card-title">{service.title}</h3>
                    <p className="solid-card-subtitle">{service.subtitle}</p>

                    <div className="solid-tags-list">
                      {service.tags.map((tag, idx) => (
                        <span key={idx} className="solid-tag-chip">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mobile-solutions-list">
                      {service.solutions.slice(0, 4).map((sol, idx) => (
                        <div key={idx} className="bullet-item">
                          <span className="bullet-star">✦</span>
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>

                    <button className="solid-project-btn">
                      Start a Project →
                    </button>
                  </div>
                );
              })}
            </div>

            <button className="circle-arrow-btn next" onClick={handleNextMobile} aria-label="Next Service">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Circular Pagination Indicators */}
          <div className="circle-pagination-dots">
            {servicesList.map((s, idx) => (
              <button
                key={s.id}
                className={`circle-dot ${mobileActiveIndex === idx ? 'active' : ''}`}
                onClick={() => setMobileActiveIndex(idx)}
              ></button>
            ))}
          </div>
        </div>

        {/* Global Bottom Link */}
        <div className="global-view-all-wrapper">
          <a href="#all-services" className="global-view-all-btn">
            <span>View all services</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
