// import React from 'react';
// import { Link } from 'react-router-dom';
// import './AdminNavbar.css'; // optional for styling

// const AdminNavbar = () => {
//   return (
//     <div className="admin-navbar bg-dark text-white p-2 text-sm">
//       <div className="container d-flex justify-content-between">
//         <div>
//           <Link to="/admin" className="text-white me-3">Dashboard</Link>
//           <Link to="/admin/ManageStudentPage" className="text-white me-3">Students</Link>
//           <Link to="/admin/MessagesPage" className="text-white me-3">Messages</Link>
//           <Link to="/admin/ApplicationsPage" className="text-white me-3">Applications</Link>
//           <Link to="/admin/HiringRequestsPage" className="text-white">Hiring Requests</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminNavbar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './AdminNavbar.css';

// const AdminNavbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="admin-navbar">
//       <div className="logo">Admin Panel</div>
//       <div className="hamburger" onClick={() => setOpen(!open)}>
//         &#9776;
//       </div>
//       <div className={`nav-links ${open ? 'open' : ''}`}>
//         <Link to="/admin">Dashboard</Link>
//         <Link to="/admin/ManageStudentPage">Students</Link>
//         <Link to="/admin/MessagesPage">Messages</Link>
//         <Link to="/admin/ApplicationsPage">Applications</Link>
//         <Link to="/admin/HiringRequestsPage">Hiring</Link>
//         <button className="logout-btn">Logout</button>
//       </div>
//     </nav>
//   );
// };

// export default AdminNavbar;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './AdminNavbar.css';

const AdminNavbar = () => {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => setOpen(!open);
  const handleLinkClick = () => setOpen(false);

  useEffect(() => {
    const controlNavbar = () => {
      setShowNavbar(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <motion.nav
      className={`admin-navbar ${isScrolled ? 'blurred' : ''} ${showNavbar ? 'visible' : 'hidden'}`}
      initial={{ y: -80 }}
      animate={{ y: showNavbar ? 0 : -80 }}
      transition={{ duration: 0.4 }}
    >
      <div className="admin-container">
        <div className="logo">Admin Panel</div>
        <div className={`hamburger ${open ? 'open' : ''}`} onClick={toggleNavbar}>
          <div className="toggler-icon"></div>
        </div>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          <Link to="/admin" onClick={handleLinkClick}>Dashboard</Link>
          <Link to="/admin/ManageStudentPage" onClick={handleLinkClick}>Students</Link>
          <Link to="/admin/MessagesPage" onClick={handleLinkClick}>Messages</Link>
          <Link to="/admin/ApplicationsPage" onClick={handleLinkClick}>Applications</Link>
          <Link to="/admin/HiringRequestsPage" onClick={handleLinkClick}>Hiring</Link>
          <button className="logout-btn" onClick={handleLinkClick}>Logout</button>
        </div>
      </div>
    </motion.nav>
  );
};

export default AdminNavbar;
