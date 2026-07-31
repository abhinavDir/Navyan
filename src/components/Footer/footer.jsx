import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      {/* 3D Curved Top Border Connector separating FAQ and Footer */}
      <div className="footer-section-connector">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="footer-connector-svg">
          <path d="M0,80 Q720,0 1440,80 Z" fill="#080c14" />
        </svg>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      <div className="main-footer">
        <div className="footer-grid-container">
          {/* Logo & Description */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <span className="logo-pulse-dot"></span>
              <h3 className="footer-logo-text">NAVYAN</h3>
            </div>
            <p className="footer-brand-desc">
              NAVYAN helps students apply, get selected, track performance, and earn verified internship outcomes through a clear and modern workflow.
            </p>
            <a href="https://navyan.online" target="_blank" rel="noopener noreferrer" className="footer-website-link">
              navyan.online
            </a>
          </div>

          {/* Links Column with small inline SVGs */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Links</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#hero">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="link-icon-svg">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#programs">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="link-icon-svg">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                  <span>Courses</span>
                </a>
              </li>
              <li>
                <a href="#internships">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="link-icon-svg">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  <span>Internships</span>
                </a>
              </li>
              <li>
                <a href="#workflow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="link-icon-svg">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                  <span>Jobs</span>
                </a>
              </li>
              <li>
                <a href="#services">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="link-icon-svg">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#faq">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="link-icon-svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Column with small social SVGs */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Follow Us</h4>
            <ul className="footer-links-list">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="link-icon-svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="link-icon-svg">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="link-icon-svg">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                  <span>YouTube</span>
                </a>
              </li>
              <li>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="link-icon-svg">
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                  <span>X.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="footer-bottom-row">
          <p className="copyright-text">©2026 NAVYAN. All rights reserved.</p>
          <p className="powered-by">Design by NAVYAN - Powered by Excellence</p>
        </div>

        {/* GIANT GRADIENT WATERMARK FADING IN FROM BOTTOM */}
        <div className="footer-giant-watermark-wrapper">
          <h1 className="footer-giant-watermark-text">NAVYAN</h1>
        </div>
      </div>
    </footer>
  );
}
