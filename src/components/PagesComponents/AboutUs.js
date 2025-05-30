import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb, FaUsers, FaHandshake, FaGlobe, FaArrowRight, FaCertificate,
  FaChalkboardTeacher, FaLaptopCode, FaBuilding, FaCheckCircle, FaUniversity,
  FaPhoneAlt, FaMapMarkerAlt, FaPeopleArrows
} from "react-icons/fa";
import { Link } from "react-router-dom";
import './aboutUsStyle.css';

const AboutUs = () => {
  const sections = [
    {
      title: "Introduction",
      icon: <FaLaptopCode className="icon colored-icon blue" />,
      text: "SAT Academy is a premier training institute committed to bridging the skill gap in the tech industry. We provide immersive, job-ready training programs across IT, Engineering, and Business domains. \"Learn. Apply. Excel.\" is not just a motto—it's our promise.",
      bgClass: "gradient-card-blue"
    },
    {
      title: "Our Vision",
      icon: <FaGlobe className="icon colored-icon purple" />,
      text: "To become a global leader in professional education by transforming learners into industry-ready professionals who shape the future of technology.",
      bgClass: "gradient-card-purple"
    },
    {
      title: "Our Mission",
      icon: <FaLightbulb className="icon colored-icon green" />,
      text: "To deliver industry-oriented, hands-on training programs that enhance employability, encourage innovation, and align academic knowledge with real-world demands.",
      bgClass: "gradient-card-green"
    },
    {
      title: "Why Choose SAT Academy?",
      icon: <FaCheckCircle className="icon colored-icon orange" />,
      text: (
        <ul className="section-text list">
          <li>✔️ Industry-oriented curriculum</li>
          <li>✔️ Expert trainers from top MNCs</li>
          <li>✔️ Hands-on, project-based learning</li>
          <li>✔️ 100% placement assistance</li>
          <li>✔️ Dedicated mentoring and doubt sessions</li>
          <li>✔️ Resume building and interview preparation</li>
          <li>✔️ Industry-recognized certification and career guidance</li>
        </ul>
      ),
      bgClass: "gradient-card-orange"
    },
    {
      title: "Achievements & Impact",
      icon: <FaCertificate className="icon colored-icon pink" />,
      text: "With 5,000+ students trained and a 90% placement rate, SAT Academy has strong industry ties and glowing testimonials to reflect our excellence.",
      bgClass: "gradient-card-pink"
    },
    {
      title: "Courses Offered",
      icon: <FaLaptopCode className="icon colored-icon yellow" />,
      text: <>Explore Fullstack, Data Engineering, CAD, SAP, AI & more. <br /><Link to="/courses" className="main-btn">View All Courses</Link></>,
      bgClass: "gradient-card-yellow"
    },
    {
      title: "Infrastructure & Learning Model",
      icon: <FaBuilding className="icon colored-icon teal" />,
      text: "Both online/offline classes, LMS access, modern labs & interactive learning environment for maximum retention.",
      bgClass: "gradient-card-teal"
    },
    {
      title: "Trainers & Mentorship",
      icon: <FaChalkboardTeacher className="icon colored-icon sky" />,
      text: "Industry veterans from top MNCs provide 1-on-1 mentorship, domain expertise & real-world application guidance.",
      bgClass: "gradient-card-sky"
    },
    {
      title: "Placement Support",
      icon: <FaUsers className="icon colored-icon lime" />,
      text: "Mock interviews, resume/LinkedIn optimization, and direct access to hiring partners ensure job-readiness.",
      bgClass: "gradient-card-lime"
    },
    {
      title: "Affiliations & Partnerships",
      icon: <FaUniversity className="icon colored-icon red" />,
      text: "Tied up with NSDC, Microsoft, NASSCOM & more to offer recognized certifications and global credibility.",
      bgClass: "gradient-card-red"
    },
    {
      title: "Contact & Location",
      icon: <FaPhoneAlt className="icon colored-icon navy" />,
      text: (
        <>
          <p><FaMapMarkerAlt /> SAT Academy, 5th Floor, Tech Park, Bengaluru</p>
          <p><FaPhoneAlt /> +91 98765 43210 | info@satacademy.in</p>
        </>
      ),
      bgClass: "gradient-card-navy"
    }
  ];

  return (
    <div className="about-us-container">
      {/* Hero */}
      <motion.section className="about_hero-section gradient-bg"
        initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}>
        <motion.h1 initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}>
          About SAT Academy
        </motion.h1>
        <motion.p className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}>
          Empowering the next generation of developers, designers & tech leaders.
        </motion.p>
      </motion.section>

      {/* Info Cards */}
      {sections.map((section, index) => (
        <motion.section key={index}
          className={`card-section ${section.bgClass}`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            {section.icon}
            <h2 className="section-title">{section.title}</h2>
          </div>
          <div className="section-text">{section.text}</div>
        </motion.section>
      ))}

      {/* Meet the Team */}
      <motion.section className="card-section gradient-card-deep"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
        <div className="section-header">
          <FaPeopleArrows className="icon colored-icon deep" />
          <h2 className="section-title">Meet Our Team</h2>
        </div>
        <p className="section-text">
          A passionate team of instructors, mentors, and placement experts dedicated to helping you succeed.
        </p>
        <Link to="/team" className="main-btn">Meet the Team <FaArrowRight className="link-icon" /></Link>
      </motion.section>
    </div>
  );
};

export default AboutUs;
