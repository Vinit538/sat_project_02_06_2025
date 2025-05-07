// import React from "react";
// import "./pagesStyle.css";

// function Courses() {
//   return (
//     <div className="courses-page">
//       <div className="container py-5">
//         <h2 className="text-center mb-4">Our Courses</h2>
//         <div className="row">
//           <div className="col-md-4 mb-4">
//             <div className="card shadow-sm h-100">
//               <div className="card-body">
//                 <h5 className="card-title">Java Development</h5>
//                 <p className="card-text">
//                   Learn Java programming, OOPs, JDBC, and frameworks like Spring & Hibernate.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4 mb-4">
//             <div className="card shadow-sm h-100">
//               <div className="card-body">
//                 <h5 className="card-title">Full Stack Development</h5>
//                 <p className="card-text">
//                   Master frontend and backend technologies including React, Node.js, and MongoDB.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4 mb-4">
//             <div className="card shadow-sm h-100">
//               <div className="card-body">
//                 <h5 className="card-title">CAD Design</h5>
//                 <p className="card-text">
//                   Get hands-on training with AutoCAD, SolidWorks, and mechanical design principles.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Courses;


import React from "react";
import courseCards from "../dataComponents/courseCards";
import { Link } from "react-router-dom";
import "./pagesStyle.css"; // Keep any custom styles you already have

function Courses() {
  return (
    <div className="courses-page">
      <div className="courses-page bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Our Courses</h2>
        <div className="row g-4">
          {courseCards.map((course) => (
            <div className="col-md-6 col-lg-4" key={course.id}>
              <div className="card h-100 shadow-lg border-0">
                <img
                  src={course.image}
                  className="card-img-top"
                  alt={course.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold">{course.title}</h5>
                  <ul className="list-unstyled small mb-3">
                    {course.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                  <p className="text-muted mb-2"><strong>Duration:</strong> {course.duration}</p>

                  <div className="mt-auto d-flex justify-content-between gap-2">
                    <Link to={course.courseLink} className="btn btn-primary btn-sm w-100">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Courses;
