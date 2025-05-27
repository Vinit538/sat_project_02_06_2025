import React from 'react';
import { motion } from 'framer-motion';
import {
  FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaYoutube,
  FaLaptopCode, FaBriefcase, FaUserTie, FaShieldAlt
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Details.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Details = () => {
  return (
    <motion.div
      className="details-container"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <motion.div className="details-header" variants={fadeInUp}>
        <img src="/sat_logo3.png" alt="SAT Academy Logo" className="details-logo" />
        <h2 className="details-title">SAT Academy — Educate. Elevate. Excel.</h2>
        <p className="details-subtext">Empowering learners with real-world skills and career opportunities.</p>
      </motion.div>

      <motion.div className="details-social-icons" variants={fadeInUp}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </motion.div>

      <motion.div className="details-grid" variants={fadeInUp}>
        <div className="details-section">
          <h4><FaLaptopCode className="details-icon" /> <span>Explore</span></h4>
          <Link to="/courses"><span>Courses</span></Link>
          <Link to="/internships"><span>Internships</span></Link>
          <Link to="/projects"><span>Projects</span></Link>
        </div>
        <div className="details-section">
          <h4><FaUserTie className="details-icon" /> <span>Company</span></h4>
          <Link to="/aboutUs"><span>About Us</span></Link>
          <Link to="/contactUs"><span>Contact</span></Link>
          <Link to="/career"><span>Career</span></Link>
          <Link to="/teamPage"><span>Team</span></Link>
        </div>
        <div className="details-section">
          <h4><FaShieldAlt className="details-icon" /> Legal</h4>
          <Link to="/privacy-policy"><span>Privacy Policy</span></Link>
          <Link to="/terms"><span>Terms & Conditions</span></Link>
        </div>
        <div className="details-section">
          <h4><FaBriefcase className="details-icon" /> Connect</h4>
          <Link to="https://facebook.com" target="_blank"><span>Facebook</span></Link>
          <Link to="https://instagram.com" target="_blank"><span>Instagram</span></Link>
          <Link to="https://github.com" target="_blank"><span>Github</span></Link>
          <Link to="https://youtube.com" target="_blank"><span>YouTube</span></Link>
          <Link to="https://linkedin.com" target="_blank"><span>LinkedIn</span></Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Details;

{/* <div className="details-section">
  <h4><FaLaptopCode className="details-icon" /> Explore</h4>
  <Link to="/courses"><span>Courses</span></Link>
  <Link to="/internships"><span>Internships</span></Link>
  <Link to="/projects"><span>Projects</span></Link>
</div> */}
