// import React from "react";
// import { FaLaptopCode, FaChalkboardTeacher, FaPaintBrush } from "react-icons/fa";
// import { motion } from "framer-motion";
// import "./pagesStyle.css";

// function Career() {
//   return (
//     <div className="career-page">

//       {/* Hero Section */}
//       <motion.section
//         className="career-hero"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h1>Join SAT Academy</h1>
//         <p>We’re hiring passionate trainers across various domains to build the next generation of tech leaders.</p>
//       </motion.section>

//       {/* Open Positions */}
//       <motion.section
//         className="career-openings"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         transition={{ staggerChildren: 0.2 }}
//       >
//         <h2>Current Openings</h2>
//         <div className="positions-grid">

//           <motion.div className="career-card" whileHover={{ scale: 1.03 }}>
//             <FaLaptopCode className="career-icon" />
//             <h4>Full Stack Trainer</h4>
//             <p>Guide students in Java, React.js, Node.js, and full-stack development projects.</p>
//             <span>📍 Bangalore (On-site)</span>
//             <a href="#apply" className="btn-apply">Apply Now</a>
//           </motion.div>

//           <motion.div className="career-card" whileHover={{ scale: 1.03 }}>
//             <FaChalkboardTeacher className="career-icon" />
//             <h4>Data Engineering Mentor</h4>
//             <p>Deliver courses on Python, SQL, Spark, and AWS/Azure pipelines.</p>
//             <span>📍 Remote / Hybrid</span>
//             <a href="#apply" className="btn-apply">Apply Now</a>
//           </motion.div>

//           <motion.div className="career-card" whileHover={{ scale: 1.03 }}>
//             <FaPaintBrush className="career-icon" />
//             <h4>CAD Design Trainer</h4>
//             <p>Help students master AutoCAD, Fusion 360, and real-world civil/mechanical projects.</p>
//             <span>📍 Remote</span>
//             <a href="#apply" className="btn-apply">Apply Now</a>
//           </motion.div>

//         </div>
//       </motion.section>

//       {/* Testimonials */}
//       <motion.section
//         className="career-testimonials"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2>Trainer Testimonials</h2>
//         <div className="testimonial">
//           <p>
//             "Training at SAT Academy has been an incredibly fulfilling experience. The environment encourages innovation,
//             and I love helping students build real-time applications." <br />
//             <strong>- Priya Sharma, Full Stack Trainer</strong>
//           </p>
//         </div>
//       </motion.section>

//       {/* Life at SAT */}
//       <motion.section
//         className="career-life"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         <h2>Life at SAT Academy</h2>
//         <p>
//           We believe in mentorship, creativity, and career growth. Whether you’re on-site or remote, you’ll feel part of
//           a passionate team dedicated to education.
//         </p>
//         <img src="/images/teamwork.jpg" alt="Team collaboration" className="team-image" />
//       </motion.section>

//       {/* Application Form */}
//       <motion.section
//         id="apply"
//         className="career-apply"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2>Apply Now</h2>
//         <form>
//           <input type="text" placeholder="Your Name" required />
//           <input type="email" placeholder="Email Address" required />
//           <input type="text" placeholder="Phone Number" required />
//           <input type="text" placeholder="Position You're Applying For" required />
//           <textarea placeholder="Why do you want to join SAT Academy?" rows="4" required></textarea>
//           <button type="submit">Submit Application</button>
//         </form>
//       </motion.section>

//     </div>
//   );
// }

// export default Career;


import React, { useState } from "react";
import { FaLaptopCode, FaChalkboardTeacher, FaPaintBrush } from "react-icons/fa";
import { motion } from "framer-motion";
import { ToastContainer, toast, Bounce } from "react-toastify";
import axios from "axios";
import base_url from "../api/bootapi";
import "react-toastify/dist/ReactToastify.css";
import "./pagesStyle.css";

function Career() {
  const [trainerFormData, setTrainerFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
  });

  const [validation, setValidation] = useState({
    email: null,
    phone: null,
  });

  const validateField = (name, value) => {
    let isValid = false;
    if (name === "email") {
      isValid = /^[A-Za-z0-9._%+-]+@[A-Za-z.-]+\.[A-Za-z]{2,}$/i.test(value);
    } else if (name === "phone") {
      isValid = /^[0-9]{10}$/.test(value);
    }
    setValidation((prev) => ({ ...prev, [name]: isValid }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTrainerFormData({ ...trainerFormData, [name]: value });
    if (name === "email" || name === "phone") {
      validateField(name, value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, position, message } = trainerFormData;

    // Basic field validation
    if (!name || !email || !phone || !position || !message) {
      toast.error("Please fill all fields.");
      return;
    }

    // Format validations
    if (!validation.email || !validation.phone) {
      toast.error("Please correct the errors in email and phone fields.");
      return;
    }

    try {
      // await axios.post(`${base_url}/trainer-applications`, trainerFormData);
      console.log(trainerFormData)
      toast.success("Application submitted successfully!");

      setTrainerFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        message: '',
      });
      setValidation({ email: null, phone: null });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="career-page">
      <ToastContainer position="top-right" autoClose={4000} transition={Bounce} />

      {/* Hero Section */}
      <motion.section
        className="career-hero"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Join SAT Academy</h1>
        <p>We’re hiring passionate trainers across various domains to build the next generation of tech leaders.</p>
      </motion.section>

      {/* Open Positions */}
      <motion.section
        className="career-openings"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <h2>Current Openings</h2>
        <div className="positions-grid">
          <motion.div className="career-card" whileHover={{ scale: 1.03 }}>
            <FaLaptopCode className="career-icon" />
            <h4>Full Stack Trainer</h4>
            <p>Guide students in Java, React.js, Node.js, and full-stack development projects.</p>
            <span>📍 Bangalore (On-site)</span>
            <a href="#apply" className="btn-apply">Apply Now</a>
          </motion.div>

          <motion.div className="career-card" whileHover={{ scale: 1.03 }}>
            <FaChalkboardTeacher className="career-icon" />
            <h4>Data Engineering Mentor</h4>
            <p>Deliver courses on Python, SQL, Spark, and AWS/Azure pipelines.</p>
            <span>📍 Remote / Hybrid</span>
            <a href="#apply" className="btn-apply">Apply Now</a>
          </motion.div>

          <motion.div className="career-card" whileHover={{ scale: 1.03 }}>
            <FaPaintBrush className="career-icon" />
            <h4>CAD Design Trainer</h4>
            <p>Help students master AutoCAD, Fusion 360, and real-world civil/mechanical projects.</p>
            <span>📍 Remote</span>
            <a href="#apply" className="btn-apply">Apply Now</a>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="career-testimonials"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Trainer Testimonials</h2>
        <div className="testimonial">
          <p>
            "Training at SAT Academy has been an incredibly fulfilling experience. The environment encourages innovation,
            and I love helping students build real-time applications." <br />
            <strong>- Priya Sharma, Full Stack Trainer</strong>
          </p>
        </div>
      </motion.section>

      {/* Life at SAT */}
      <motion.section
        className="career-life"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2>Life at SAT Academy</h2>
        <p>
          We believe in mentorship, creativity, and career growth. Whether you’re on-site or remote, you’ll feel part of
          a passionate team dedicated to education.
        </p>
        <img src="/images/teamwork.jpg" alt="Team collaboration" className="team-image" />
      </motion.section>

      {/* Application Form */}
      <motion.section
        id="apply"
        className="career-apply"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Apply Now</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={trainerFormData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={trainerFormData.email}
            onChange={handleInputChange}
            className={validation.email === false ? 'is-invalid' : ''}
            required
          />
          {validation.email === false && <small className="text-danger">Invalid email format</small>}

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={trainerFormData.phone}
            onChange={handleInputChange}
            className={validation.phone === false ? 'is-invalid' : ''}
            required
          />
          {validation.phone === false && <small className="text-danger">Enter 10-digit phone number</small>}

          <input
            type="text"
            name="position"
            placeholder="Position You're Applying For"
            value={trainerFormData.position}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            placeholder="Why do you want to join SAT Academy?"
            rows="4"
            value={trainerFormData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit">Submit Application</button>
        </form>
      </motion.section>
    </div>
  );
}

export default Career;
