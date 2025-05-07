import React from "react";
// import "./Career.css";

function Career() {
  return (
    <div className="career-page container py-5">
      {/* Hero Section */}
      <section className="text-center mb-5">
        <h1 className="display-5">Join SAT Academy</h1>
        <p className="lead">Be a part of our mission to empower future tech leaders!</p>
      </section>

      {/* Open Positions */}
      <section className="open-positions mb-5">
        <h2 className="mb-4">Current Openings</h2>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Full Stack Trainer</h5>
            <p className="card-text">We're looking for a passionate full stack developer with a flair for teaching. Experience with React, Node.js, and Java is preferred.</p>
            <p><strong>Location:</strong> Bangalore (On-site)</p>
            <a href="#apply" className="btn btn-primary">Apply Now</a>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">CAD Design Trainer</h5>
            <p className="card-text">Help aspiring designers master AutoCAD and SolidWorks. Prior teaching experience is a plus.</p>
            <p><strong>Location:</strong> Remote</p>
            <a href="#apply" className="btn btn-primary">Apply Now</a>
          </div>
        </div>
      </section>

      {/* Life at SAT */}
      <section className="life-at-sat text-center mb-5">
        <h2 className="mb-4">Life at SAT Academy</h2>
        <p>We foster a collaborative, inclusive, and innovative work environment where every team member is valued.</p>
        <img src="/images/teamwork.jpg" alt="Team Collaboration" className="img-fluid rounded mt-3" />
      </section>

      {/* Application Form */}
      <section id="apply" className="application-form bg-light p-4 rounded">
        <h3 className="mb-3">Apply Now</h3>
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email Address" required />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Phone Number" required />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Position You're Applying For" required />
          </div>
          <div className="mb-3">
            <textarea className="form-control" rows="4" placeholder="Why do you want to join SAT Academy?" required></textarea>
          </div>
          <button type="submit" className="btn btn-success">Submit Application</button>
        </form>
      </section>
    </div>
  );
}

export default Career;
