import React, { useState, useEffect } from 'react';
import './nav.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#', active: true },
    { label: 'ABOUT US', href: '#about' },
    { label: 'INTERNSHIPS', href: '#internships' },
    { label: 'CURRICULUM', href: '#curriculum' },
    { label: 'PRICING', href: '#pricing' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className={`nav-header${scrolled ? ' nav-scrolled' : ''}`}>
      <nav className="nav-container">
        {/* Logo */}
        <a href="#" className="nav-logo" id="nav-logo">
          <svg className="nav-logo-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="8" r="5" fill="#F27A1A" />
            <path d="M8 40V12L24 40H30V8h-6v26L8 8H2v32h6z" fill="#1A56DB" />
            <path d="M30 8h6v32h-6V8z" fill="#1A56DB" />
          </svg>
          <span className="nav-logo-text">Navyan</span>
        </a>

        {/* Floating Pill Nav Links */}
        <div className="nav-links-wrapper">
          <ul className="nav-links" id="nav-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`nav-link${link.active ? ' nav-link-active' : ''}`}
                  id={`nav-link-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                >
                  {link.label}
                  {link.active && (
                    <span className="nav-link-dot"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Orange CTA Button */}
        <a href="#contact" className="nav-cta" id="nav-book-tour">
          BOOK A TOUR
        </a>

        {/* Mobile Hamburger */}
        <button
          className={`nav-hamburger${mobileOpen ? ' nav-hamburger-open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          id="nav-hamburger"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`nav-mobile-menu${mobileOpen ? ' nav-mobile-open' : ''}`}>
        <ul className="nav-mobile-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`nav-mobile-link${link.active ? ' nav-mobile-link-active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-mobile-cta" onClick={() => setMobileOpen(false)}>
              BOOK A TOUR
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
