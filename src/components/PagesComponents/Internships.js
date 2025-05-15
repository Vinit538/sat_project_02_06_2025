// import React from "react";
// import "./pagesStyle.css";

// function Internships() {
//   return (
//    <div className="internships-page">
//      <div className="container py-5">
//       <h2 className="text-center mb-4">Internship Opportunities</h2>
//       <p className="lead text-center mb-5">
//         Gain hands-on experience by working on real-world projects with expert guidance.
//       </p>
//       <div className="row">
//         <div className="col-md-6 mb-4">
//           <div className="card shadow-sm">
//             <div className="card-body">
//               <h5 className="card-title">Java Development Internship</h5>
//               <p className="card-text">
//                 Build strong backend logic, database interaction, and APIs with Java and Spring Boot.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-6 mb-4">
//           <div className="card shadow-sm">
//             <div className="card-body">
//               <h5 className="card-title">Frontend Development Internship</h5>
//               <p className="card-text">
//                 Create responsive user interfaces using HTML, CSS, JavaScript, and React.js.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//    </div>
//   );
// }

// export default Internships;


import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaDatabase, FaProjectDiagram, FaNetworkWired } from "react-icons/fa";
import "./pagesStyle.css";

function Internships() {
  const internshipTypes = [
    {
      icon: <FaLaptopCode size={32} color="#4a90e2" />,
      title: "Software Development",
      description: "Hands-on backend and frontend development using real-time tools and frameworks like React, Node.js, Java, and Spring Boot.",
    },
    {
      icon: <FaDatabase size={32} color="#7ed957" />,
      title: "Data & Cloud Internships",
      description: "Data analysis, visualization, pipelines, and cloud infrastructure projects using AWS, Azure, Python, Power BI, and SQL.",
    },
    {
      icon: <FaProjectDiagram size={32} color="#f9a825" />,
      title: "Mini & Final Year Projects",
      description: "Tailored academic mini projects and full-scale final year projects in multiple domains with guided mentorship.",
    },
    {
      icon: <FaNetworkWired size={32} color="#ef476f" />,
      title: "Commercial Product Development",
      description: "Intern on real products for startups and businesses—build, test, and deploy applications that go live.",
    },
  ];

  return (
    <div className="internships-page">
      {/* Header */}
      <motion.div
        className="internship-header text-center py-5 px-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="internship-heading">Internship Opportunities</h2>
        <p className="internship-subtext">
          Gain practical experience by working on live projects, academic mini/final year projects, and even commercial-grade software and products.
        </p>
      </motion.div>

      {/* Internship Types */}
      <motion.div
        className="internship-types container py-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="internship-grid">
          {internshipTypes.map((item, index) => (
            <motion.div
              key={index}
              className="internship-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="internship-icon">{item.icon}</div>
              <h4 className="internship-title">{item.title}</h4>
              <p className="internship-desc">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Internships;
