import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaFileDownload,
    FaUserPlus,
    FaCode,
    FaProjectDiagram,
    FaClock,
    FaBullhorn,
    FaChartLine,
    FaTools
} from "react-icons/fa";
import { courseModules } from "../dataComponents/courseModules";
import FeeCard from "./FeeCard";
import "./coursePageStyle.css";

const course = courseModules.find(course => course.id === "satC9");

const AccordionItem = ({ title, topics, isOpen, onClick }) => (
    <div className={`accordion-item ${isOpen ? "active" : ""}`}>
        <button onClick={onClick} className="accordion-btn">
            <span><FaBullhorn className="accordion-icon" /></span>
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

const DigitalMarketing = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="satCoursePage colored-theme">
            <div className="satCoursePage-wrapper">
                <motion.div className="satCoursePage-hero-section" initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <h1>Digital Marketing</h1>
                    <p>Learn to create, manage, and optimize digital marketing campaigns across multiple platforms.</p>
                </motion.div>

                <div className="satCoursePage-container">
                    <motion.section className="section" id="overview" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <h2><FaCode className="satCoursePage-icon" /> Course Overview</h2>
                        <p>Gain expertise in digital marketing strategies, SEO, PPC, content marketing, social media campaigns, and analytics using tools like Google Ads, Meta Business Suite, and more.</p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="who-should-enroll" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaUserPlus className="satCoursePage-icon" /> Who Should Enroll?</h2>
                        <ul className="satCoursePage-highlight-list">
                            <li>Marketing graduates and professionals</li>
                            <li>Freelancers and entrepreneurs</li>
                            <li>Anyone looking to build a career in digital marketing</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="technologies" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaProjectDiagram className="satCoursePage-icon" /> Tools & Platforms</h2>
                        <ul className="satCoursePage-tech-list">
                            <li>Google Ads, Analytics</li>
                            <li>Meta Business Suite</li>
                            <li>SEMRush, Ahrefs</li>
                            <li>Canva, Mailchimp</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="highlights" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
                        <h2><FaChartLine className="satCoursePage-icon" /> Program Highlights</h2>
                        <ul className="satCoursePage-highlight-list">
                            <li>Live campaign management</li>
                            <li>SEO & SEM strategy sessions</li>
                            <li>Mock interviews and job readiness training</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="duration" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaClock className="satCoursePage-icon" /> Duration</h2>
                        <p><strong>3 Months</strong> – Weekday & Weekend options</p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="syllabus" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaBullhorn className="satCoursePage-icon" /> Syllabus Snapshot</h2>
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
                        <p>Design and execute a cross-platform digital campaign using SEO, PPC, and email marketing with performance analytics.</p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="outcomes" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaTools className="satCoursePage-icon" /> What You'll Achieve</h2>
                        <ul className="satCoursePage-highlight-list">
                            <li>Design and run live marketing campaigns</li>
                            <li>Analyze campaign performance</li>
                            <li>Build a strong digital portfolio</li>
                            <li>Prepare for marketing roles in top firms</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="certification" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaFileDownload className="satCoursePage-icon" /> Certification</h2>
                        <p>Earn a Certificate of Completion recognized across the digital marketing industry.</p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="trainers" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaUserPlus className="satCoursePage-icon" /> Meet Your Trainers</h2>
                        <p>Experts with 5+ years of hands-on experience in managing digital campaigns and training professionals.</p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="download-brochure" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <div className="brochure-download">
                            <a
                                href="https://example.com/digital-marketing-brochure.pdf"
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

                    <a href="/courses" className="floating-back-button">← Back to Courses</a>
                </div>
            </div>
        </div>
    );
};

export default DigitalMarketing;
