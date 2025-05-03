import React from "react";
// import "./HireFromUs.css";

function HireTalent() {
  return (
    <div className="hire-from-us">
      {/* Hero Section */}
      <section className="hire-hero text-center p-5 bg-light">
        <h1 className="mb-3">Looking to Hire Job-Ready Talent?</h1>
        <p className="lead">
          Partner with us to access a pool of pre-trained, industry-ready
          professionals in Java, Full Stack, CAD, and more!
        </p>
        <button className="btn btn-primary mt-3">Get in Touch</button>
      </section>

      {/* Benefits Section */}
      <section className="hire-benefits p-5 bg-white">
        <h2 className="text-center mb-4">Why Companies Choose Our Talent</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <h5>✅ Job-Ready Skills</h5>
            <p>Trained in real-world projects and latest technologies.</p>
          </div>
          <div className="col-md-4">
            <h5>✅ Soft Skills Included</h5>
            <p>Professional communication and teamwork abilities.</p>
          </div>
          <div className="col-md-4">
            <h5>✅ No Hiring Fee</h5>
            <p>Direct access to our trained talent pool—no commissions.</p>
          </div>
        </div>
      </section>

      {/* Talent Pool */}
      <section className="talent-pool bg-light p-5">
        <h2 className="text-center mb-4">Available Talent Categories</h2>
        <div className="d-flex justify-content-around flex-wrap">
          <span className="badge bg-success m-2 p-2">Java Developers</span>
          <span className="badge bg-info m-2 p-2">Full Stack Engineers</span>
          <span className="badge bg-warning m-2 p-2">CAD Designers</span>
          <span className="badge bg-primary m-2 p-2">Data Analysts</span>
          <span className="badge bg-danger m-2 p-2">Cloud/DevOps Engineers</span>
        </div>
      </section>

      {/* Contact Form */}
      <section className="hire-contact p-5 bg-white">
        <h2 className="text-center mb-4">Ready to Hire?</h2>
        <form className="w-50 mx-auto">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Your Company Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Company Name"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Your Requirements (e.g., No. of candidates, tech stack, etc.)"
            ></textarea>
          </div>
          <button className="btn btn-primary w-100" type="submit">
            Submit Inquiry
          </button>
        </form>
      </section>

      {/* Company Logos */}
      <section className="company-logos bg-light p-4 text-center">
        <p className="text-muted">Trusted by hiring partners across industries</p>
        <div className="d-flex justify-content-center gap-4 flex-wrap">
          <img src="/images/partner1.png" alt="Partner 1" height="40" />
          <img src="/images/partner2.png" alt="Partner 2" height="40" />
          <img src="/images/partner3.png" alt="Partner 3" height="40" />
        </div>
      </section>
    </div>
  );
}

export default HireTalent;
