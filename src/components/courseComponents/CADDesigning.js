import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaFileDownload,
    FaUserPlus,
    FaCode,
    FaProjectDiagram,
    FaClock,
    FaTools,
    FaPencilRuler,
    FaCogs
} from "react-icons/fa";
import { courseModules } from "../dataComponents/courseModules";
import FeeCard from "./FeeCard";
import "./coursePageStyle.css";

const course = courseModules.find(course => course.id === "satC4");

const getIcon = (title) => {
    if (title.toLowerCase().includes("2d")) return <FaPencilRuler className="accordion-icon" />;
    if (title.toLowerCase().includes("3d")) return <FaCogs className="accordion-icon" />;
    return <FaTools className="accordion-icon" />;
};

const AccordionItem = ({ title, topics, isOpen, onClick }) => (
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

const CADDesigning = () => {
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
                    <h1>CAD Designing</h1>
                    <p>Learn 2D and 3D design and drafting using leading CAD software for engineering applications.</p>
                </motion.div>

                <div className="satCoursePage-container">
                    <motion.section className="section" id="overview" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <h2><FaCode className="satCoursePage-icon" /> Course Overview</h2>
                        <p>
                            This course teaches 2D and 3D CAD tools including AutoCAD, SolidWorks, and Revit to help you design, draft, and model engineering components and architectural plans for real-world applications.
                        </p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="who-should-enroll" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaUserPlus className="satCoursePage-icon" /> Who Should Enroll?</h2>
                        <ul className="satCoursePage-highlight-list">
                            <li>Mechanical, Civil, or Architecture Students/Graduates</li>
                            <li>Professionals looking to upskill in CAD software</li>
                            <li>Design and Drafting Enthusiasts</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="technologies" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaProjectDiagram className="satCoursePage-icon" /> Technologies Covered</h2>
                        <ul className="satCoursePage-tech-list">
                            <li>AutoCAD 2D/3D</li>
                            <li>SolidWorks</li>
                            <li>Revit</li>
                            <li>SketchUp</li>
                            <li>Fusion 360</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="tools" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaTools className="satCoursePage-icon" /> Tools & Platforms</h2>
                        <ul className="satCoursePage-tech-list">
                            <li>AutoDesk Suite</li>
                            <li>SolidWorks Simulation</li>
                            <li>SketchUp Pro</li>
                            <li>Revit BIM Tools</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="highlights" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
                        <h2><FaProjectDiagram className="satCoursePage-icon" /> Program Highlights</h2>
                        <ul className="satCoursePage-highlight-list">
                            <li>Hands-on software training</li>
                            <li>Live design projects</li>
                            <li>Portfolio creation support</li>
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
                        <p>Design a mechanical or architectural model with detailed drafting, dimensioning, and 3D visualization.</p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="outcomes" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaCode className="satCoursePage-icon" /> What You'll Achieve</h2>
                        <ul className="satCoursePage-highlight-list">
                            <li>Create professional CAD drawings and models</li>
                            <li>Build a design portfolio</li>
                            <li>Apply drafting skills to real projects</li>
                            <li>Qualify for CAD-based roles</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="certification" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaFileDownload className="satCoursePage-icon" /> Certification</h2>
                        <p>Receive a Certificate of Completion in CAD Designing demonstrating your CAD and design skills.</p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="trainers" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaUserPlus className="satCoursePage-icon" /> Meet Your Trainers</h2>
                        <p>Experienced CAD professionals and design experts with industry backgrounds.</p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="download-brochure" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <div className="brochure-download">
                            <a
                                href="https://example.com/cad-designing-brochure.pdf"
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

export default CADDesigning;
