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

const course = courseModules.find(course => course.id === "satC7");

const iconMap = {
  "Data": <FaDatabase className="accordion-icon" />,
  "Cloud": <FaCloud className="accordion-icon" />,
  "ETL": <FaServer className="accordion-icon" />,
  "DevOps": <FaTools className="accordion-icon" />,
};

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

const SAP = () => {
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
          <h1>SAP</h1>
          <p>Learn SAP ERP with experience, core modules, real-time workflows, system configuration, and functional integration.</p>
        </motion.div>

        <div className="satCoursePage-container">
          <motion.section className="section" id="overview" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2><FaCode className="satCoursePage-icon" /> Course Overview</h2>
            <p>
              This SAP course equips you with practical knowledge in enterprise resource planning using SAP. Gain exposure to core modules like MM, SD, FICO, and HCM along with hands-on system configuration and integration workflows.
            </p>
          </motion.section>

          <motion.section className="satCoursePage-section" id="who-should-enroll" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2><FaUserPlus className="satCoursePage-icon" /> Who Should Enroll?</h2>
            <ul className="satCoursePage-highlight-list">
              <li>Aspiring SAP Consultants</li>
              <li>Graduates in Commerce, Engineering, or Management</li>
              <li>Professionals aiming for ERP roles</li>
              <li>IT/HR/Finance domain experts entering ERP</li>
            </ul>
          </motion.section>

          <motion.section className="satCoursePage-section" id="technologies" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2><FaProjectDiagram className="satCoursePage-icon" /> Core Modules</h2>
            <ul className="satCoursePage-tech-list">
              <li>SAP MM (Materials Management)</li>
              <li>SAP SD (Sales and Distribution)</li>
              <li>SAP FICO (Finance & Controlling)</li>
              <li>SAP HCM (Human Capital Management)</li>
              <li>SAP Basis & ABAP (Intro)</li>
            </ul>
          </motion.section>

          <motion.section className="satCoursePage-section" id="highlights" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2><FaProjectDiagram className="satCoursePage-icon" /> Program Highlights</h2>
            <ul className="satCoursePage-highlight-list">
              <li>Live SAP access and practical sessions</li>
              <li>Workflow-based functional training</li>
              <li>Resume, interview, and job readiness</li>
            </ul>
          </motion.section>

          <motion.section className="satCoursePage-section" id="duration" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2><FaClock className="satCoursePage-icon" /> Duration</h2>
            <p><strong>3.5 Months</strong> – Flexible schedule available</p>
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

          <motion.section className="satCoursePage-section" id="capstone" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2><FaProjectDiagram className="satCoursePage-icon" /> Capstone Project</h2>
            <p>Simulate a real-time ERP implementation scenario using multiple SAP modules and business process workflows.</p>
          </motion.section>

          <motion.section className="satCoursePage-section" id="outcomes" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2><FaCode className="satCoursePage-icon" /> What You'll Achieve</h2>
            <ul className="satCoursePage-highlight-list">
              <li>Hands-on SAP configuration knowledge</li>
              <li>Cross-functional process understanding</li>
              <li>ERP project exposure</li>
              <li>Job-ready SAP skillset</li>
            </ul>
          </motion.section>

          <motion.section className="satCoursePage-section" id="certification" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2><FaFileDownload className="satCoursePage-icon" /> Certification</h2>
            <p>Earn a Certificate of Completion for mastering SAP ERP modules and configuration workflows.</p>
          </motion.section>

          <motion.section className="satCoursePage-section" id="trainers" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2><FaUserPlus className="satCoursePage-icon" /> Meet Your Trainers</h2>
            <p>Experienced SAP consultants with real-world ERP project expertise in implementation, support, and integration.</p>
          </motion.section>

          <motion.section className="satCoursePage-section" id="download-brochure" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="brochure-download">
              <a
                href="https://example.com/sap-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="satCoursePage-register-btn"
              >
                <FaFileDownload /> Download Brochure
              </a>
              <a href="/register" className="satCoursePage-register-btn">
                <FaUserPlus /> Register Now
              </a>
            </div>
          </motion.section>

          <FeeCard courseId={course.id} />

          <a href="/courses" className="floating-back-button">
            ← Back to Courses
          </a>
        </div>
      </div>
    </div>
  );
};

export default SAP;
