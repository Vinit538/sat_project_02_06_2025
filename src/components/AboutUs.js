import React from "react";
// import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="about-hero text-center p-5 bg-light">
        <h1 className="mb-3">About SAT Academy</h1>
        <p className="lead">
          Empowering the next generation of developers, designers, and tech innovators.
        </p>
      </section>

      {/* Our Mission */}
      <section className="about-mission p-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-4">Our Mission</h2>
          <p>
            At SAT Academy, our mission is to bridge the gap between academic learning and industry expectations. We offer training programs in Java, Python, CAD, Web Development, Cloud, DevOps, and more—tailored to equip students with job-ready skills. Our hands-on training, real-time projects, and career support ensure our students are ready to thrive in the competitive tech world.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story p-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Our Story</h2>
          <p>
            Founded by industry veterans, SAT Academy started with a simple idea—to make quality tech education accessible to all. Since our inception, we've helped hundreds of students build successful careers by delivering practical, mentor-led training and fostering a growth mindset.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-values p-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-4">Our Core Values</h2>
          <ul className="list-unstyled text-center">
            <li>💡 Innovation in Learning</li>
            <li>🎯 Student-Centered Approach</li>
            <li>🤝 Integrity and Transparency</li>
            <li>🌐 Industry Collaboration</li>
          </ul>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="about-team p-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Meet Our Team</h2>
          <p className="text-center">
            A dedicated team of instructors, developers, and career mentors working together to fuel student success.
          </p>
          {/* You can add team member cards here */}
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
