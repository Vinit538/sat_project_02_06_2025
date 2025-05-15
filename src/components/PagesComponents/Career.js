// // import React from "react";
// // // import "./Career.css";

// // function Career() {
// //   return (
// //     <div className="career-page container py-5">
// //       {/* Hero Section */}
// //       <section className="text-center mb-5">
// //         <h1 className="display-5">Join SAT Academy</h1>
// //         <p className="lead">Be a part of our mission to empower future tech leaders!</p>
// //       </section>

// //       {/* Open Positions */}
// //       <section className="open-positions mb-5">
// //         <h2 className="mb-4">Current Openings</h2>
// //         <div className="card mb-3">
// //           <div className="card-body">
// //             <h5 className="card-title">Full Stack Trainer</h5>
// //             <p className="card-text">We're looking for a passionate full stack developer with a flair for teaching. Experience with React, Node.js, and Java is preferred.</p>
// //             <p><strong>Location:</strong> Bangalore (On-site)</p>
// //             <a href="#apply" className="btn btn-primary">Apply Now</a>
// //           </div>
// //         </div>
// //         <div className="card mb-3">
// //           <div className="card-body">
// //             <h5 className="card-title">CAD Design Trainer</h5>
// //             <p className="card-text">Help aspiring designers master AutoCAD and SolidWorks. Prior teaching experience is a plus.</p>
// //             <p><strong>Location:</strong> Remote</p>
// //             <a href="#apply" className="btn btn-primary">Apply Now</a>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Life at SAT */}
// //       <section className="life-at-sat text-center mb-5">
// //         <h2 className="mb-4">Life at SAT Academy</h2>
// //         <p>We foster a collaborative, inclusive, and innovative work environment where every team member is valued.</p>
// //         <img src="/images/teamwork.jpg" alt="Team Collaboration" className="img-fluid rounded mt-3" />
// //       </section>

// //       {/* Application Form */}
// //       <section id="apply" className="application-form bg-light p-4 rounded">
// //         <h3 className="mb-3">Apply Now</h3>
// //         <form>
// //           <div className="mb-3">
// //             <input type="text" className="form-control" placeholder="Your Name" required />
// //           </div>
// //           <div className="mb-3">
// //             <input type="email" className="form-control" placeholder="Email Address" required />
// //           </div>
// //           <div className="mb-3">
// //             <input type="text" className="form-control" placeholder="Phone Number" required />
// //           </div>
// //           <div className="mb-3">
// //             <input type="text" className="form-control" placeholder="Position You're Applying For" required />
// //           </div>
// //           <div className="mb-3">
// //             <textarea className="form-control" rows="4" placeholder="Why do you want to join SAT Academy?" required></textarea>
// //           </div>
// //           <button type="submit" className="btn btn-success">Submit Application</button>
// //         </form>
// //       </section>
// //     </div>
// //   );
// // }

// // export default Career;


// // components/Career.js
// import React from 'react';
// import { courses } from '../dataComponents/courses';
// import { FaDatabase, FaCode } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import './pagesStyle.css';

// const iconMap = {
//   FaDatabase: <FaDatabase />,
//   FaCode: <FaCode />,
//   // Add more mappings as needed
// };

// const Career = () => {
//   return (
//     <div className="career-container">
//       <section className="hero-section">
//         <h1>Join SAT Academy</h1>
//         <p>Empower future tech leaders by becoming a part of our dynamic team!</p>
//       </section>

//       <section className="openings-section">
//         <h2>Current Openings</h2>
//         <div className="openings-grid">
//           {courses.map((course) =>
//             course.roles.map((role, index) => (
//               <motion.div
//                 key={`${course.id}-${index}`}
//                 className="opening-card"
//                 whileHover={{ scale: 1.05 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//               >
//                 <div className="icon">{iconMap[course.icon]}</div>
//                 <h3>{role}</h3>
//                 <p>
//                   We are seeking experienced professionals to train students in {course.title}.
//                 </p>
//                 <button className="apply-button">Apply Now</button>
//               </motion.div>
//             ))
//           )}
//         </div>
//       </section>

//       <section className="life-section">
//         <h2>Life at SAT Academy</h2>
//         <p>
//           At SAT Academy, we foster a collaborative and inclusive environment where innovation thrives.
//         </p>
//         <img src="/images/teamwork.jpg" alt="Team Collaboration" className="team-image" />
//       </section>

//       <section className="application-section">
//         <h2>Apply Now</h2>
//         <form className="application-form">
//           <input type="text" placeholder="Your Name" required />
//           <input type="email" placeholder="Email Address" required />
//           <input type="text" placeholder="Phone Number" required />
//           <input type="text" placeholder="Position You're Applying For" required />
//           <textarea placeholder="Why do you want to join SAT Academy?" required></textarea>
//           <button type="submit">Submit Application</button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default Career;


import React from "react";
import { FaLaptopCode, FaChalkboardTeacher, FaPaintBrush } from "react-icons/fa";
import { motion } from "framer-motion";
import "./pagesStyle.css";

function Career() {
  return (
    <div className="career-page">

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
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Phone Number" required />
          <input type="text" placeholder="Position You're Applying For" required />
          <textarea placeholder="Why do you want to join SAT Academy?" rows="4" required></textarea>
          <button type="submit">Submit Application</button>
        </form>
      </motion.section>

    </div>
  );
}

export default Career;
