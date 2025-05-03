import React from "react";
// import "./Internships.css";

function Internships() {
  return (
    <div className="internships-page container py-5">
      <h2 className="text-center mb-4">Internship Opportunities</h2>
      <p className="lead text-center mb-5">
        Gain hands-on experience by working on real-world projects with expert guidance.
      </p>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Java Development Internship</h5>
              <p className="card-text">
                Build strong backend logic, database interaction, and APIs with Java and Spring Boot.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Frontend Development Internship</h5>
              <p className="card-text">
                Create responsive user interfaces using HTML, CSS, JavaScript, and React.js.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Internships;
