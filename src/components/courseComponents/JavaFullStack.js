// // // import React from "react";
// // // import { motion } from "framer-motion";
// // // import { FaFileDownload, FaUserPlus, FaCode, FaProjectDiagram, FaClock } from "react-icons/fa";
// // // import "./coursePageStyle.css";

// // // const JavaFullStack = () => {
// // //     return (
// // //         <div className="javaFullStackPage">
// // //             <div className="fullstack-wrapper">
// // //                 <motion.div
// // //                     className="java_hero-section"
// // //                     initial={{ opacity: 0, y: -40 }}
// // //                     animate={{ opacity: 1, y: 0 }}
// // //                     transition={{ duration: 0.7 }}
// // //                 >
// // //                     <h1>Java Full Stack Development</h1>
// // //                     <p>Master modern frontend and backend skills with Java, React, Spring Boot & DevOps tools.</p>
// // //                 </motion.div>

// // //                 <div className="java_container">
// // //                     {/* Overview */}
// // //                     <motion.section
// // //                         className="section"
// // //                         initial={{ opacity: 0 }}
// // //                         whileInView={{ opacity: 1 }}
// // //                         transition={{ duration: 0.5 }}
// // //                     >
// // //                         <h2><FaCode className="icon" /> Course Overview</h2>
// // //                         <p>
// // //                             Learn full stack development using Java. Build RESTful APIs, responsive UIs, and
// // //                             deploy real-world apps with best practices. Industry-relevant and project-driven!
// // //                         </p>
// // //                     </motion.section>

// // //                     {/* Technologies */}
// // //                     <motion.section
// // //                         className="java_section"
// // //                         initial={{ opacity: 0 }}
// // //                         whileInView={{ opacity: 1 }}
// // //                         transition={{ duration: 0.6 }}
// // //                     >
// // //                         <h2><FaProjectDiagram className="java_icon" /> Technologies Covered</h2>
// // //                         <ul className="java-tech-list">
// // //                             <li>Core Java, OOPs</li>
// // //                             <li>Spring Boot, Hibernate</li>
// // //                             <li>React.js</li>
// // //                             <li>REST APIs</li>
// // //                             <li>MySQL & MongoDB</li>
// // //                             <li>HTML, CSS, JavaScript</li>
// // //                             <li>Git, GitHub, CI/CD basics</li>
// // //                         </ul>
// // //                     </motion.section>

// // //                     {/* Highlights */}
// // //                     <motion.section
// // //                         className="java_section"
// // //                         initial={{ opacity: 0 }}
// // //                         whileInView={{ opacity: 1 }}
// // //                         transition={{ duration: 0.7 }}
// // //                     >
// // //                         <h2><FaProjectDiagram className="java_icon" /> Program Highlights</h2>
// // //                         <ul className="java-highlight-list">
// // //                             <li>Real-world projects like eCommerce and Admin dashboards</li>
// // //                             <li>Mock interviews and career coaching</li>
// // //                             <li>Deployment on Netlify, Render, Vercel</li>
// // //                             <li>Resume and GitHub profile review</li>
// // //                         </ul>
// // //                     </motion.section>

// // //                     {/* Duration */}
// // //                     <motion.section
// // //                         className="java_section"
// // //                         initial={{ opacity: 0 }}
// // //                         whileInView={{ opacity: 1 }}
// // //                         transition={{ duration: 0.6 }}
// // //                     >
// // //                         <h2><FaClock className="java_icon" /> Duration</h2>
// // //                         <p><strong>4 Months</strong> – Weekday & Weekend batches available</p>
// // //                     </motion.section>

// // //                     {/* Syllabus */}
// // //                     <motion.section
// // //                         className="java_section"
// // //                         initial={{ opacity: 0 }}
// // //                         whileInView={{ opacity: 1 }}
// // //                         transition={{ duration: 0.6 }}
// // //                     >
// // //                         <h2><FaProjectDiagram className="java_icon" /> Syllabus Snapshot</h2>
// // //                         <ol className="java-syllabus-list">
// // //                             <li>Java Basics, OOPs, Collections</li>
// // //                             <li>Spring Boot, REST API Development</li>
// // //                             <li>MySQL DB Integration</li>
// // //                             <li>Frontend Development using React</li>
// // //                             <li>Capstone Full Stack Project</li>
// // //                         </ol>
// // //                     </motion.section>

// // //                     {/* CTA Buttons */}
// // //                     <motion.section
// // //                         className="java-cta-buttons"
// // //                         initial={{ opacity: 0 }}
// // //                         whileInView={{ opacity: 1 }}
// // //                         transition={{ duration: 0.5 }}
// // //                     >
// // //                         <a href="/brochures/java-fullstack.pdf" download className="java_btn java-download-btn">
// // //                             <FaFileDownload /> Download Brochure
// // //                         </a>
// // //                         <a href="/register" className="java_btn java-register-btn">
// // //                             <FaUserPlus /> Register Now
// // //                         </a>
// // //                     </motion.section>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default JavaFullStack;

// // // import React from "react";
// // // import { motion } from "framer-motion";
// // // import {
// // //     FaFileDownload,
// // //     FaUserPlus,
// // //     FaCode,
// // //     FaProjectDiagram,
// // //     FaClock
// // // } from "react-icons/fa";
// // // import "./coursePageStyle.css";

// // // const JavaFullStack = () => {
// // //     return (
// // //         <div className="javaFullStackPage">
// // //             <div className="fullstack-wrapper">
// // //                 <motion.div
// // //                     className="java_hero-section"
// // //                     initial={{ opacity: 0, y: -40 }}
// // //                     animate={{ opacity: 1, y: 0 }}
// // //                     transition={{ duration: 0.7 }}
// // //                 >
// // //                     <h1>Java Full Stack Development</h1>
// // //                     <p>Master modern frontend and backend skills with Java, React, Spring Boot & DevOps tools.</p>
// // //                 </motion.div>

// // //                 <div className="java_container">

// // //                     {/* Overview */}
// // //                     <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
// // //                         <h2><FaCode className="icon" /> Course Overview</h2>
// // //                         <p>
// // //                             Learn full stack development using Java. Build RESTful APIs, responsive UIs, and
// // //                             deploy real-world apps with best practices. Industry-relevant and project-driven!
// // //                         </p>
// // //                     </motion.section>

// // //                     {/* Who Should Enroll */}
// // //                     <motion.section className="java_section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
// // //                         <h2><FaUserPlus className="java_icon" /> Who Should Enroll?</h2>
// // //                         <ul className="java-highlight-list">
// // //                             <li>Freshers looking to become full stack developers</li>
// // //                             <li>Professionals switching from non-tech to tech careers</li>
// // //                             <li>Backend developers wanting to learn frontend (and vice versa)</li>
// // //                             <li>Students seeking hands-on experience with real-world projects</li>
// // //                         </ul>
// // //                     </motion.section>

// // //                     {/* Technologies */}
// // //                     <motion.section className="java_section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
// // //                         <h2><FaProjectDiagram className="java_icon" /> Technologies Covered</h2>
// // //                         <ul className="java-tech-list">
// // //                             <li>Core Java, OOPs</li>
// // //                             <li>Spring Boot, Hibernate</li>
// // //                             <li>React.js</li>
// // //                             <li>REST APIs</li>
// // //                             <li>MySQL & MongoDB</li>
// // //                             <li>HTML, CSS, JavaScript</li>
// // //                             <li>Git, GitHub, CI/CD basics</li>
// // //                         </ul>
// // //                     </motion.section>

// // //                     {/* Tools & Platforms */}
// // //                     <motion.section className="java_section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
// // //                         <h2><FaCode className="java_icon" /> Tools & Platforms</h2>
// // //                         <ul className="java-tech-list">
// // //                             <li>VS Code, IntelliJ IDEA</li>
// // //                             <li>Postman for API testing</li>
// // //                             <li>Git & GitHub for version control</li>
// // //                             <li>Netlify, Vercel, and Render for deployments</li>
// // //                             <li>Figma (basic UI design understanding)</li>
// // //                         </ul>
// // //                     </motion.section>

// // //                     {/* Highlights */}
// // //                     <motion.section className="java_section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
// // //                         <h2><FaProjectDiagram className="java_icon" /> Program Highlights</h2>
// // //                         <ul className="java-highlight-list">
// // //                             <li>Real-world projects like eCommerce and Admin dashboards</li>
// // //                             <li>Mock interviews and career coaching</li>
// // //                             <li>Deployment on Netlify, Render, Vercel</li>
// // //                             <li>Resume and GitHub profile review</li>
// // //                         </ul>
// // //                     </motion.section>

// // //                     {/* Duration */}
// // //                     <motion.section className="java_section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
// // //                         <h2><FaClock className="java_icon" /> Duration</h2>
// // //                         <p><strong>4 Months</strong> – Weekday & Weekend batches available</p>
// // //                     </motion.section>

// // //                     {/* Syllabus */}
// // //                     <motion.section className="java_section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
// // //                         <h2><FaProjectDiagram className="java_icon" /> Syllabus Snapshot</h2>
// // //                         <ol className="java-syllabus-list">
// // //                             <li>Java Basics, OOPs, Collections</li>
// // //                             <li>Spring Boot, REST API Development</li>
// // //                             <li>MySQL DB Integration</li>
// // //                             <li>Frontend Development using React</li>
// // //                             <li>Capstone Full Stack Project</li>
// // //                         </ol>
// // //                     </motion.section>

// // //                     {/* Capstone Project */}
// // //                     <motion.section className="java_section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
// // //                         <h2><FaProjectDiagram className="java_icon" /> Capstone Project</h2>
// // //                         <p>Build and deploy a complete full stack application using:</p>
// // //                         <ul className="java-highlight-list">
// // //                             <li>Frontend: React, Redux</li>
// // //                             <li>Backend: Java, Spring Boot</li>
// // //                             <li>Database: MySQL / MongoDB</li>
// // //                             <li>Version Control: Git, GitHub</li>
// // //                             <li>Deployment: Netlify / Vercel / Render</li>
// // //                         </ul>
// // //                     </motion.section>

// // //                     {/* Learning Outcomes */}
// // //                     <motion.section className="java_section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
// // //                         <h2><FaCode className="java_icon" /> What You'll Achieve</h2>
// // //                         <ul className="java-highlight-list">
// // //                             <li>Build full stack web apps using Java & React</li>
// // //                             <li>Create RESTful APIs with Spring Boot</li>
// // //                             <li>Work with MySQL & NoSQL databases</li>
// // //                             <li>Understand DevOps basics & deploy live apps</li>
// // //                             <li>Crack interviews with confidence</li>
// // //                         </ul>
// // //                     </motion.section>

// // //                     {/* Certification */}
// // //                     <motion.section className="java_section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
// // //                         <h2><FaFileDownload className="java_icon" /> Certification</h2>
// // //                         <p>Upon successful completion, you'll receive an industry-recognized Certificate of Completion to boost your resume.</p>
// // //                     </motion.section>

// // //                     {/* Trainers */}
// // //                     <motion.section className="java_section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
// // //                         <h2><FaUserPlus className="java_icon" /> Meet Your Trainers</h2>
// // //                         <p>Learn from experienced software developers who have trained 500+ students and worked at top companies with hands-on Java and React expertise.</p>
// // //                     </motion.section>

// // //                     {/* Testimonials */}
// // //                     <motion.section className="java_section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
// // //                         <h2>What Our Students Say</h2>
// // //                         <div className="testimonials">
// // //                             <blockquote>
// // //                                 "This course helped me land my first job as a Java full stack developer!" – <strong>Priya S.</strong>
// // //                             </blockquote>
// // //                             <blockquote>
// // //                                 "The real-time projects and interview prep were game-changers." – <strong>Rahul M.</strong>
// // //                             </blockquote>
// // //                         </div>
// // //                     </motion.section>

// // //                     {/* CTA Buttons */}
// // //                     <motion.section className="java-cta-buttons" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
// // //                         <a href="/brochures/java-fullstack.pdf" download className="java_btn java-download-btn">
// // //                             <FaFileDownload /> Download Brochure
// // //                         </a>
// // //                         <a href="/register" className="java_btn java-register-btn">
// // //                             <FaUserPlus /> Register Now
// // //                         </a>
// // //                     </motion.section>

// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default JavaFullStack;

// // import React, { useState } from "react";
// // import { motion } from "framer-motion";
// // import {
// //     FaFileDownload,
// //     FaUserPlus,
// //     FaCode,
// //     FaProjectDiagram,
// //     FaClock
// // } from "react-icons/fa";
// // import "./coursePageStyle.css";

// // const AccordionItem = ({ title, children }) => {
// //     const [isOpen, setIsOpen] = useState(false);
// //     return (
// //         <div className="accordion-item">
// //             <button onClick={() => setIsOpen(!isOpen)} className="accordion-btn">
// //                 {title}
// //                 <span>{isOpen ? "−" : "+"}</span>
// //             </button>
// //             {isOpen && <div className="accordion-content">{children}</div>}
// //         </div>
// //     );
// // };

// // const JavaFullStack = () => {
// //     return (
// //         <div className="javaFullStackPage">
// //             <div className="fullstack-wrapper">
// //                 <motion.div
// //                     className="java_hero-section"
// //                     initial={{ opacity: 0, y: -40 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.7 }}
// //                 >
// //                     <h1>Java Full Stack Development</h1>
// //                     <p>Master modern frontend and backend skills with Java, React, Spring Boot & DevOps tools.</p>
// //                 </motion.div>

// //                 <div className="java_container">

// //                     <motion.section className="section" id="overview" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
// //                         <h2><FaCode className="java_icon" /> Course Overview</h2>
// //                         <p>
// //                             Learn full stack development using Java. Build RESTful APIs, responsive UIs, and
// //                             deploy real-world apps with best practices. Industry-relevant and project-driven!
// //                         </p>
// //                     </motion.section>

// //                     <motion.section className="java_section" id="who-should-enroll" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
// //                         <h2><FaUserPlus className="java_icon" /> Who Should Enroll?</h2>
// //                         <ul className="java-highlight-list">
// //                             <li>Freshers looking to become full stack developers</li>
// //                             <li>Professionals switching from non-tech to tech careers</li>
// //                             <li>Backend developers wanting to learn frontend (and vice versa)</li>
// //                             <li>Students seeking hands-on experience with real-world projects</li>
// //                         </ul>
// //                     </motion.section>

// //                     <motion.section className="java_section" id="technologies" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
// //                         <h2><FaProjectDiagram className="java_icon" /> Technologies Covered</h2>
// //                         <ul className="java-tech-list">
// //                             <li>Core Java, OOPs</li>
// //                             <li>Spring Boot, Hibernate</li>
// //                             <li>React.js</li>
// //                             <li>REST APIs</li>
// //                             <li>MySQL & MongoDB</li>
// //                             <li>HTML, CSS, JavaScript</li>
// //                             <li>Git, GitHub, CI/CD basics</li>
// //                         </ul>
// //                     </motion.section>

// //                     <motion.section className="java_section" id="tools" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
// //                         <h2><FaCode className="java_icon" /> Tools & Platforms</h2>
// //                         <ul className="java-tech-list">
// //                             <li>VS Code, IntelliJ IDEA</li>
// //                             <li>Postman for API testing</li>
// //                             <li>Git & GitHub for version control</li>
// //                             <li>Netlify, Vercel, and Render for deployments</li>
// //                             <li>Figma (basic UI design understanding)</li>
// //                         </ul>
// //                     </motion.section>

// //                     <motion.section className="java_section" id="highlights" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
// //                         <h2><FaProjectDiagram className="java_icon" /> Program Highlights</h2>
// //                         <ul className="java-highlight-list">
// //                             <li>Real-world projects like eCommerce and Admin dashboards</li>
// //                             <li>Mock interviews and career coaching</li>
// //                             <li>Deployment on Netlify, Render, Vercel</li>
// //                             <li>Resume and GitHub profile review</li>
// //                         </ul>
// //                     </motion.section>

// //                     <motion.section className="java_section" id="duration" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
// //                         <h2><FaClock className="java_icon" /> Duration</h2>
// //                         <p><strong>4 Months</strong> – Weekday & Weekend batches available</p>
// //                     </motion.section>

// //                     {/* Syllabus with Accordion */}
// //                     <motion.section className="java_section" id="syllabus" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
// //                         <h2><FaProjectDiagram className="java_icon" /> Syllabus Snapshot</h2>
// //                         <AccordionItem title="1. Java Basics, OOPs, Collections">
// //                             Learn Java fundamentals, object-oriented programming, and collections framework.
// //                         </AccordionItem>
// //                         <AccordionItem title="2. Spring Boot & REST API Development">
// //                             Develop RESTful APIs, integrate databases, and apply best practices using Spring Boot.
// //                         </AccordionItem>
// //                         <AccordionItem title="3. MySQL DB Integration">
// //                             Learn to structure, query, and connect Java applications with MySQL.
// //                         </AccordionItem>
// //                         <AccordionItem title="4. Frontend Development using React">
// //                             Build dynamic UIs, use React hooks, routing, and component architecture.
// //                         </AccordionItem>
// //                         <AccordionItem title="5. Capstone Full Stack Project">
// //                             Develop, test, and deploy a complete full stack app.
// //                         </AccordionItem>
// //                     </motion.section>

// //                     <motion.section className="java_section" id="capstone" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
// //                         <h2><FaProjectDiagram className="java_icon" /> Capstone Project</h2>
// //                         <p>Build and deploy a complete full stack application using:</p>
// //                         <ul className="java-highlight-list">
// //                             <li>Frontend: React, Redux</li>
// //                             <li>Backend: Java, Spring Boot</li>
// //                             <li>Database: MySQL / MongoDB</li>
// //                             <li>Version Control: Git, GitHub</li>
// //                             <li>Deployment: Netlify / Vercel / Render</li>
// //                         </ul>
// //                     </motion.section>

// //                     <motion.section className="java_section" id="outcomes" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
// //                         <h2><FaCode className="java_icon" /> What You'll Achieve</h2>
// //                         <ul className="java-highlight-list">
// //                             <li>Build full stack web apps using Java & React</li>
// //                             <li>Create RESTful APIs with Spring Boot</li>
// //                             <li>Work with MySQL & NoSQL databases</li>
// //                             <li>Understand DevOps basics & deploy live apps</li>
// //                             <li>Crack interviews with confidence</li>
// //                         </ul>
// //                     </motion.section>

// //                     <motion.section className="java_section" id="certification" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
// //                         <h2><FaFileDownload className="java_icon" /> Certification</h2>
// //                         <p>Upon successful completion, you'll receive an industry-recognized Certificate of Completion to boost your resume.</p>
// //                     </motion.section>

// //                     <motion.section className="java_section" id="trainers" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
// //                         <h2><FaUserPlus className="java_icon" /> Meet Your Trainers</h2>
// //                         <p>Learn from experienced software developers who have trained 500+ students and worked at top companies with hands-on Java and React expertise.</p>
// //                     </motion.section>

// //                     <motion.section className="java_section" id="testimonials" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
// //                         <h2>What Our Students Say</h2>
// //                         <div className="testimonials">
// //                             <blockquote>
// //                                 "This course helped me land my first job as a Java full stack developer!" – <strong>Priya S.</strong>
// //                             </blockquote>
// //                             <blockquote>
// //                                 "The real-time projects and interview prep were game-changers." – <strong>Rahul M.</strong>
// //                             </blockquote>
// //                         </div>
// //                     </motion.section>

// //                     <motion.section className="java-cta-buttons" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
// //                         <a href="/brochures/java-fullstack.pdf" download className="java_btn java-download-btn">
// //                             <FaFileDownload /> Download Brochure
// //                         </a>
// //                         <a href="/register" className="java_btn java-register-btn">
// //                             <FaUserPlus /> Register Now
// //                         </a>
// //                     </motion.section>

// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default JavaFullStack;


// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaFileDownload,
//   FaUserPlus,
//   FaCode,
//   FaProjectDiagram,
//   FaClock
// } from "react-icons/fa";
// import "./coursePageStyle.css";

// const JavaFullStack = () => {
//   return (
//     <div className="javaFullStackPage">
//       <motion.div
//         className="hero-section"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1>Java Full Stack Development Program</h1>
//         <p>
//           Master frontend and backend development with hands-on projects, real-world tools, and industry best practices.
//         </p>
//         <div className="cta-buttons">
//           <a href="/brochures/java-fullstack.pdf" download className="cta download">
//             <FaFileDownload /> Download Brochure
//           </a>
//           <a href="/register" className="cta register">
//             <FaUserPlus /> Register Now
//           </a>
//         </div>
//       </motion.div>

//       <div className="content-section">
//         <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//           <h2><FaCode /> Course Overview</h2>
//           <p>
//             Dive deep into full stack development with Java. Start from core Java concepts and progress to advanced Spring Boot and RESTful APIs. Learn frontend development with React, integrate databases like MySQL and MongoDB, and finally deploy your apps using modern CI/CD practices. Real-world projects ensure practical, job-ready experience.
//           </p>
//         </motion.section>

//         <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//           <h2><FaUserPlus /> Who Should Enroll?</h2>
//           <ul>
//             <li>Freshers aiming to enter full stack development</li>
//             <li>Professionals switching from non-tech backgrounds</li>
//             <li>Backend or frontend developers expanding skillsets</li>
//             <li>Students and interns seeking real-world experience</li>
//           </ul>
//         </motion.section>

//         <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//           <h2><FaCode /> Technologies Covered</h2>
//           <ul className="tech-list">
//             <li>Java (Core, OOPs, Collections)</li>
//             <li>Spring Boot, Hibernate</li>
//             <li>React.js</li>
//             <li>RESTful APIs</li>
//             <li>MySQL, MongoDB</li>
//             <li>HTML, CSS, JavaScript</li>
//             <li>Git, GitHub, CI/CD (Netlify, Render, Vercel)</li>
//           </ul>
//         </motion.section>

//         <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//           <h2><FaCode /> Tools & Platforms</h2>
//           <ul className="tech-list">
//             <li>VS Code, IntelliJ IDEA</li>
//             <li>Postman</li>
//             <li>Figma (UI prototyping)</li>
//             <li>Git, GitHub</li>
//             <li>Netlify, Vercel, Render</li>
//           </ul>
//         </motion.section>

//         <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//           <h2><FaProjectDiagram /> Program Highlights</h2>
//           <ul>
//             <li>Project-based learning: eCommerce app, admin dashboards</li>
//             <li>Career support: Resume & GitHub review, mock interviews</li>
//             <li>Mentorship from experienced developers</li>
//           </ul>
//         </motion.section>

//         <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//           <h2><FaClock /> Duration</h2>
//           <p><strong>4 Months</strong> – Available in Weekday and Weekend batches</p>
//         </motion.section>

//         <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//           <h2><FaProjectDiagram /> Syllabus Snapshot</h2>
//           <ol>
//             <li><strong>Java Basics:</strong> OOPs, collections, exception handling</li>
//             <li><strong>Spring Boot & REST:</strong> API development and DB integration</li>
//             <li><strong>MySQL:</strong> Schema design, SQL queries, connection pooling</li>
//             <li><strong>Frontend with React:</strong> Components, hooks, routing, state management</li>
//             <li><strong>Capstone Project:</strong> End-to-end full stack app development</li>
//           </ol>
//         </motion.section>

//         <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//           <h2><FaProjectDiagram /> Capstone Project</h2>
//           <p>Develop and deploy a full stack app integrating all learned technologies. Use version control, best UI/UX practices, and CI/CD tools.</p>
//         </motion.section>

//         <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//           <h2><FaCode /> What You'll Achieve</h2>
//           <ul>
//             <li>Proficiency in full stack development with Java and React</li>
//             <li>Deployment skills with CI/CD tools</li>
//             <li>Portfolio-ready projects and GitHub profile</li>
//             <li>Confidence to clear technical interviews</li>
//           </ul>
//         </motion.section>

//         <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//           <h2><FaFileDownload /> Certification</h2>
//           <p>Receive a certificate of completion recognized by the industry upon successfully finishing the course and final project.</p>
//         </motion.section>

//         <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//           <h2><FaUserPlus /> Meet Your Trainers</h2>
//           <p>
//             Learn from developers with 7+ years of experience in Java and React development. Trainers have mentored 500+ students and bring in-depth practical knowledge to the classroom.
//           </p>
//         </motion.section>

//         <motion.section className="section testimonials" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//           <h2>Student Testimonials</h2>
//           <blockquote>
//             "This course helped me land my first job as a Java Full Stack Developer!" – <strong>Priya S.</strong>
//           </blockquote>
//           <blockquote>
//             "The mock interviews and real-time project experience were exactly what I needed." – <strong>Rahul M.</strong>
//           </blockquote>
//         </motion.section>
//       </div>
//     </div>
//   );
// };

// export default JavaFullStack;

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaFileDownload,
//   FaUserPlus,
//   FaCode,
//   FaProjectDiagram,
//   FaClock
// } from "react-icons/fa";
// import "./coursePageStyle.css";

// const JavaFullStack = () => {
//   return (
//     <div className="javaFullStackPage container-fluid px-3 px-md-5">
//       <motion.div
//         className="hero-section text-center py-5 bg-primary text-white rounded-4 mb-4"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="display-4 fw-bold">Java Full Stack Development Program</h1>
//         <p className="lead">Master frontend and backend development with hands-on projects, real-world tools, and industry best practices.</p>
//         <div className="cta-buttons d-flex justify-content-center gap-3 mt-4">
//           <a href="/brochures/java-fullstack.pdf" download className="btn btn-light btn-lg fw-semibold">
//             <FaFileDownload className="me-2" />Download Brochure
//           </a>
//           <a href="/register" className="btn btn-outline-light btn-lg fw-semibold">
//             <FaUserPlus className="me-2" />Register Now
//           </a>
//         </div>
//       </motion.div>

//       <div className="content-section">
//         <Section title="Course Overview" icon={<FaCode />}>
//           Dive deep into full stack development with Java. Start from core Java concepts and progress to advanced Spring Boot and RESTful APIs. Learn frontend development with React, integrate databases like MySQL and MongoDB, and finally deploy your apps using modern CI/CD practices. Real-world projects ensure practical, job-ready experience.
//         </Section>

//         <Section title="Who Should Enroll?" icon={<FaUserPlus />}>
//           <ul>
//             <li>Freshers aiming to enter full stack development</li>
//             <li>Professionals switching from non-tech backgrounds</li>
//             <li>Backend or frontend developers expanding skillsets</li>
//             <li>Students and interns seeking real-world experience</li>
//           </ul>
//         </Section>

//         <Section title="Technologies Covered" icon={<FaCode />}>
//           <ul className="row row-cols-1 row-cols-md-2 g-3">
//             <li>Java (Core, OOPs, Collections)</li>
//             <li>Spring Boot, Hibernate</li>
//             <li>React.js</li>
//             <li>RESTful APIs</li>
//             <li>MySQL, MongoDB</li>
//             <li>HTML, CSS, JavaScript</li>
//             <li>Git, GitHub, CI/CD (Netlify, Render, Vercel)</li>
//           </ul>
//         </Section>

//         <Section title="Tools & Platforms" icon={<FaCode />}>
//           <ul className="row row-cols-1 row-cols-md-2 g-3">
//             <li>VS Code, IntelliJ IDEA</li>
//             <li>Postman</li>
//             <li>Figma (UI prototyping)</li>
//             <li>Git, GitHub</li>
//             <li>Netlify, Vercel, Render</li>
//           </ul>
//         </Section>

//         <Section title="Program Highlights" icon={<FaProjectDiagram />}>
//           <ul>
//             <li>Project-based learning: eCommerce app, admin dashboards</li>
//             <li>Career support: Resume & GitHub review, mock interviews</li>
//             <li>Mentorship from experienced developers</li>
//           </ul>
//         </Section>

//         <Section title="Duration" icon={<FaClock />}>
//           <p><strong>4 Months</strong> – Available in Weekday and Weekend batches</p>
//         </Section>

//         <Section title="Syllabus Snapshot" icon={<FaProjectDiagram />}>
//           <ol>
//             <li><strong>Java Basics:</strong> OOPs, collections, exception handling</li>
//             <li><strong>Spring Boot & REST:</strong> API development and DB integration</li>
//             <li><strong>MySQL:</strong> Schema design, SQL queries, connection pooling</li>
//             <li><strong>Frontend with React:</strong> Components, hooks, routing, state management</li>
//             <li><strong>Capstone Project:</strong> End-to-end full stack app development</li>
//           </ol>
//         </Section>

//         <Section title="Capstone Project" icon={<FaProjectDiagram />}>
//           <p>Develop and deploy a full stack app integrating all learned technologies. Use version control, best UI/UX practices, and CI/CD tools.</p>
//         </Section>

//         <Section title="What You'll Achieve" icon={<FaCode />}>
//           <ul>
//             <li>Proficiency in full stack development with Java and React</li>
//             <li>Deployment skills with CI/CD tools</li>
//             <li>Portfolio-ready projects and GitHub profile</li>
//             <li>Confidence to clear technical interviews</li>
//           </ul>
//         </Section>

//         <Section title="Certification" icon={<FaFileDownload />}>
//           <p>Receive a certificate of completion recognized by the industry upon successfully finishing the course and final project.</p>
//         </Section>

//         <Section title="Meet Your Trainers" icon={<FaUserPlus />}>
//           <p>Learn from developers with 7+ years of experience in Java and React development. Trainers have mentored 500+ students and bring in-depth practical knowledge to the classroom.</p>
//         </Section>

//         <Section title="Student Testimonials">
//           <blockquote className="blockquote">"This course helped me land my first job as a Java Full Stack Developer!" – <strong>Priya S.</strong></blockquote>
//           <blockquote className="blockquote">"The mock interviews and real-time project experience were exactly what I needed." – <strong>Rahul M.</strong></blockquote>
//         </Section>
//       </div>
//     </div>
//   );
// };

// const Section = ({ title, icon, children }) => (
//   <motion.section
//     className="section mb-5"
//     initial={{ opacity: 0 }}
//     whileInView={{ opacity: 1 }}
//     transition={{ duration: 0.5 }}
//   >
//     <h2 className="h4 fw-bold mb-3">{icon && <span className="me-2">{icon}</span>}{title}</h2>
//     <div>{children}</div>
//   </motion.section>
// );

// export default JavaFullStack;


import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FaFileDownload,
    FaUserPlus,
    FaCode,
    FaProjectDiagram,
    FaClock
} from "react-icons/fa";
import "./coursePageStyle.css";

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="accordion-item">
            <button onClick={() => setIsOpen(!isOpen)} className="accordion-btn">
                {title}
                <span>{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <div className="accordion-content">{children}</div>}
        </div>
    );
};

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

                    <motion.section className="section" id="overview" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <h2><FaCode className="java_icon" /> Course Overview</h2>
                        <p>
                            Learn full stack development using Java. Build RESTful APIs, responsive UIs, and
                            deploy real-world apps with best practices. Industry-relevant and project-driven!
                        </p>
                    </motion.section>

                    <motion.section className="java_section" id="who-should-enroll" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaUserPlus className="java_icon" /> Who Should Enroll?</h2>
                        <ul className="java-highlight-list">
                            <li>Freshers looking to become full stack developers</li>
                            <li>Professionals switching from non-tech to tech careers</li>
                            <li>Backend developers wanting to learn frontend (and vice versa)</li>
                            <li>Students seeking hands-on experience with real-world projects</li>
                        </ul>
                    </motion.section>

                    <motion.section className="java_section" id="technologies" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
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

                    <motion.section className="java_section" id="tools" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaCode className="java_icon" /> Tools & Platforms</h2>
                        <ul className="java-tech-list">
                            <li>VS Code, IntelliJ IDEA</li>
                            <li>Postman for API testing</li>
                            <li>Git & GitHub for version control</li>
                            <li>Netlify, Vercel, and Render for deployments</li>
                            <li>Figma (basic UI design understanding)</li>
                        </ul>
                    </motion.section>

                    <motion.section className="java_section" id="highlights" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
                        <h2><FaProjectDiagram className="java_icon" /> Program Highlights</h2>
                        <ul className="java-highlight-list">
                            <li>Real-world projects like eCommerce and Admin dashboards</li>
                            <li>Mock interviews and career coaching</li>
                            <li>Deployment on Netlify, Render, Vercel</li>
                            <li>Resume and GitHub profile review</li>
                        </ul>
                    </motion.section>

                    <motion.section className="java_section" id="duration" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaClock className="java_icon" /> Duration</h2>
                        <p><strong>4 Months</strong> – Weekday & Weekend batches available</p>
                    </motion.section>

                    {/* Syllabus with Accordion */}
                    <motion.section className="java_section" id="syllabus" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaProjectDiagram className="java_icon" /> Syllabus Snapshot</h2>
                        <AccordionItem title="1. Java Basics, OOPs, Collections">
                            Learn Java fundamentals, object-oriented programming, and collections framework.
                        </AccordionItem>
                        <AccordionItem title="2. Spring Boot & REST API Development">
                            Develop RESTful APIs, integrate databases, and apply best practices using Spring Boot.
                        </AccordionItem>
                        <AccordionItem title="3. MySQL DB Integration">
                            Learn to structure, query, and connect Java applications with MySQL.
                        </AccordionItem>
                        <AccordionItem title="4. Frontend Development using React">
                            Build dynamic UIs, use React hooks, routing, and component architecture.
                        </AccordionItem>
                        <AccordionItem title="5. Capstone Full Stack Project">
                            Develop, test, and deploy a complete full stack app.
                        </AccordionItem>
                    </motion.section>

                    <motion.section className="java_section" id="capstone" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaProjectDiagram className="java_icon" /> Capstone Project</h2>
                        <p>Build and deploy a complete full stack application using:</p>
                        <ul className="java-highlight-list">
                            <li>Frontend: React, Redux</li>
                            <li>Backend: Java, Spring Boot</li>
                            <li>Database: MySQL / MongoDB</li>
                            <li>Version Control: Git, GitHub</li>
                            <li>Deployment: Netlify / Vercel / Render</li>
                        </ul>
                    </motion.section>

                    <motion.section className="java_section" id="outcomes" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaCode className="java_icon" /> What You'll Achieve</h2>
                        <ul className="java-highlight-list">
                            <li>Build full stack web apps using Java & React</li>
                            <li>Create RESTful APIs with Spring Boot</li>
                            <li>Work with MySQL & NoSQL databases</li>
                            <li>Understand DevOps basics & deploy live apps</li>
                            <li>Crack interviews with confidence</li>
                        </ul>
                    </motion.section>

                    <motion.section className="java_section" id="certification" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaFileDownload className="java_icon" /> Certification</h2>
                        <p>Upon successful completion, you'll receive an industry-recognized Certificate of Completion to boost your resume.</p>
                    </motion.section>

                    <motion.section className="java_section" id="trainers" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                        <h2><FaUserPlus className="java_icon" /> Meet Your Trainers</h2>
                        <p>Learn from experienced software developers who have trained 500+ students and worked at top companies with hands-on Java and React expertise.</p>
                    </motion.section>

                    <motion.section className="java_section" id="testimonials" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
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

                    <motion.section className="java-cta-buttons" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
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
