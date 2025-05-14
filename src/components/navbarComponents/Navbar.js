import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  const toggleNavbar = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    setIsOpen(false); // 👈 This closes the navbar on link click
  };

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    }
  };

  useEffect(() => {
    const body = document.querySelector('.mainbody');
    if (body) {
      if (isOpen) {
        body.classList.add('push-down');
      } else {
        body.classList.remove('push-down');
      }
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top custom-navbar
        ${isScrolled ? 'blurred' : ''}
        ${showNavbar ? 'visible' : 'hidden'}
      `}
    >
      <div className="container divNavContainer d-flex justify-content-between align-items-center">
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={handleLinkClick}>
          <img src="/sat_logo3.png" alt="Logo" className="navlogo" />
        </Link>

        <button
          className={`navbar-toggler custom-toggler ${isOpen ? 'open' : ''}`}
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <div className="toggler-icon"></div>
        </button>

        <div className={`collapse navbar-collapse navbarLinksBar ${isOpen ? 'show' : ''}`} id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <Link className="nav-link" to="/courses" onClick={handleLinkClick}>Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={handleLinkClick}>Project</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/internships" onClick={handleLinkClick}>Internship</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hireTalent" onClick={handleLinkClick}>Hire Talent</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-light ms-3 navloginBtn" to="/satLogin" onClick={handleLinkClick}>
                Student Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
