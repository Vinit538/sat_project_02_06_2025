import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaFileDownload,
    FaUserPlus,
    FaCode,
    FaProjectDiagram,
    FaClock,
    FaDatabase,
    FaChartBar,
    FaTools,
    FaCloud
} from "react-icons/fa";
import { courseModules } from "../dataComponents/courseModules";
import "./coursePageStyle.css";
import FeeCard from "./FeeCard";

const iconMap = {
    "Data": <FaDatabase className="accordion-icon" />,
    "Visualization": <FaChartBar className="accordion-icon" />,
    "Tools": <FaTools className="accordion-icon" />,
    "Cloud": <FaCloud className="accordion-icon" />,
};

const getIcon = (title) => {
    if (title.includes("Data")) return <FaDatabase className="accordion-icon" />;
    if (title.includes("Visualization")) return <FaChartBar className="accordion-icon" />;
    if (title.includes("Tools")) return <FaTools className="accordion-icon" />;
    if (title.includes("Cloud")) return <FaCloud className="accordion-icon" />;
    return <FaCode className="accordion-icon" />;
};

const course = courseModules.find(course => course.id === "satC2");

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

const DataAnalyst = () => {
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
                    <h1>Data Analyst</h1>
                    <p>Learn to analyze data, generate actionable insights, and create impactful dashboards and reports using modern BI tools.</p>
                </motion.div>

                <div className="satCoursePage-container">
                    <motion.section className="section" id="overview" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <h2><FaCode className="satCoursePage-icon" /> Course Overview</h2>
                        <p>
                            This program equips you with practical skills in data analysis, statistical modeling, and business intelligence. You'll master tools such as Excel, SQL, Tableau, Power BI, and Python to derive meaningful insights and support data-driven decision-making.
                        </p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="who-should-enroll" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaUserPlus className="satCoursePage-icon" /> Who Should Enroll?</h2>
                        <ul className="satCoursePage-highlight-list">
                            <li>Freshers interested in Data Analytics</li>
                            <li>Professionals switching to data-centric roles</li>
                            <li>Graduates in IT, Statistics, or Business</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="technologies" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaProjectDiagram className="satCoursePage-icon" /> Technologies Covered</h2>
                        <ul className="satCoursePage-tech-list">
                            <li>Excel, SQL, Python</li>
                            <li>Tableau, Power BI</li>
                            <li>Statistics & EDA</li>
                            <li>Data Cleaning & Visualization</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="tools" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaTools className="satCoursePage-icon" /> Tools & Platforms</h2>
                        <ul className="satCoursePage-tech-list">
                            <li>Excel, Jupyter Notebook</li>
                            <li>Power BI, Tableau</li>
                            <li>SQL Workbench</li>
                            <li>Python IDEs: PyCharm/VS Code</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="highlights" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
                        <h2><FaProjectDiagram className="satCoursePage-icon" /> Program Highlights</h2>
                        <ul className="satCoursePage-highlight-list">
                            <li>Hands-on with BI tools and datasets</li>
                            <li>Build dashboards and analytical reports</li>
                            <li>Interview prep and placement support</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="duration" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaClock className="satCoursePage-icon" /> Duration</h2>
                        <p><strong>3.5 Months</strong> – Weekday & Weekend batches</p>
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
                        <p>Create interactive dashboards and perform data-driven analysis on real datasets using Power BI or Tableau.</p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="outcomes" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaCode className="satCoursePage-icon" /> What You'll Achieve</h2>
                        <ul className="satCoursePage-highlight-list">
                            <li>Analyze and interpret complex data</li>
                            <li>Create dynamic dashboards and reports</li>
                            <li>Gain job-ready analytical and BI skills</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="certification" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaFileDownload className="satCoursePage-icon" /> Certification</h2>
                        <p>Get a Certificate of Completion to validate your Data Analyst expertise.</p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="trainers" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaUserPlus className="satCoursePage-icon" /> Meet Your Trainers</h2>
                        <p>Trainers with strong backgrounds in analytics, business intelligence, and industry projects.</p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="download-brochure" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <div className="brochure-download">
                            <a
                                href="https://example.com/data-analyst-brochure.pdf"
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

export default DataAnalyst;
