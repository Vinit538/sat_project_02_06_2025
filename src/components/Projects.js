import React from "react";
// import "./Projects.css";

function Projects() {
  return (
    <div className="projects-page container py-5">
      <h2 className="text-center mb-4">Student Projects</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Online Banking System</h5>
              <p className="card-text">
                A secure system for managing customer accounts, transactions, and CIBIL calculations.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">E-Commerce Platform</h5>
              <p className="card-text">
                A full-stack application enabling shopping, payments, and order tracking with React and Node.js.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
