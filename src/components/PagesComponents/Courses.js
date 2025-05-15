// import React from "react";
// import courseCards from "../dataComponents/courseCards";
// import { Link } from "react-router-dom";
// import "./pagesStyle.css"; // Keep any custom styles you already have

// function Courses() {
//   return (
//     <div className="courses-page">
//       <div className="courses-page bg-light py-5">
//       <div className="container">
//         <h2 className="text-center mb-5 fw-bold">Our Courses</h2>
//         <div className="row g-4">
//           {courseCards.map((course) => (
//             <div className="col-md-6 col-lg-4" key={course.id}>
//               <div className="card h-100 shadow-lg border-0">
//                 <img
//                   src={course.image}
//                   className="card-img-top"
//                   alt={course.title}
//                   style={{ height: "200px", objectFit: "cover" }}
//                 />
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="card-title fw-semibold">{course.title}</h5>
//                   <ul className="list-unstyled small mb-3">
//                     {course.highlights.slice(0, 3).map((item, idx) => (
//                       <li key={idx}>• {item}</li>
//                     ))}
//                   </ul>
//                   <p className="text-muted mb-2"><strong>Duration:</strong> {course.duration}</p>

//                   <div className="mt-auto d-flex justify-content-between gap-2">
//                     <Link to={course.courseLink} className="btn btn-primary btn-sm w-100">
//                       View Details
//                     </Link>
//                     <a
//                       href={course.brochureLink}
//                       className="btn btn-outline-secondary btn-sm w-100"
//                       download
//                     >
//                       Brochure
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Courses;


import React from "react";
import courseCards from "../dataComponents/courseCards";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
      <div className="courses-page bg-light py-5">
      <div className="container">
        <motion.h2
          className="text-center mb-5 fw-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Courses
        </motion.h2>

        <div className="row g-4">
          {courseCards.map((course, index) => (
            <motion.div
              className="col-12 col-md-6 col-lg-4"
              key={course.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="card h-100 shadow border-0 course-card"
              >
                <img
                  src={course.image}
                  className="card-img-top"
                  alt={course.title}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold">{course.title}</h5>
                  <ul className="list-unstyled small mb-3">
                    {course.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                  <p className="text-muted mb-2">
                    <strong>Duration:</strong> {course.duration}
                  </p>

                  <div className="mt-auto d-flex justify-content-between gap-2">
                    <Link
                      to={course.courseLink}
                      className="btn btn-primary btn-sm w-100"
                    >
                      View Details
                    </Link>
                    <a
                      href={course.brochureLink}
                      className="btn btn-outline-secondary btn-sm w-100"
                      download
                    >
                      Brochure
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
}

export default Courses;
