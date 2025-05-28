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
import "./coursePageStyle.css";
import FeeCard from "./FeeCard";

const iconMap = {
    "Data": <FaDatabase className="accordion-icon" />,
    "Batch": <FaServer className="accordion-icon" />,
    "Programming": <FaCode className="accordion-icon" />,
};

const getIcon = (title) => {
    if (title.includes("Data")) return <FaDatabase className="accordion-icon" />;
    if (title.includes("Batch")) return <FaServer className="accordion-icon" />;
    if (title.includes("COBOL") || title.includes("JCL")) return <FaCode className="accordion-icon" />;
    return <FaCode className="accordion-icon" />;
};

const course = courseModules.find(course => course.id === "satC10");

const AccordionItem = ({ title, topics, isOpen, onClick }) => {
    return (
        <div className={`accordion-item ${isOpen ? "active" : ""}`}>
            <button onClick={onClick} className="accordion-btn">
                <span>{getIcon(title)}</span>
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

const MainframeTechnologies = () => {
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
                    <h1>Mainframe Technologies</h1>
                    <p>Learn mainframe systems, batch processing, and enterprise transaction programming with COBOL and JCL.</p>
                </motion.div>

                <div className="satCoursePage-container">
                    <motion.section className="section" id="overview" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <h2><FaCode className="satCoursePage-icon" /> Course Overview</h2>
                        <p>This program equips learners with the expertise to work with mainframe systems used by large enterprises. It includes modules on COBOL, JCL, VSAM, and batch processing.</p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="who-should-enroll" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaUserPlus className="satCoursePage-icon" /> Who Should Enroll?</h2>
                        <ul className="satCoursePage-highlight-list">
                            <li>Aspiring mainframe programmers</li>
                            <li>IT professionals seeking specialization in legacy systems</li>
                            <li>Graduates in CS or IT looking for niche domain skills</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="technologies" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaProjectDiagram className="satCoursePage-icon" /> Technologies Covered</h2>
                        <ul className="satCoursePage-tech-list">
                            <li>COBOL</li>
                            <li>JCL</li>
                            <li>VSAM</li>
                            <li>DB2</li>
                            <li>TSO/ISPF</li>
                            <li>Z/OS Environment</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="tools" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaTools className="satCoursePage-icon" /> Tools & Platforms</h2>
                        <ul className="satCoursePage-tech-list">
                            <li>Mainframe Emulator</li>
                            <li>SPUFI</li>
                            <li>File-AID</li>
                            <li>Panvalet</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="highlights" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
                        <h2><FaProjectDiagram className="satCoursePage-icon" /> Program Highlights</h2>
                        <ul className="satCoursePage-highlight-list">
                            <li>Real-time simulations of batch job processing</li>
                            <li>Hands-on labs with COBOL and JCL</li>
                            <li>Resume, portfolio, and interview prep</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="duration" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaClock className="satCoursePage-icon" /> Duration</h2>
                        <p><strong>3 Months</strong> – Weekday & Weekend options</p>
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
                        <p>Design a full enterprise batch job cycle using COBOL, JCL, and DB2, simulating a payroll system on a mainframe emulator.</p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="outcomes" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaCode className="satCoursePage-icon" /> What You'll Achieve</h2>
                        <ul className="satCoursePage-highlight-list">
                            <li>Write efficient COBOL programs</li>
                            <li>Execute and manage JCL scripts</li>
                            <li>Simulate batch jobs in a mainframe emulator</li>
                            <li>Prepare for mainframe developer roles</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="certification" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaFileDownload className="satCoursePage-icon" /> Certification</h2>
                        <p>Receive a Certificate of Completion validating your mainframe programming and systems management skills.</p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="trainers" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaUserPlus className="satCoursePage-icon" /> Meet Your Trainers</h2>
                        <p>Industry experts with over 8+ years of experience in enterprise mainframe systems and applications.</p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="download-brochure" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <div className="brochure-download">
                            <a
                                href="https://example.com/mainframe-technologies-brochure.pdf"
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

                    <FeeCard courseId={course.id} />

                    <a href="/courses" className="floating-back-button">
                        ← Back to Courses
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MainframeTechnologies;
