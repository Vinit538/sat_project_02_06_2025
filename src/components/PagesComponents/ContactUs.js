import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { ToastContainer, toast, Bounce } from "react-toastify";
import axios from "axios";
import base_url from "../api/bootapi";
import "react-toastify/dist/ReactToastify.css";
import "./pagesStyle.css";

function ContactUs() {
  const [contactForm, setContactForm] = useState({
    userName: "",
    userEmail: "",
    userPhoneNo: "",
    userMessage: "",
  });

  const [validation, setValidation] = useState({
    userEmail: null,
    userPhoneNo: null,
  });

  const validateField = (name, value) => {
    let isValid = false;
    if (name === "userEmail") {
      isValid = /^[A-Za-z0-9._%+-]+@[A-Za-z.-]+\.[A-Za-z]{2,}$/i.test(value);
    } else if (name === "userPhoneNo") {
      isValid = /^[0-9]{10}$/.test(value);
    }
    setValidation((prev) => ({ ...prev, [name]: isValid }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
    if (name === "userEmail" || name === "userPhoneNo") {
      validateField(name, value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { userName, userEmail, userPhoneNo, userMessage } = contactForm;

    if (!userName.trim() || !userEmail.trim() || !userPhoneNo.trim() || !userMessage.trim()) {
      toast.error("Please fill all the fields before submitting.");
      return;
    }

    if (!validation.userEmail || !validation.userPhoneNo) {
      toast.error("Please correct the errors in email and phone fields.");
      return;
    }

    try {
      await axios.post(`${base_url}/api/messages`, contactForm);
      console.log(contactForm);
      toast.success("Message sent successfully!");
      setContactForm({
        userName: "",
        userEmail: "",
        userPhoneNo: "",
        userMessage: "",
      });
      setValidation({ userEmail: null, userPhoneNo: null });
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="contact-us">
      <ToastContainer position="top-right" autoClose={4000} transition={Bounce} />

      {/* Hero Section */}
      <motion.section
        className="contact-hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Contact SAT Academy</h1>
        <p>We're here to help! Reach out to us for any queries or assistance.</p>
      </motion.section>

      {/* Contact Info */}
      <motion.section
        className="contact-info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="info-grid">
          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <h5>Address</h5>
            <p>#101, SAT Tower, MG Road, Bengaluru, India</p>
          </div>
          <div className="info-card">
            <FaPhoneAlt className="info-icon" />
            <h5>Phone</h5>
            <p>+91 98765 43210</p>
          </div>
          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <h5>Email</h5>
            <p>info@satacademy.com</p>
          </div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        className="contact-form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            placeholder="Your Name"
            value={contactForm.userName}
            onChange={handleInputChange}
            required
          />

          <input
            type="email"
            name="userEmail"
            placeholder="Your Email"
            value={contactForm.userEmail}
            onChange={handleInputChange}
            className={validation.userEmail === false ? "is-invalid" : ""}
            required
          />
          {validation.userEmail === false && (
            <small className="text-danger">Invalid email format</small>
          )}

          <input
            type="tel"
            name="userPhoneNo"
            placeholder="Your Phone Number"
            value={contactForm.userPhoneNo}
            onChange={handleInputChange}
            className={validation.userPhoneNo === false ? "is-invalid" : ""}
            required
          />
          {validation.userPhoneNo === false && (
            <small className="text-danger">Enter 10-digit phone number</small>
          )}

          <textarea
            name="userMessage"
            placeholder="Your Message"
            rows="4"
            value={contactForm.userMessage}
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </motion.section>

      {/* Google Map */}
      <motion.section
        className="map-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h4>Find Us Here</h4>
        <div className="map-responsive">
          <iframe
            title="SAT Academy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.7076536900354!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE4LjQiTiA3N8KwMzUnMzAuNSJF!5e0!3m2!1sen!2sin!4v161234567890"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </motion.section>
    </div>
  );
}

export default ContactUs;
