import React from "react";
// import "./Courses.css";

function Courses() {
  return (
    <div className="courses-page container py-5">
      <h2 className="text-center mb-4">Our Courses</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Java Development</h5>
              <p className="card-text">
                Learn Java programming, OOPs, JDBC, and frameworks like Spring & Hibernate.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Full Stack Development</h5>
              <p className="card-text">
                Master frontend and backend technologies including React, Node.js, and MongoDB.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">CAD Design</h5>
              <p className="card-text">
                Get hands-on training with AutoCAD, SolidWorks, and mechanical design principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
