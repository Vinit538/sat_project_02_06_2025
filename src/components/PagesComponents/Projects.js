// import React from "react";
// import "./pagesStyle.css";

// function Projects() {
//   return (
//     <div className="projects-page">
//       <div className="container py-5">
//         <h2 className="text-center mb-4">Student Projects</h2>
//         <div className="row">
//           <div className="col-md-6 mb-4">
//             <div className="card shadow-sm">
//               <div className="card-body">
//                 <h5 className="card-title">Online Banking System</h5>
//                 <p className="card-text">
//                   A secure system for managing customer accounts, transactions, and CIBIL calculations.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6 mb-4">
//             <div className="card shadow-sm">
//               <div className="card-body">
//                 <h5 className="card-title">E-Commerce Platform</h5>
//                 <p className="card-text">
//                   A full-stack application enabling shopping, payments, and order tracking with React and Node.js.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Projects;


import React from "react";
import { motion } from "framer-motion";
import "./pagesStyle.css";

function Projects() {
  return (
    <div className="projects-page">
      <motion.div
        className="intro-section text-center py-5 px-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="main-heading">Student & Commercial Projects</h2>
        <p className="intro-text">
          We develop real-time applications and commercial-grade products tailored for businesses. Whether it's a final year academic project or a startup idea, we've got you covered with innovative and scalable solutions.
        </p>
      </motion.div>

      <motion.div
        className="project-cards container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="projects-grid">
          <div className="project-card">
            <h5 className="project-title">Online Banking System</h5>
            <p className="project-desc">
              A secure platform for managing customer accounts, transactions, and automated CIBIL score analysis. Ideal for fintech startups or student banking projects.
            </p>
          </div>
          <div className="project-card">
            <h5 className="project-title">E-Commerce Platform</h5>
            <p className="project-desc">
              A full-stack e-commerce solution with shopping cart, payment gateway, and order tracking. Built using React and Node.js.
            </p>
          </div>
          <div className="project-card">
            <h5 className="project-title">Hospital Management System</h5>
            <p className="project-desc">
              Real-time app for appointment booking, patient tracking, and doctor dashboards. Suitable for both academic use and healthcare businesses.
            </p>
          </div>
          <div className="project-card">
            <h5 className="project-title">Inventory & Billing Software</h5>
            <p className="project-desc">
              Desktop/web software for managing stock, sales, and invoices. Perfect for local businesses and startups looking for scalable solutions.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
