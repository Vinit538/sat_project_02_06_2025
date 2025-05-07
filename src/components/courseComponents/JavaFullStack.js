import React from 'react';
import './coursePageStyle.css'

const JavaFullStack = () => {
    return (
        <div className='javaFullStackPage'>
            <div className="container py-5">
                {/* Hero Section */}
                <div className="text-center mb-5">
                    <h1 className="fw-bold">Java Full Stack Development</h1>
                    <p className="lead">Master Frontend & Backend development with Java, Spring Boot, React, and more.</p>
                </div>

                {/* Overview */}
                <section className="mb-4">
                    <h3>Course Overview</h3>
                    <p>
                        The Java Full Stack Development course is designed to help you become a proficient full-stack developer using Java and modern web technologies.
                        You’ll work on real-time projects, build REST APIs, design responsive UIs, and deploy applications using DevOps best practices.
                    </p>
                </section>

                {/* Technologies */}
                <section className="mb-4">
                    <h4>Technologies Covered</h4>
                    <ul>
                        <li>Core Java & OOPs</li>
                        <li>Spring Boot & Hibernate</li>
                        <li>React.js</li>
                        <li>REST APIs</li>
                        <li>MySQL & MongoDB</li>
                        <li>HTML, CSS, JavaScript</li>
                        <li>Git, GitHub, CI/CD basics</li>
                    </ul>
                </section>

                {/* Highlights */}
                <section className="mb-4">
                    <h4>Program Highlights</h4>
                    <ul>
                        <li>Hands-on real-world projects (e.g., eCommerce app, admin dashboard)</li>
                        <li>Resume building and interview preparation</li>
                        <li>Deployment using cloud platforms (Netlify, Render, Vercel)</li>
                        <li>Mock interviews and career guidance</li>
                    </ul>
                </section>

                {/* Duration */}
                <section className="mb-4">
                    <h4>Duration</h4>
                    <p><strong>4 Months</strong> (Weekend & Weekday batches available)</p>
                </section>

                {/* Syllabus */}
                <section className="mb-4">
                    <h4>Brief Syllabus</h4>
                    <ol>
                        <li>Java Fundamentals, OOP, Collections</li>
                        <li>Spring Boot, REST API development</li>
                        <li>MySQL database integration</li>
                        <li>Frontend with React.js</li>
                        <li>Project: Full-stack Web App</li>
                    </ol>
                </section>

                {/* Buttons */}
                <section className="d-flex gap-3 mb-5">
                    <a
                        href="/brochures/java-fullstack.pdf"
                        className="btn btn-outline-primary"
                        download
                    >
                        Download Brochure
                    </a>
                    <a
                        href="/register"
                        className="btn btn-success"
                    >
                        Register Now
                    </a>
                </section>
            </div>
        </div>
    );
};

export default JavaFullStack;
