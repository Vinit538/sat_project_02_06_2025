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

const course = courseModules.find(course => course.id === "satC1");

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

const DataEngineering = () => {
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
                    <h1>Data Engineering</h1>
                    <p>Master modern data pipelines and big data technologies for scalable data solutions.</p>
                </motion.div>

                <div className="satCoursePage-container">
                    <motion.section className="section" id="overview" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <h2><FaCode className="satCoursePage-icon" /> Course Overview</h2>
                        <p>
                            This course is designed to help you become a skilled Data Engineer capable of designing and managing large-scale data pipelines. You'll gain hands-on experience with industry-standard tools like Apache Hadoop, Spark, Kafka, SQL, Python, and cloud platforms such as AWS or GCP.
                        </p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="who-should-enroll" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaUserPlus className="satCoursePage-icon" /> Who Should Enroll?</h2>
                        <ul className="satCoursePage-highlight-list">
                            <li>Aspiring Data Engineers and Analysts</li>
                            <li>Software Engineers looking to transition into Data roles</li>
                            <li>Professionals from ETL or BI backgrounds</li>
                            <li>Graduates in CS/IT/Data Science</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="technologies" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaProjectDiagram className="satCoursePage-icon" /> Technologies Covered</h2>
                        <ul className="satCoursePage-tech-list">
                            <li>Python, SQL</li>
                            <li>Apache Hadoop, Spark</li>
                            <li>Apache Kafka</li>
                            <li>Airflow, DBT</li>
                            <li>AWS/GCP Cloud Platforms</li>
                            <li>Docker, GitHub</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="tools" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaCode className="satCoursePage-icon" /> Tools & Platforms</h2>
                        <ul className="satCoursePage-tech-list">
                            <li>Jupyter, PyCharm</li>
                            <li>Apache Airflow</li>
                            <li>Amazon Redshift, BigQuery</li>
                            <li>Docker, GitHub</li>
                            <li>Postman, Tableau (Intro)</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="highlights" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
                        <h2><FaProjectDiagram className="satCoursePage-icon" /> Program Highlights</h2>
                        <ul className="satCoursePage-highlight-list">
                            <li>Real-world projects & ETL pipelines</li>
                            <li>Resume building & portfolio creation</li>
                            <li>Mock interviews and job guidance</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="duration" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaClock className="satCoursePage-icon" /> Duration</h2>
                        <p><strong>4 Months</strong> – Weekday & Weekend options</p>
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
                        <p>Design, build, and deploy a complete data pipeline using:</p>
                        <ul className="satCoursePage-highlight-list">
                            <li>Python, SQL</li>
                            <li>Spark, Kafka, Airflow</li>
                            <li>AWS/GCP services</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="outcomes" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaCode className="satCoursePage-icon" /> What You'll Achieve</h2>
                        <ul className="satCoursePage-highlight-list">
                            <li>Build production-ready data pipelines</li>
                            <li>Process real-time & batch data</li>
                            <li>Work with big data tools & cloud platforms</li>
                            <li>Prepare for Data Engineer interviews</li>
                        </ul>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="certification" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaFileDownload className="satCoursePage-icon" /> Certification</h2>
                        <p>Receive a Certificate of Completion that validates your expertise in Data Engineering.</p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="trainers" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaUserPlus className="satCoursePage-icon" /> Meet Your Trainers</h2>
                        <p>Trainers with 7+ years of industry experience in big data, cloud, and data engineering projects.</p>
                    </motion.section>

                    <motion.section className="satCoursePage-section" id="download-brochure" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <div className="brochure-download">
                            <a
                                href="https://example.com/data-engineering-brochure.pdf"
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

export default DataEngineering;
