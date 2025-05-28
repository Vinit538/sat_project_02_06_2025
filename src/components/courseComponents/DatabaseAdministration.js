import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFileDownload,
  FaUserPlus,
  FaCode,
  FaProjectDiagram,
  FaClock,
  FaDatabase,
  FaServer,
  FaTools,
  FaCloud
} from "react-icons/fa";
import { courseModules } from "../dataComponents/courseModules";
import FeeCard from "./FeeCard";
import "./coursePageStyle.css";

const iconMap = {
  "Data Storage": <FaDatabase className="accordion-icon" />,
  "Big Data": <FaCloud className="accordion-icon" />,
  "ETL": <FaServer className="accordion-icon" />,
  "DevOps": <FaTools className="accordion-icon" />,
};

const getIcon = (title) => {
  if (title.includes("Data")) return <FaDatabase className="accordion-icon" />;
  if (title.includes("Big Data")) return <FaCloud className="accordion-icon" />;
  if (title.includes("ETL")) return <FaServer className="accordion-icon" />;
  if (title.includes("DevOps")) return <FaTools className="accordion-icon" />;
  return <FaCode className="accordion-icon" />;
};

const course = courseModules.find(course => course.id === "satC3"); // Assuming "satC4" is Database Administration

const AccordionItem = ({ title, topics, isOpen, onClick }) => {
  const baseTitle = title.split(" ")[0];

  return (
    <div className={`accordion-item ${isOpen ? "active" : ""}`}>
      <button onClick={onClick} className="accordion-btn">
        <span>{iconMap[baseTitle] || <FaCode className="accordion-icon" />}</span>
        {title}
        <span className="accordion-toggle">{isOpen ? "−" : "+"}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="accordion-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ul className="satCoursePage-highlight-list">
              {topics.map((topic, idx) => (
                <li key={idx}>{topic}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DatabaseAdministration = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="satCoursePage colored-theme">
      <div className="satCoursePage-wrapper">
        <motion.div
          className="satCoursePage-hero-section"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1>Database Administration</h1>
          <p>Master administration and maintenance of databases across cloud and on-premise platforms.</p>
        </motion.div>

        <div className="satCoursePage-container">
          <motion.section className="section" id="overview" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2><FaCode className="satCoursePage-icon" /> Course Overview</h2>
            <p>
              This program covers everything from database design and deployment to performance tuning, backups, recovery, and security on both on-premise and cloud platforms.
            </p>
          </motion.section>

          <motion.section className="satCoursePage-section" id="who-should-enroll" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2><FaUserPlus className="satCoursePage-icon" /> Who Should Enroll?</h2>
            <ul className="satCoursePage-highlight-list">
              <li>IT professionals transitioning to database roles</li>
              <li>System administrators aiming to specialize in DB</li>
              <li>Graduates interested in infrastructure careers</li>
              <li>Engineers looking to work with enterprise DBs</li>
            </ul>
          </motion.section>

          <motion.section className="satCoursePage-section" id="technologies" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2><FaProjectDiagram className="satCoursePage-icon" /> Technologies Covered</h2>
            <ul className="satCoursePage-tech-list">
              <li>MySQL</li>
              <li>Oracle Database</li>
              <li>Microsoft SQL Server</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>Azure, AWS RDS</li>
            </ul>
          </motion.section>

          <motion.section className="satCoursePage-section" id="tools" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2><FaTools className="satCoursePage-icon" /> Tools & Platforms</h2>
            <ul className="satCoursePage-tech-list">
              <li>SQL Developer</li>
              <li>Toad</li>
              <li>Mongo Compass</li>
              <li>phpMyAdmin</li>
              <li>SQL Server Management Studio</li>
            </ul>
          </motion.section>

          <motion.section className="satCoursePage-section" id="syllabus" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2><FaProjectDiagram className="satCoursePage-icon" /> Syllabus Snapshot</h2>
            {course.modules.map((module, index) => (
              <AccordionItem
                key={index}
                title={module.title}
                topics={module.topics}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.section>

          <motion.section className="satCoursePage-section" id="duration" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2><FaClock className="satCoursePage-icon" /> Duration</h2>
            <p><strong>3 Months</strong> – Weekday & Weekend options</p>
          </motion.section>

          <motion.section className="satCoursePage-section" id="outcomes" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2><FaCode className="satCoursePage-icon" /> What You'll Achieve</h2>
            <ul className="satCoursePage-highlight-list">
              <li>Expertise in database configuration and management</li>
              <li>Proficiency in cloud-based DB solutions</li>
              <li>Skills to handle DB security, backup, recovery</li>
              <li>Job readiness for DBA roles in top firms</li>
            </ul>
          </motion.section>

          <motion.section className="satCoursePage-section" id="capstone" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2><FaProjectDiagram className="satCoursePage-icon" /> Capstone Project</h2>
            <p>Set up and manage a full-scale multi-user database environment across local and cloud infrastructure with monitoring, backups, and user management.</p>
          </motion.section>

          <motion.section className="satCoursePage-section" id="download-brochure" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="brochure-download">
              <a
                href="https://example.com/database-admin-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn"
              >
                <FaFileDownload className="satCoursePage-icon" /> Download Brochure
              </a>
              <a href="/register" className="satCoursePage-btn satCoursePage-register-btn">
                <FaUserPlus /> Register Now
              </a>
            </div>
          </motion.section>

          <FeeCard courseId="satC3" />
        </div>
      </div>
    </div>
  );
};

export default DatabaseAdministration;
