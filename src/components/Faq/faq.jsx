import React, { useState } from 'react';
import './faq.css';

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [reactionCounts, setReactionCounts] = useState({ likes: 142, helpful: 89, love: 230 });
  const [userVoted, setUserVoted] = useState({});

  const faqList = [
    {
      id: 1,
      num: '01',
      category: 'FREE TRACK',
      themeClass: 'card-theme-pink',
      accentColor: '#f472b6',
      question: 'Who can apply for Navyan internships?',
      answer: 'Students, freshers, and early-career learners who want practical skill development and structured internship outcomes can apply. No prior experience is required.'
    },
    {
      id: 2,
      num: '02',
      category: 'FREE TRACK',
      themeClass: 'card-theme-blue',
      accentColor: '#60a5fa',
      question: 'Is the 4-week internship really free?',
      answer: 'Yes! The 4-week track is 100% free, providing a structured learning roadmap, hands-on task execution, and a verified completion certificate with zero fees.'
    },
    {
      id: 3,
      num: '03',
      category: 'PAID TRACKS',
      themeClass: 'card-theme-olive',
      accentColor: '#a3e635',
      question: 'What is different in the paid programs?',
      answer: 'Paid programs (3 & 6 months) include live interactive classes, dedicated coordinator mentorship, advanced real-world project exposure, and reward eligibility.'
    },
    {
      id: 4,
      num: '04',
      category: 'APPLICATION',
      themeClass: 'card-theme-orange',
      accentColor: '#fb923c',
      question: 'How do I know my application status?',
      answer: 'Once applied, your application status, review progress, task submissions, and completion certificates stay visible inside your dedicated Navyan dashboard.'
    }
  ];

  const handleReaction = (type) => {
    setReactionCounts((prev) => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

  const handleVote = (faqId, voteType) => {
    setUserVoted((prev) => ({
      ...prev,
      [faqId]: voteType
    }));
  };

  const filteredFaqs = faqList.filter((item) => {
    const matchesCategory = activeCategory === 'ALL' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const activeFaq = filteredFaqs[activeIndex] || faqList[0];

  return (
    <section className="faq-phone-section client-ui-bg" id="faq">
      {/* Background Centered Watermark */}
      <div className="page-section-watermark-container">
        <span className="page-section-watermark-text">NAVYAN</span>
        <span className="page-section-watermark-sub">STUDENT FAQ</span>
      </div>

      <div className="faq-container">
        {/* Giant Header matching reference style */}
        <div className="faq-header-container">
          <div className="faq-header-content">
            <h2 className="faq-giant-title-new">
              What <span className="highlight-blue">NAVYAN's</span> <span className="highlight-orange">Students Think?</span>
            </h2>
            <p className="faq-subtitle-new">Questions & feedback from students before applying.</p>
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="faq-controls-bar">
          <div className="faq-search-box">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search student questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="faq-search-input"
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => setSearchQuery('')}>×</button>
            )}
          </div>

          <div className="faq-category-pills">
            {['ALL', 'FREE TRACK', 'PAID TRACKS', 'APPLICATION'].map((cat) => (
              <button
                key={cat}
                className={`cat-pill-btn-new ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveIndex(0);
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Slanted Phone Stage & FAQ Review Cards */}
        <div className="faq-stage-wrapper-new">
          {/* LEFT 3D SLANTED PHONE MOCKUP (Exact placement/skew as the Code Calibre mockup) */}
          <div className="phone-mockup-container-new">
            {/* Floating 5-Star bubble dialogue */}
            <div className="floating-badge-new badge-stars-new">
              <span className="stars-gold-new">★★★★★</span>
            </div>

            {/* Floating Blue Speech Like bubble 1 */}
            <div className="floating-badge-new badge-like-new-1">
              <span className="like-icon-new">👍</span>
            </div>

            {/* Floating Blue Speech Like bubble 2 */}
            <div className="floating-badge-new badge-like-new-2">
              <span className="like-icon-new">👍</span>
            </div>

            {/* Floating Red 3D heart spheres */}
            <div className="floating-badge-new badge-heart-new-1">
              <span className="heart-icon-new">❤️</span>
            </div>
            <div className="floating-badge-new badge-heart-new-2">
              <span className="heart-icon-new">❤️</span>
            </div>

            {/* Smartphone Outer Body Shell (Slanted/3D Angle) */}
            <div className="phone-body-frame-new">
              <div className="phone-screen-notch-new"></div>
              
              {/* Phone App Mockup Screen */}
              <div className="phone-app-screen-new">
                <div className="phone-app-header-new">
                  <span className="phone-time-new">4:10</span>
                  <span className="phone-brand-new">NAVYAN</span>
                  <span className="phone-signal-new">📶 99%</span>
                </div>

                <div className="phone-app-mockup-content">
                  <div className="mini-app-title">App Development</div>
                  <div className="mini-app-divider"></div>
                  
                  {activeFaq && (
                    <div className="mini-app-card" style={{ borderLeftColor: activeFaq.accentColor }}>
                      <span className="mini-app-num">{activeFaq.num}</span>
                      <h4 className="mini-app-q">{activeFaq.question}</h4>
                      <p className="mini-app-a">{activeFaq.answer}</p>
                    </div>
                  )}

                  <div className="mini-app-reviews-row">
                    <span className="mini-stars">★★★★★</span>
                    <span className="mini-rating-label">5.0 / 5.0 Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE INTERACTIVE FAQ CLIENT-STYLE CARDS */}
          <div className="faq-review-cards-list">
            {filteredFaqs.length === 0 ? (
              <div className="no-faqs-found-new">
                <p>No questions matching "{searchQuery}"</p>
                <button className="reset-filter-btn" onClick={() => { setSearchQuery(''); setActiveCategory('ALL'); }}>
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredFaqs.map((item, index) => {
                const isOpen = activeIndex === index;
                const voted = userVoted[item.id];

                return (
                  <div
                    key={item.id}
                    className={`faq-review-card ${item.themeClass} ${isOpen ? 'is-open' : ''}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {/* Very small overlapping avatar/icon */}
                    <div className="faq-card-avatar-small">
                      <span className="avatar-num-text">{item.num}</span>
                    </div>

                    <div className="faq-card-body-content">
                      <div className="faq-card-header-line">
                        <h3 className="faq-card-question-title">{item.question}</h3>
                        <span className="faq-card-stars">★★★★★</span>
                      </div>

                      {/* Display answer if open (or brief snippet with animation) */}
                      <div className="faq-card-answer-container">
                        <p className="faq-card-answer-text">{item.answer}</p>
                        
                        {isOpen && (
                          <div className="helpful-feedback-box-new" onClick={(e) => e.stopPropagation()}>
                            <span className="helpful-label-new">Was this helpful?</span>
                            <div className="helpful-btns-new">
                              <button
                                className={`feedback-btn-new ${voted === 'yes' ? 'voted-yes' : ''}`}
                                onClick={() => handleVote(item.id, 'yes')}
                              >
                                👍 Yes
                              </button>
                              <button
                                className={`feedback-btn-new ${voted === 'no' ? 'voted-no' : ''}`}
                                onClick={() => handleVote(item.id, 'no')}
                              >
                                👎 No
                              </button>
                            </div>
                            {voted && (
                              <span className="thanks-msg-new">Thanks! ✨</span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
