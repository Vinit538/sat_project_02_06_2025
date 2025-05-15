import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaUsers,
  FaHandshake,
  FaJava,
  FaCloud,
  FaDraftingCompass,
  FaDatabase,
} from "react-icons/fa";
import "./pagesStyle.css";

function HireTalent() {
  return (
    <div className="hire-from-us">
      {/* Hero Section */}
      <motion.section
        className="hire-hero text-center p-5 text-white"
        style={{ backgroundColor: "#007bff" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mb-3 fw-bold">Looking to Hire Job-Ready Talent?</h1>
        <p className="lead">
          Access a pool of pre-trained, industry-ready professionals in Java,
          Full Stack, CAD, and more!
        </p>
        <button className="btn btn-light mt-3 px-4 py-2">Get in Touch</button>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="hire-benefits p-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center mb-5">Why Companies Choose Our Talent</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <FaLaptopCode size={40} className="text-primary mb-2" />
            <h5 className="hover-glow">Job-Ready Skills</h5>
            <p>Hands-on training in real-world tools and projects.</p>
          </div>
          <div className="col-md-4 mb-4">
            <FaUsers size={40} className="text-success mb-2" />
            <h5 className="hover-glow">Soft Skills Included</h5>
            <p>Polished communication and collaboration skills.</p>
          </div>
          <div className="col-md-4 mb-4">
            <FaHandshake size={40} className="text-danger mb-2" />
            <h5 className="hover-glow">No Hiring Fee</h5>
            <p>Direct access to skilled candidates at no cost.</p>
          </div>
        </div>
      </motion.section>

      {/* Talent Pool */}
      <motion.section
        className="talent-pool bg-light "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center mb-4">Talent Categories</h2>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <span className="badge-item">
            <FaJava className="me-2" /> Java Developers
          </span>
          <span className="badge-item">
            <FaLaptopCode className="me-2" /> Full Stack Engineers
          </span>
          <span className="badge-item">
            <FaDraftingCompass className="me-2" /> CAD Designers
          </span>
          <span className="badge-item">
            <FaDatabase className="me-2" /> Data Analysts
          </span>
          <span className="badge-item">
            <FaCloud className="me-2" /> Cloud / DevOps Engineers
          </span>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        className="hire-contact "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center mb-4">Ready to Hire?</h2>
        <form className="mx-auto contact-form">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Your Company Email"
            required
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Company Name"
            required
          />
          <textarea
            className="form-control mb-3"
            rows="4"
            placeholder="Your Requirements (e.g., No. of candidates, tech stack, etc.)"
            required
          ></textarea>
          <button className="btn btn-primary w-100" type="submit">
            Submit Inquiry
          </button>
        </form>
      </motion.section>

      {/* Company Logos */}
      <section className="company-logos bg-light p-4 text-center">
        <p className="text-muted">Trusted by industry-leading hiring partners</p>
        <div className="d-flex justify-content-center gap-4 flex-wrap">
          <img src="/images/partner1.png" alt="Partner 1" height="40" />
          <img src="/images/partner2.png" alt="Partner 2" height="40" />
          <img src="/images/partner3.png" alt="Partner 3" height="40" />
        </div>
      </section>
    </div>
  );
}

export default HireTalent;
