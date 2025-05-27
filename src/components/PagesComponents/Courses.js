import React from "react";
import courseCards from "../dataComponents/courseCards";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaClock, FaRupeeSign, FaTools } from "react-icons/fa";
import "./pagesStyle.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

function Courses() {
  return (
    <div className="courses-page">

      <motion.section
        className="courses-hero text-white"
        style={{
          background: "linear-gradient(135deg, #007bff, #6610f2)",
          borderBottomLeftRadius: "30px",
          borderBottomRightRadius: "30px",
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="mb-3 fw-bold display-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Explore Industry-Focused Career Programs
        </motion.h1>

        <motion.p
          className="lead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Unlock your career potential with SAT Academy's comprehensive, hands-on training programs
          designed for today’s most in-demand tech roles. Whether you're aiming to become a skilled
          Data Engineer, Full Stack Developer, CAD Designer, Cloud Expert, AI Specialist, or Database
          Administrator — our courses blend practical learning with real-world projects, mentoring,
          and placement support. Learn cutting-edge tools, industry-standard technologies, and gain
          the confidence to thrive in any technical environment.
        </motion.p>

      </motion.section>

      <div className="container">
        <div className="row">
          {Array.isArray(courseCards) &&
            courseCards.map((course, index) => (

              <motion.div
                className="col-12 col-md-6 col-lg-4 mb-4 d-flex"
                key={course.id || index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <div className="course-card d-flex flex-column">
                  <div className="course-img-wrapper">
                    <img
                      src={course.image || "https://via.placeholder.com/400x300?text=Course+Image"}
                      className="card-img-top"
                      alt={course.title}
                    />
                  </div>
                  <div className="course-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-description">{course.description}</p>
                    <p><strong>Technologies:</strong> {course.technologies.join(", ")}</p>


                    <p>
                      <FaClock className="course-icon" /> <strong>Duration:</strong> {course.duration}
                    </p>

                    {course.fee && (

                      <p className="course-fee course-fee-details">
                        <FaRupeeSign className="course-icon" /> <strong>Fee:</strong>
                        <span className="discounted"> {course.fee.amount}</span>{" "}
                        <span className="actual">{course.fee.discount}</span>
                        &nbsp;
                        {course.fee.emiAvailable && (
                          <span className="emi-line">
                            <span className="badge-emi">EMI Available</span>
                          </span>
                        )}
                      </p>

                    )}

                    <div className="course-actions">
                      <Link to={course.courseLink || "#"} className="btn  view-details-btn">
                        View Details
                      </Link>
                      <a
                        href={course.brochureLink || "#"}
                        className="btn downlode-brochure-btn"
                        download
                      >
                        Brochure
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
