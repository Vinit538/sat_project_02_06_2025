import React from 'react';
import '../Home.css';
import SplitText from '../SplitText'; // Update path if needed


function OurPrograms() {
    return (
        <div className="container text-center">
            <div className='py-5'>
                <SplitText
                    text="Our Programs"
                    className="fw-bold mb-5 fs-2"
                    delay={30}
                    animationFrom={{ opacity: 0, transform: 'translateY(20px)' }}
                    animationTo={{ opacity: 1, transform: 'translateY(0)' }}
                    textAlign="center"
                />
            </div>



            {/* <h2 className="fw-bold mb-5">Our Programs</h2> */}
            <div className="row g-4">
                <div className="col-md-4">
                    <div className="card h-100 course-card">
                        <div className="card-body">
                            <h5 className="card-title">Java Full Stack Development</h5>
                            <p className="card-text">Master Core Java, Spring Boot, React, MySQL, and Cloud Deployments.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 course-card">
                        <div className="card-body">
                            <h5 className="card-title">Python for Data Science</h5>
                            <p className="card-text">Learn Python, Data Analysis, Machine Learning, and AI Fundamentals.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 course-card">
                        <div className="card-body">
                            <h5 className="card-title">CAD Designing</h5>
                            <p className="card-text">Become a CAD expert with practical training for Mechanical and Civil designs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurPrograms;