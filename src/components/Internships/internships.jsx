import React, { useState } from 'react';
import './internships.css';

export default function Internships() {
  const [selectedTracks, setSelectedTracks] = useState({
    1: 0,
    2: 0,
    3: 0
  });

  const internshipsList = [
    {
      id: 1,
      title: 'Data Analytics',
      location: 'REMOTE',
      subtitle: 'Data Analytics Intern',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      desc: 'Work on real-world datasets to analyze data, find insights, and create dashboards. Learn Excel, SQL, Python, and Power BI with hands-on projects.',
      skills: ['Excel', 'SQL', 'Python', 'Power BI'],
      accentColor: '#38bdf8', // Neon Sky Blue
      cardTheme: 'job-theme-cyan',
      tracks: [
        { duration: '4 weeks', type: 'Free track' },
        { duration: '3 months', type: 'Paid track' },
        { duration: '6 months', type: 'Paid track' }
      ]
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      location: 'REMOTE',
      subtitle: 'UI/UX Design Intern',
      imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
      desc: 'Design user-friendly interfaces, wireframes, prototypes, and visual layouts for web and mobile products using Figma. Conduct research & user testing.',
      skills: ['Figma', 'Wireframing', 'Prototyping', 'User Research'],
      accentColor: '#ec4899', // Neon Pink
      cardTheme: 'job-theme-pink',
      tracks: [
        { duration: '4 weeks', type: 'Free track' },
        { duration: '3 months', type: 'Paid track' },
        { duration: '6 months', type: 'Paid track' }
      ]
    },
    {
      id: 3,
      title: 'Android Development',
      location: 'REMOTE',
      subtitle: 'Android Development Intern',
      imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80',
      desc: 'Build Android applications, implement app features, and improve UI and performance using Java, Kotlin, or Flutter engines.',
      skills: ['Kotlin', 'Java', 'Flutter', 'Android SDK'],
      accentColor: '#10b981', // Neon Emerald
      cardTheme: 'job-theme-emerald',
      tracks: [
        { duration: '4 weeks', type: 'Free track' },
        { duration: '3 months', type: 'Paid track' },
        { duration: '6 months', type: 'Paid track' }
      ]
    }
  ];

  const handleTrackSelect = (cardId, trackIndex) => {
    setSelectedTracks((prev) => ({
      ...prev,
      [cardId]: trackIndex
    }));
  };

  return (
    <section className="internships-section" id="internships">
      {/* Background Centered Watermark */}
      <div className="page-section-watermark-container dark-section-watermark">
        <span className="page-section-watermark-text">NAVYAN</span>
        <span className="page-section-watermark-sub">LIVE INTERNSHIPS</span>
      </div>

      <div className="tech-grid-lines" aria-hidden="true"></div>

      <div className="internships-container">
        {/* Section Header */}
        <div className="internships-header">
          <div className="internships-tagline">
            <span className="internships-tagline-dot"></span>
            <span>INTERNSHIP</span>
          </div>
          <h2 className="internships-title">Live Internships</h2>
          <p className="internships-subtitle">
            Explore currently open internships. Select your track to begin execution.
          </p>
        </div>

        {/* Brand New Unsplash Modern Glass Cards Grid */}
        <div className="internships-grid">
          {internshipsList.map((job) => {
            const activeTrackIndex = selectedTracks[job.id];
            const activeTrack = job.tracks[activeTrackIndex];

            return (
              <div
                key={job.id}
                className={`internship-glass-card ${job.cardTheme}`}
                style={{ '--job-accent': job.accentColor }}
              >
                {/* Top Image Poster with Unsplash HD Graphic */}
                <div className="job-poster-banner">
                  <img src={job.imageUrl} alt={job.title} className="job-poster-img" />
                  <div className="job-poster-overlay"></div>
                  
                  {/* Floating Remote Pill */}
                  <div className="job-remote-badge">
                    <span className="pulse-dot"></span>
                    <span>{job.location}</span>
                  </div>
                </div>

                {/* Job Info Header */}
                <div className="job-header-info">
                  <h3 className="job-title-main">{job.title}</h3>
                  <span className="job-subtitle-tag">{job.subtitle}</span>
                </div>

                {/* Job Description */}
                <p className="job-desc-text">{job.desc}</p>

                {/* Skill Chips */}
                <div className="job-skills-chips">
                  {job.skills.map((skill, index) => (
                    <span key={index} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Interactive Duration Track Selector Panel */}
                <div className="job-duration-panel">
                  <span className="duration-panel-title">SELECT TRACK DURATION:</span>
                  <div className="duration-selector-row">
                    {job.tracks.map((track, index) => (
                      <button
                        key={index}
                        className={`duration-pill ${activeTrackIndex === index ? 'active' : ''}`}
                        onClick={() => handleTrackSelect(job.id, index)}
                      >
                        <span className="pill-time">{track.duration}</span>
                        <span className="pill-type">{track.type}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Footer Apply Bar */}
                <div className="job-card-footer">
                  <div className="selected-track-info">
                    <span className="track-label">Selected Track:</span>
                    <span className="track-val" style={{ color: job.accentColor }}>
                      {activeTrack.duration} ({activeTrack.type})
                    </span>
                  </div>
                  <button className="job-apply-now-btn">
                    <span>Apply Now</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Internships Link */}
        <div className="view-all-wrapper">
          <a href="#all-internships" className="view-all-link">
            <span>View all internships</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
