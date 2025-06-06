import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaFileDownload,
    FaUserPlus,
    FaCode,
    FaProjectDiagram,
    FaClock,
    FaHtml5,
    FaJs,
    FaReact,
    FaServer,
    FaDatabase,
    FaTools
} from "react-icons/fa";
import { courseModules } from "../dataComponents/courseModules";

import "./coursePageStyle.css";
import FeeCard from "./FeeCard";

const iconMap = {
    "UI Development": <FaHtml5 className="accordion-icon" />,
    "JavaScript": <FaJs className="accordion-icon" />,
    "React": <FaReact className="accordion-icon" />,
    "Backend": <FaServer className="accordion-icon" />,
    "Database": <FaDatabase className="accordion-icon" />,
    "DevOps": <FaTools className="accordion-icon" />,
};
const getIcon = (title) => {
    if (title.includes("UI")) return <FaHtml5 className="accordion-icon" />;
    if (title.includes("JavaScript")) return <FaJs className="accordion-icon" />;
    if (title.includes("React")) return <FaReact className="accordion-icon" />;
    if (title.includes("Backend")) return <FaServer className="accordion-icon" />;
    if (title.includes("Database")) return <FaDatabase className="accordion-icon" />;
    if (title.includes("DevOps")) return <FaTools className="accordion-icon" />;
    return <FaCode className="accordion-icon" />;
};
const course = courseModules.find(course => course.id === "satC5");
    // const [openIndex, setOpenIndex] = useState(null);
const AccordionItem = ({ title, topics, isOpen, onClick }) => {
    const baseTitle = title.split(" ")[1]; // Extract "UI", "JavaScript", etc

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

const JavaFullStack = () => {
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
                    <h1>Java Full Stack Development</h1>
                    <p>Master modern frontend and backend skills with Java, React, Spring Boot & DevOps tools.</p>
                </motion.div>

                <div className="satCoursePage-container">

                    <motion.section className="section" id="overview" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <h2><FaCode className="satCoursePage-icon" /> Course Overview</h2>
                        <p>
                            Learn to build powerful, real-world web applications from scratch using the Java Full Stack approach.
                            This comprehensive program equips you with the skills to develop both frontend and backend components using industry-standard tools like Java, Spring Boot, React.js, and modern databases. You'll start with the foundations of UI development and gradually advance into API creation, server-side logic, and seamless integration between client and server.

                            By the end of the course, you’ll not only understand how to design responsive and dynamic web interfaces, but also how to create scalable backend services, handle databases, manage deployments, and work with Git for version control. Each module is packed with hands-on projects and real-world scenarios to help you build a strong portfolio that stands out to employers.

                            Whether you're preparing for your first job in tech or upgrading your current development skills, this program offers the perfect blend of theory, practice, and job-readiness.
                        </p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="who-should-enroll" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaUserPlus className="satCoursePage-icon" /> Who Should Enroll?</h2>
                        <ul className="satCoursePage-highlight-list">
                            <li>Freshers looking to become full stack developers</li>
                            <li>Professionals switching from non-tech to tech careers</li>
                            <li>Backend developers wanting to learn frontend (and vice versa)</li>
                            <li>Students seeking hands-on experience with real-world projects</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="technologies" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaProjectDiagram className="satCoursePage-icon" /> Technologies Covered</h2>
                        <ul className="satCoursePage-tech-list">
                            <li>Core Java, OOPs</li>
                            <li>Spring Boot, Hibernate</li>
                            <li>React.js</li>
                            <li>REST APIs</li>
                            <li>MySQL & MongoDB</li>
                            <li>HTML, CSS, JavaScript</li>
                            <li>Git, GitHub, CI/CD basics</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="tools" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaCode className="satCoursePage-icon" /> Tools & Platforms</h2>
                        <ul className="satCoursePage-tech-list">
                            <li>VS Code, IntelliJ IDEA</li>
                            <li>Postman for API testing</li>
                            <li>Git & GitHub for version control</li>
                            <li>Netlify, Vercel, and Render for deployments</li>
                            <li>Figma (basic UI design understanding)</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="highlights" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
                        <h2><FaProjectDiagram className="satCoursePage-icon" /> Program Highlights</h2>
                        <ul className="satCoursePage-highlight-list">
                            <li>Real-world projects like eCommerce and Admin dashboards</li>
                            <li>Mock interviews and career coaching</li>
                            <li>Deployment on Netlify, Render, Vercel</li>
                            <li>Resume and GitHub profile review</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="duration" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaClock className="satCoursePage-icon" /> Duration</h2>
                        <p><strong>4 Months</strong> – Weekday & Weekend batches available</p>
                    </motion.section>

                    {/* Syllabus with Accordion */}

                    <motion.section
                        className="satCoursePage-section"
                        id="syllabus"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>
                            <FaProjectDiagram className="satCoursePage-icon" /> Syllabus Snapshot
                        </h2>

                        {/* {course..map((module, index) => ( */}
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
                        <p>Build and deploy a complete full stack application using:</p>
                        <ul className="satCoursePage-highlight-list">
                            <li>Frontend: React, Redux</li>
                            <li>Backend: Java, Spring Boot</li>
                            <li>Database: MySQL / MongoDB</li>
                            <li>Version Control: Git, GitHub</li>
                            <li>Deployment: Netlify / Vercel / Render</li>
                        </ul>
                    </motion.section>
                    <motion.section className="satCoursePage-section" id="outcomes" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaCode className="satCoursePage-icon" /> What You'll Achieve</h2>
                        <ul className="satCoursePage-highlight-list">
                            <li>Build full stack web apps using Java & React</li>
                            <li>Create RESTful APIs with Spring Boot</li>
                            <li>Work with MySQL & NoSQL databases</li>
                            <li>Understand DevOps practices and deployment workflows</li>
                            <li>Collaborate using Git and GitHub</li>
                            <li>Strengthen your resume with industry-grade projects</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="certification" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaFileDownload className="satCoursePage-icon" /> Certification</h2>
                        <p>Upon successful completion, you'll receive an industry-recognized Certificate of Completion to boost your resume.</p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="trainers" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaUserPlus className="satCoursePage-icon" /> Meet Your Trainers</h2>
                        <p>Learn from experienced software developers who have trained 500+ students and worked at top companies with hands-on Java and React expertise.</p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="testimonials" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2>What Our Students Say</h2>
                        <div className="testimonials">
                            <blockquote>
                                "This course helped me land my first job as a Java full stack developer!" – <strong>Priya S.</strong>
                            </blockquote>
                            <blockquote>
                                "The real-time projects and interview prep were game-changers." – <strong>Rahul M.</strong>
                            </blockquote>
                        </div>
                    </motion.section>

                    <motion.section
                        className="satCoursePage-section"
                        id="download-brochure"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="brochure-download">
                            <a
                                href="https://example.com/java-fullstack-brochure.pdf"
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

export default JavaFullStack;
