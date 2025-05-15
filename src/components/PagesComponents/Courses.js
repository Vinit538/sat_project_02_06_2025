
// // import React from "react";
// // import courseCards from "../dataComponents/courseCards";
// // import { Link } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import "./pagesStyle.css";

// // const fadeInUp = {
// //   hidden: { opacity: 0, y: 30 },
// //   visible: (custom) => ({
// //     opacity: 1,
// //     y: 0,
// //     transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
// //   }),
// // };

// // function Courses() {
// //   return (
// //     <div className="courses-page">
// //       <div className="courses-page bg-light py-5">
// //         <div className="container">
// //           <motion.section
// //             className="courses-hero text-center p-5 text-white"
// //             style={{ backgroundColor: "#007bff" }} // Change to match your theme
// //             initial={{ opacity: 0, y: -50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //           >
// //             <h1 className="mb-3 fw-bold">Explore Industry-Focused Courses</h1>
// //             <p className="lead">
// //               Learn in-demand skills in Data, Full Stack, CAD, Cloud, and more with expert-led programs!
// //             </p>
// //             {/* <button className="btn btn-light mt-3 px-4 py-2">View All Programs</button> */}
// //           </motion.section>

// //           <div className="row g-4">
// //             {courseCards.map((course, index) => (
// //               <motion.div
// //                 className="col-12 col-md-6 col-lg-4"
// //                 key={course.id}
// //                 custom={index}
// //                 initial="hidden"
// //                 animate="visible"
// //                 variants={fadeInUp}
// //               >
// //                 <motion.div
// //                   whileHover={{ scale: 1.03 }}
// //                   transition={{ type: "spring", stiffness: 300 }}
// //                   className="card h-100 shadow border-0 course-card"
// //                 >
// //                   <img
// //                     src={course.image}
// //                     className="card-img-top"
// //                     alt={course.title}
// //                     style={{ height: "220px", objectFit: "cover" }}
// //                   />
// //                   <div className="card-body d-flex flex-column">
// //                     <h5 className="card-title fw-semibold">{course.title}</h5>
// //                     <ul className="list-unstyled small mb-3">
// //                       {course.highlights.slice(0, 3).map((item, idx) => (
// //                         <li key={idx}>• {item}</li>
// //                       ))}
// //                     </ul>
// //                     <p className="text-muted mb-2">
// //                       <strong>Duration:</strong> {course.duration}
// //                     </p>

// //                     <div className="mt-auto d-flex justify-content-between gap-2">
// //                       <Link
// //                         to={course.courseLink}
// //                         className="btn btn-primary btn-sm w-100"
// //                       >
// //                         View Details
// //                       </Link>
// //                       <a
// //                         href={course.brochureLink}
// //                         className="btn btn-outline-secondary btn-sm w-100"
// //                         download
// //                       >
// //                         Brochure
// //                       </a>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Courses;

// import React from "react";
// import courseCards from "../dataComponents/courseCards";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import "./pagesStyle.css";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (custom) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
//   }),
// };

// function Courses() {
//   return (
//     <div className="courses-page bg-light">
//       <motion.section
//         className="courses-hero text-center p-4 p-md-5 text-white"
//         style={{ backgroundColor: "#007bff" }}
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h1 className="mb-3 fw-bold fs-3 fs-md-1">Explore Industry-Focused Courses</h1>
//         <p className="lead mb-0">
//           Learn in-demand skills in Data, Full Stack, CAD, Cloud, and more with expert-led programs!
//         </p>
//       </motion.section>

//       <div className="container py-4 px-3 px-md-5">
//         <div className="row g-4">
//           {courseCards.map((course, index) => (
//             <motion.div
//               className="col-12 col-sm-12 col-md-6 col-lg-4"
//               key={course.id}
//               custom={index}
//               initial="hidden"
//               animate="visible"
//               variants={fadeInUp}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 className="card h-100 shadow-sm border-0 course-card"
//               >
//                 <img
//                   src={course.image}
//                   className="card-img-top img-fluid"
//                   alt={course.title}
//                   style={{ height: "220px", objectFit: "cover" }}
//                 />
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="card-title fw-semibold">{course.title}</h5>
//                   <ul className="list-unstyled small mb-3">
//                     {course.highlights.slice(0, 3).map((item, idx) => (
//                       <li key={idx}>• {item}</li>
//                     ))}
//                   </ul>
//                   <p className="text-muted mb-2">
//                     <strong>Duration:</strong> {course.duration}
//                   </p>

//                   <div className="mt-auto d-flex flex-column flex-md-row gap-2">
//                     <Link
//                       to={course.courseLink}
//                       className="btn btn-primary btn-sm w-100"
//                     >
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
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
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
    <div className="courses-page bg-light">
      <motion.section
        className="courses-hero text-center p-4 p-md-5 text-white"
        style={{ backgroundColor: "#007bff" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mb-3 fw-bold fs-3 fs-md-1">Explore Industry-Focused Courses</h1>
        <p className="lead mb-0">
          Learn in-demand skills in Data, Full Stack, CAD, Cloud, and more with expert-led programs!
        </p>
      </motion.section>

      <div className="container-fluid px-2 px-sm-4 py-4">
        <div className="row gy-4">
          {courseCards.map((course, index) => (
            <motion.div
              className="col-12 col-sm-12 col-md-6 col-lg-4"
              key={course.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="card h-100 shadow-sm border-0 course-card"
                style={{ minHeight: "100%" }}
              >
                <img
                  src={course.image}
                  className="card-img-top img-fluid"
                  alt={course.title}
                  style={{
                    height: "250px",
                    objectFit: "cover",
                    borderTopLeftRadius: "0.375rem",
                    borderTopRightRadius: "0.375rem",
                  }}
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

                  <div className="mt-auto d-flex flex-column flex-md-row gap-2">
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
  );
}

export default Courses;
