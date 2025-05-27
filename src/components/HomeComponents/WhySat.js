import React from 'react';
import '../Home.css';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaHandshake, FaLaptopCode, FaClock, FaCertificate } from 'react-icons/fa';

function WhySat() {
  return (
    <div className="container text-center">
   

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className='fw-bold mb-5 fs-2 whySatText'>Why Choose SAT Academy?</h2>
      </motion.div>

      <div className="row g-4">
        {/* Expert Trainers */}
        <motion.div
          className="col-md-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <FaChalkboardTeacher size={40} className="mb-3 text-primary" />
              <h5 className="card-title">Expert Trainers</h5>
              <p className="card-text">
                Get trained by professionals with real-world experience, delivering practical and job-oriented learning.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Guaranteed Placements */}
        {/* <motion.div
          className="col-md-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <FaHandshake size={40} className="mb-3 text-success" />
              <h5 className="card-title">Guaranteed Placements</h5>
              <p className="card-text">
                Access dedicated placement support, resume building, mock interviews, and recruitment drives.
              </p>
            </div>
          </div>
        </motion.div> */}
  <motion.div
          className="col-md-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <FaHandshake size={40} className="mb-3 text-success" />
              <h5 className="card-title">Unlimited Placement Support</h5>
              <p className="card-text">
              We stay with you until you succeed — offering resume building, mock interviews, job referrals, and access to ongoing recruitment drives.
              </p>
            </div>
          </div>
        </motion.div>
        {/* Hands-on Projects */}
        <motion.div
          className="col-md-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <FaLaptopCode size={40} className="mb-3 text-warning" />
              <h5 className="card-title">Hands-on Projects</h5>
              <p className="card-text">
                Build live, real-world projects with full mentorship to gain confidence and industry-relevant skills.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Flexible Learning Modes */}
        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <FaClock size={40} className="mb-3 text-info" />
              <h5 className="card-title">Flexible Learning Modes</h5>
              <p className="card-text">
                Choose from classroom, online, weekend, or self-paced learning—whatever fits your schedule.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Certification */}
        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
        >
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <FaCertificate size={40} className="mb-3 text-danger" />
              <h5 className="card-title">Industry-Recognized Certification</h5>
              <p className="card-text">
                Earn a professional certificate that boosts your resume and proves your skills to employers.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default WhySat;
