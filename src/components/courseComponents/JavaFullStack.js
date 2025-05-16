// import React from 'react';
// import './coursePageStyle.css';

// const JavaFullStack = () => {
//     return (
//         <div className='javaFullStackPage'>
//             <div className="container py-5">
//                 {/* Hero Section */}
//                 <div className="text-center mb-5">
//                     <h1 className="fw-bold">Java Full Stack Development</h1>
//                     <p className="lead">Master Frontend & Backend development with Java, Spring Boot, React, and more.</p>
//                 </div>

//                 {/* Overview */}
//                 <section className="mb-4">
//                     <h3>Course Overview</h3>
//                     <p>
//                         The Java Full Stack Development course is designed to help you become a proficient full-stack developer using Java and modern web technologies.
//                         You’ll work on real-time projects, build REST APIs, design responsive UIs, and deploy applications using DevOps best practices.
//                     </p>
//                 </section>

//                 {/* Technologies */}
//                 <section className="mb-4">
//                     <h4>Technologies Covered</h4>
//                     <ul>
//                         <li>Core Java & OOPs</li>
//                         <li>Spring Boot & Hibernate</li>
//                         <li>React.js</li>
//                         <li>REST APIs</li>
//                         <li>MySQL & MongoDB</li>
//                         <li>HTML, CSS, JavaScript</li>
//                         <li>Git, GitHub, CI/CD basics</li>
//                     </ul>
//                 </section>

//                 {/* Highlights */}
//                 <section className="mb-4">
//                     <h4>Program Highlights</h4>
//                     <ul>
//                         <li>Hands-on real-world projects (e.g., eCommerce app, admin dashboard)</li>
//                         <li>Resume building and interview preparation</li>
//                         <li>Deployment using cloud platforms (Netlify, Render, Vercel)</li>
//                         <li>Mock interviews and career guidance</li>
//                     </ul>
//                 </section>

//                 {/* Duration */}
//                 <section className="mb-4">
//                     <h4>Duration</h4>
//                     <p><strong>4 Months</strong> (Weekend & Weekday batches available)</p>
//                 </section>

//                 {/* Syllabus */}
//                 <section className="mb-4">
//                     <h4>Brief Syllabus</h4>
//                     <ol>
//                         <li>Java Fundamentals, OOP, Collections</li>
//                         <li>Spring Boot, REST API development</li>
//                         <li>MySQL database integration</li>
//                         <li>Frontend with React.js</li>
//                         <li>Project: Full-stack Web App</li>
//                     </ol>
//                 </section>

//                 {/* Buttons */}
//                 <section className="d-flex gap-3 mb-5">
//                     <a
//                         href="/brochures/java-fullstack.pdf"
//                         className="btn btn-outline-primary"
//                         download
//                     >
//                         Download Brochure
//                     </a>
//                     <a
//                         href="/register"
//                         className="btn btn-success"
//                     >
//                         Register Now
//                     </a>
//                 </section>
//             </div>
//         </div>
//     );
// };

// export default JavaFullStack;


import React from "react";
import { motion } from "framer-motion";
import { FaFileDownload, FaUserPlus, FaCode, FaProjectDiagram, FaClock } from "react-icons/fa";
import "./coursePageStyle.css";

const JavaFullStack = () => {
    return (
        <div className="javaFullStackPage">
            <div className="fullstack-wrapper">
                <motion.div
                    className="java_hero-section"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1>Java Full Stack Development</h1>
                    <p>Master modern frontend and backend skills with Java, React, Spring Boot & DevOps tools.</p>
                </motion.div>

                <div className="java_container">
                    {/* Overview */}
                    <motion.section
                        className="section"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2><FaCode className="icon" /> Course Overview</h2>
                        <p>
                            Learn full stack development using Java. Build RESTful APIs, responsive UIs, and
                            deploy real-world apps with best practices. Industry-relevant and project-driven!
                        </p>
                    </motion.section>

                    {/* Technologies */}
                    <motion.section
                        className="java_section"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2><FaProjectDiagram className="java_icon" /> Technologies Covered</h2>
                        <ul className="java-tech-list">
                            <li>Core Java, OOPs</li>
                            <li>Spring Boot, Hibernate</li>
                            <li>React.js</li>
                            <li>REST APIs</li>
                            <li>MySQL & MongoDB</li>
                            <li>HTML, CSS, JavaScript</li>
                            <li>Git, GitHub, CI/CD basics</li>
                        </ul>
                    </motion.section>

                    {/* Highlights */}
                    <motion.section
                        className="java_section"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2><FaProjectDiagram className="java_icon" /> Program Highlights</h2>
                        <ul className="java-highlight-list">
                            <li>Real-world projects like eCommerce and Admin dashboards</li>
                            <li>Mock interviews and career coaching</li>
                            <li>Deployment on Netlify, Render, Vercel</li>
                            <li>Resume and GitHub profile review</li>
                        </ul>
                    </motion.section>

                    {/* Duration */}
                    <motion.section
                        className="java_section"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2><FaClock className="java_icon" /> Duration</h2>
                        <p><strong>4 Months</strong> – Weekday & Weekend batches available</p>
                    </motion.section>

                    {/* Syllabus */}
                    <motion.section
                        className="java_section"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2><FaProjectDiagram className="java_icon" /> Syllabus Snapshot</h2>
                        <ol className="java-syllabus-list">
                            <li>Java Basics, OOPs, Collections</li>
                            <li>Spring Boot, REST API Development</li>
                            <li>MySQL DB Integration</li>
                            <li>Frontend Development using React</li>
                            <li>Capstone Full Stack Project</li>
                        </ol>
                    </motion.section>

                    {/* CTA Buttons */}
                    <motion.section
                        className="java-cta-buttons"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <a href="/brochures/java-fullstack.pdf" download className="java_btn java-download-btn">
                            <FaFileDownload /> Download Brochure
                        </a>
                        <a href="/register" className="java_btn java-register-btn">
                            <FaUserPlus /> Register Now
                        </a>
                    </motion.section>
                </div>
            </div>
        </div>
    );
};

export default JavaFullStack;
