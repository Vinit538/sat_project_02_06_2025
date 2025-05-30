// // import React, { useState, useEffect } from 'react';
// // import { Link, useLocation } from 'react-router-dom';
// // import './Navbar.css';

// // function Navbar() {
// //   const [showNavbar, setShowNavbar] = useState(true);
// //   const [lastScrollY, setLastScrollY] = useState(0);
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [isScrolled, setIsScrolled] = useState(false);

// //   const location = useLocation();

// //   const toggleNavbar = () => setIsOpen(!isOpen);

// //   const handleLinkClick = () => {
// //     setIsOpen(false); // 👈 This closes the navbar on link click
// //   };

// //   const controlNavbar = () => {
// //     if (typeof window !== 'undefined') {
// //       if (window.scrollY > lastScrollY) {
// //         setShowNavbar(false);
// //       } else {
// //         setShowNavbar(true);
// //       }
// //       setLastScrollY(window.scrollY);
// //       setIsScrolled(window.scrollY > 50);
// //     }
// //   };

// //   useEffect(() => {
// //     const body = document.querySelector('.mainbody');
// //     if (body) {
// //       if (isOpen) {
// //         body.classList.add('push-down');
// //       } else {
// //         body.classList.remove('push-down');
// //       }
// //     }
// //   }, [isOpen]);

// //   useEffect(() => {
// //     window.addEventListener('scroll', controlNavbar);
// //     return () => window.removeEventListener('scroll', controlNavbar);
// //   }, [lastScrollY]);

// //   return (
// //     <nav
// //       className={`navbar navbar-expand-lg fixed-top custom-navbar
// //         ${isScrolled ? 'blurred' : ''}
// //         ${showNavbar ? 'visible' : 'hidden'}
// //       `}
// //     >
// //       <div className="container divNavContainer d-flex justify-content-between align-items-center">
// //         <Link className="navbar-brand d-flex align-items-center" to="/" onClick={handleLinkClick}>
// //           <img src="/sat_logo3.png" alt="Logo" className="navlogo" />
// //         </Link>

// //         <button
// //           className={`navbar-toggler custom-toggler ${isOpen ? 'open' : ''}`}
// //           type="button"
// //           onClick={toggleNavbar}
// //           aria-controls="navbarContent"
// //           aria-expanded={isOpen}
// //           aria-label="Toggle navigation"
// //         >
// //           <div className="toggler-icon"></div>
// //         </button>

// //         <div className={`collapse navbar-collapse navbarLinksBar ${isOpen ? 'show' : ''}`} id="navbarContent">
// //           <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
// //             <li className="nav-item">
// //               <Link className="nav-link" to="/courses" onClick={handleLinkClick}>Courses</Link>
// //             </li>
// //             <li className="nav-item">
// //               <Link className="nav-link" to="/projects" onClick={handleLinkClick}>Project</Link>
// //             </li>
// //             <li className="nav-item">
// //               <Link className="nav-link" to="/internships" onClick={handleLinkClick}>Internship</Link>
// //             </li>
// //             <li className="nav-item">
// //               <Link className="nav-link" to="/hireTalent" onClick={handleLinkClick}>Hire Talent</Link>
// //             </li>
// //             <li className="nav-item">
// //               <Link className="btn btn-outline-light ms-3 navloginBtn" to="/satLogin" onClick={handleLinkClick}>
// //                 Student Login
// //               </Link>
// //             </li>
// //           </ul>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Navbar.css';

// function Navbar() {
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const location = useLocation();

//   const toggleNavbar = () => setIsOpen(!isOpen);

//   const handleLinkClick = () => {
//     setIsOpen(false);
//   };

//   const controlNavbar = () => {
//     if (typeof window !== 'undefined') {
//       if (window.scrollY > lastScrollY) {
//         setShowNavbar(false);
//       } else {
//         setShowNavbar(true);
//       }
//       setLastScrollY(window.scrollY);
//       setIsScrolled(window.scrollY > 50);
//     }
//   };

//   useEffect(() => {
//     const body = document.querySelector('.mainbody');
//     if (body) {
//       if (isOpen) {
//         body.classList.add('push-down');
//       } else {
//         body.classList.remove('push-down');
//       }
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     window.addEventListener('scroll', controlNavbar);
//     return () => window.removeEventListener('scroll', controlNavbar);
//   }, [lastScrollY]);

//   return (
//     <nav
//       className={`navbar navbar-expand-lg fixed-top custom-navbar
//         ${isScrolled ? 'blurred' : ''}
//         ${showNavbar ? 'visible' : 'hidden'}
//       `}
//     >
//       <div className="container divNavContainer d-flex justify-content-between align-items-center">
//         <Link className="navbar-brand d-flex align-items-center" to="/" onClick={handleLinkClick}>
//           <img src="/sat_logo3.png" alt="Logo" className="navlogo" />
//         </Link>

//         <button
//           className={`navbar-toggler custom-toggler ${isOpen ? 'open' : ''}`}
//           type="button"
//           onClick={toggleNavbar}
//           aria-controls="navbarContent"
//           aria-expanded={isOpen}
//           aria-label="Toggle navigation"
//         >
//           <div className="toggler-icon"></div>
//         </button>

//         <div className={`collapse navbar-collapse navbarLinksBar ${isOpen ? 'show' : ''}`} id="navbarContent">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
//             {location.pathname !== '/' && (
//               <li className="nav-item">
//                 <Link className="nav-link" to="/" onClick={handleLinkClick}>Home</Link>
//               </li>
//             )}
//             <li className="nav-item">
//               <Link className="nav-link" to="/courses" onClick={handleLinkClick}>Courses</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/projects" onClick={handleLinkClick}>Project</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/internships" onClick={handleLinkClick}>Internship</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/hireTalent" onClick={handleLinkClick}>Hire Talent</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="btn btn-outline-light ms-3 navloginBtn" to="/satLogin" onClick={handleLinkClick}>
//                 Student Login
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;




import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHome, FaBook, FaProjectDiagram, FaUserGraduate,
  FaUsers, FaSignInAlt
} from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      setShowNavbar(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  useEffect(() => {
    const body = document.querySelector('.mainbody');
    if (body) {
      body.classList.toggle('push-down', isOpen);
    }
  }, [isOpen]);

  return (
    <motion.nav
      className={`navbar navbar-expand-lg fixed-top custom-navbar
        ${isScrolled ? 'blurred' : ''} ${showNavbar ? 'visible' : 'hidden'}`}
      initial={{ y: -80 }}
      animate={{ y: showNavbar ? 0 : -80 }}
      transition={{ duration: 0.4 }}
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
            <AnimatePresence>
              {location.pathname !== '/' && (
                <motion.li
                  className="nav-item"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link className="nav-link" to="/" onClick={handleLinkClick}>
                    <FaHome className="me-1" /> Home
                  </Link>
                </motion.li>
              )}
            </AnimatePresence>

            <motion.li className="nav-item" whileHover={{ scale: 1.05 }}>
              <Link className="nav-link" to="/courses" onClick={handleLinkClick}>
                <FaBook className="me-1" /> Courses
              </Link>
            </motion.li>
            <motion.li className="nav-item" whileHover={{ scale: 1.05 }}>
              <Link className="nav-link" to="/projects" onClick={handleLinkClick}>
                <FaProjectDiagram className="me-1" /> Project
              </Link>
            </motion.li>
            <motion.li className="nav-item" whileHover={{ scale: 1.05 }}>
              <Link className="nav-link" to="/internships" onClick={handleLinkClick}>
                <FaUserGraduate className="me-1" /> Internship
              </Link>
            </motion.li>
            <motion.li className="nav-item" whileHover={{ scale: 1.05 }}>
              <Link className="nav-link" to="/hireTalent" onClick={handleLinkClick}>
                <FaUsers className="me-1" /> Hire Talent
              </Link>
            </motion.li>
            <motion.li className="nav-item" whileHover={{ scale: 1.05 }}>
              <Link className="btn btn-outline-light ms-3 navloginBtn" to="/satLogin" onClick={handleLinkClick}>
                <FaSignInAlt className="me-1" /> Student Login
              </Link>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
