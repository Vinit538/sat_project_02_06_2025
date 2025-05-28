import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFileDownload,
  FaUserPlus,
  FaCode,
  FaProjectDiagram,
  FaClock,
  FaBrain,
  FaRobot,
  FaChartLine
} from "react-icons/fa";
import { courseModules } from "../dataComponents/courseModules";
import FeeCard from "./FeeCard";
import "./coursePageStyle.css";

const iconMap = {
  "Machine": <FaRobot className="accordion-icon" />,
  "Deep": <FaBrain className="accordion-icon" />,
  "Analytics": <FaChartLine className="accordion-icon" />,
};

const course = courseModules.find(course => course.id === "satC6");

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

const ArtificialIntelligence = () => {
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
          <h1>Artificial Intelligence</h1>
          <p>Dive into AI concepts, machine learning algorithms, and deep learning frameworks to build intelligent systems.</p>
        </motion.div>

        <div className="satCoursePage-container">
          <motion.section className="section" id="overview" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2><FaCode className="satCoursePage-icon" /> Course Overview</h2>
            <p>
              This course equips you with core AI skills including supervised and unsupervised learning, neural networks, and deep learning using TensorFlow and PyTorch. You'll also build AI-driven applications for real-world use cases.
            </p>
          </motion.section>

          <motion.section className="satCoursePage-section" id="who-should-enroll" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2><FaUserPlus className="satCoursePage-icon" /> Who Should Enroll?</h2>
            <ul className="satCoursePage-highlight-list">
              <li>Aspiring AI Engineers & Data Scientists</li>
              <li>Python Developers interested in ML/AI</li>
              <li>Tech professionals transitioning to AI roles</li>
              <li>Graduates in CS/IT/Math/Data Science</li>
            </ul>
          </motion.section>

          <motion.section className="satCoursePage-section" id="technologies" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2><FaProjectDiagram className="satCoursePage-icon" /> Technologies Covered</h2>
            <ul className="satCoursePage-tech-list">
              <li>Python, NumPy, Pandas</li>
              <li>Scikit-learn, TensorFlow, PyTorch</li>
              <li>Computer Vision, NLP</li>
              <li>Keras, OpenCV</li>
              <li>Jupyter, Google Colab</li>
            </ul>
          </motion.section>

          <motion.section className="satCoursePage-section" id="highlights" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
            <h2><FaProjectDiagram className="satCoursePage-icon" /> Program Highlights</h2>
            <ul className="satCoursePage-highlight-list">
              <li>Real-time AI model development</li>
              <li>Hands-on with TensorFlow & PyTorch</li>
              <li>Capstone projects in vision & NLP</li>
            </ul>
          </motion.section>

          <motion.section className="satCoursePage-section" id="duration" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2><FaClock className="satCoursePage-icon" /> Duration</h2>
            <p><strong>4.5 Months</strong> – Weekday & Weekend options</p>
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
            <p>Develop an AI model that solves a real-world problem using a full lifecycle approach: data preprocessing, modeling, training, and deployment.</p>
          </motion.section>

          <motion.section className="satCoursePage-section" id="outcomes" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2><FaCode className="satCoursePage-icon" /> What You'll Achieve</h2>
            <ul className="satCoursePage-highlight-list">
              <li>Build and train deep learning models</li>
              <li>Master AI tools & libraries</li>
              <li>Deploy models in real-world applications</li>
              <li>Land AI/Machine Learning roles</li>
            </ul>
          </motion.section>

          <motion.section className="satCoursePage-section" id="certification" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2><FaFileDownload className="satCoursePage-icon" /> Certification</h2>
            <p>Earn a Certificate of Completion that validates your AI expertise and hands-on capabilities.</p>
          </motion.section>

          <motion.section className="satCoursePage-section" id="trainers" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2><FaUserPlus className="satCoursePage-icon" /> Meet Your Trainers</h2>
            <p>Instructors with 8+ years of experience in AI, deep learning, and applied research projects in the industry.</p>
          </motion.section>

          <motion.section className="satCoursePage-section" id="download-brochure" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="brochure-download">
              <a
                href="https://example.com/artificial-intelligence-brochure.pdf"
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

export default ArtificialIntelligence;
