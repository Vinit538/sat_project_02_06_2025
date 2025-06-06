import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaFileDownload,
    FaUserPlus,
    FaCode,
    FaProjectDiagram,
    FaClock,
    FaTools,
    FaServer,
    FaDatabase
} from "react-icons/fa";
import { courseModules } from "../dataComponents/courseModules";
import FeeCard from "./FeeCard";
import "./coursePageStyle.css";

const course = courseModules.find(course => course.id === "satC8");

const iconMap = {
    "Service": <FaTools className="accordion-icon" />,
    "Incident": <FaServer className="accordion-icon" />,
    "Change": <FaDatabase className="accordion-icon" />,
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

const ITServiceDeskManager = () => {
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
                    <h1>IT Service Desk Manager</h1>
                    <p>Learn ITIL-based service desk management, helpdesk operations, and incident/change management.</p>
                </motion.div>

                <div className="satCoursePage-container">
                    <motion.section className="section" id="overview" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <h2><FaCode className="satCoursePage-icon" /> Course Overview</h2>
                        <p>
                            This course empowers you to manage and optimize IT service desks using ITIL principles. You'll gain practical experience in service operations, incident and change management, ticketing systems, SLAs, and helpdesk support protocols.
                        </p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="who-should-enroll" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaUserPlus className="satCoursePage-icon" /> Who Should Enroll?</h2>
                        <ul className="satCoursePage-highlight-list">
                            <li>IT Support Professionals</li>
                            <li>Helpdesk Technicians</li>
                            <li>Service Desk Managers & Team Leads</li>
                            <li>Anyone aspiring for an ITIL-based role</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="technologies" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaProjectDiagram className="satCoursePage-icon" /> Technologies Covered</h2>
                        <ul className="satCoursePage-tech-list">
                            <li>ServiceNow, Jira</li>
                            <li>ITIL Framework</li>
                            <li>Incident/Change/Problem Management</li>
                            <li>SLAs, CMDB, Ticketing Systems</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="tools" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaCode className="satCoursePage-icon" /> Tools & Platforms</h2>
                        <ul className="satCoursePage-tech-list">
                            <li>ServiceNow, Freshdesk</li>
                            <li>Jira Service Management</li>
                            <li>BMC Remedy, Zoho Desk</li>
                            <li>Excel for Reporting</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="highlights" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
                        <h2><FaProjectDiagram className="satCoursePage-icon" /> Program Highlights</h2>
                        <ul className="satCoursePage-highlight-list">
                            <li>Hands-on with ticketing tools</li>
                            <li>Real-world helpdesk scenarios</li>
                            <li>ITIL-aligned best practices</li>
                            <li>Resume, interview, and job prep support</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="duration" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaClock className="satCoursePage-icon" /> Duration</h2>
                        <p><strong>2.5 Months</strong> – Weekday & Weekend options</p>
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
                        <p>Set up a mock helpdesk environment using ServiceNow or Jira. Simulate end-to-end workflows including ticket creation, escalation, and resolution aligned with ITIL practices.</p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="outcomes" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaCode className="satCoursePage-icon" /> What You'll Achieve</h2>
                        <ul className="satCoursePage-highlight-list">
                            <li>Manage IT service operations efficiently</li>
                            <li>Implement ITIL frameworks in practice</li>
                            <li>Use modern ticketing platforms like ServiceNow</li>
                            <li>Prepare for roles like Service Desk Analyst or Manager</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="certification" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaFileDownload className="satCoursePage-icon" /> Certification</h2>
                        <p>Earn a Certificate of Completion that affirms your skills in IT Service Desk and Helpdesk Management.</p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="trainers" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaUserPlus className="satCoursePage-icon" /> Meet Your Trainers</h2>
                        <p>Industry experts with extensive experience in IT service operations, ITIL frameworks, and ticketing platforms like ServiceNow and Jira.</p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="download-brochure" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <div className="brochure-download">
                            <a
                                href="https://example.com/it-service-desk-brochure.pdf"
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

export default ITServiceDeskManager;
