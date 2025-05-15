// import React from "react";
// // import "./ContactUs.css";

// function ContactUs() {
//   return (
//     <div className="contact-us">
//       {/* Hero Section */}
//       <section className="contact-hero text-center p-5 bg-light">
//         <h1 className="mb-3">Contact SAT Academy</h1>
//         <p className="lead">
//           We're here to help! Reach out to us for any queries or assistance.
//         </p>
//       </section>

//       {/* Contact Info Section */}
//       <section className="contact-info p-5 bg-white">
//         <div className="row text-center">
//           <div className="col-md-4">
//             <h5>📍 Address</h5>
//             <p>#101, SAT Tower, MG Road, Bengaluru, India</p>
//           </div>
//           <div className="col-md-4">
//             <h5>📞 Phone</h5>
//             <p>+91 98765 43210</p>
//           </div>
//           <div className="col-md-4">
//             <h5>📧 Email</h5>
//             <p>info@satacademy.com</p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="contact-form bg-light p-5">
//         <h2 className="text-center mb-4">Send Us a Message</h2>
//         <form className="w-50 mx-auto">
//           <div className="mb-3">
//             <input type="text" className="form-control" placeholder="Your Name" required />
//           </div>
//           <div className="mb-3">
//             <input type="email" className="form-control" placeholder="Your Email" required />
//           </div>
//           <div className="mb-3">
//             <input type="tel" className="form-control" placeholder="Your Phone Number" required />
//           </div>
//           <div className="mb-3">
//             <textarea
//               className="form-control"
//               rows="4"
//               placeholder="Your Message"
//               required
//             ></textarea>
//           </div>
//           <button className="btn btn-primary w-100" type="submit">
//             Submit
//           </button>
//         </form>
//       </section>

//       {/* Google Map Embed */}
//       <section className="map-section p-4">
//         <div className="text-center">
//           <h4>Find Us Here</h4>
//         </div>
//         <div className="map-responsive mt-3">
//           <iframe
//             title="SAT Academy Location"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.7076536900354!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE4LjQiTiA3N8KwMzUnMzAuNSJF!5e0!3m2!1sen!2sin!4v161234567890"
//             width="100%"
//             height="400"
//             frameBorder="0"
//             allowFullScreen=""
//             aria-hidden="false"
//             tabIndex="0"
//           ></iframe>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default ContactUs;


import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./pagesStyle.css";

function ContactUs() {
  return (
    <div className="contact-us">
      {/* Hero Section */}
      <motion.section
        className="contact-hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Contact SAT Academy</h1>
        <p>We're here to help! Reach out to us for any queries or assistance.</p>
      </motion.section>

      {/* Contact Info Section */}
      <motion.section
        className="contact-info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="info-grid">
          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <h5>Address</h5>
            <p>#101, SAT Tower, MG Road, Bengaluru, India</p>
          </div>
          <div className="info-card">
            <FaPhoneAlt className="info-icon" />
            <h5>Phone</h5>
            <p>+91 98765 43210</p>
          </div>
          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <h5>Email</h5>
            <p>info@satacademy.com</p>
          </div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        className="contact-form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone Number" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </motion.section>

      {/* Google Map Embed */}
      <motion.section
        className="map-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h4>Find Us Here</h4>
        <div className="map-responsive">
          <iframe
            title="SAT Academy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.7076536900354!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE4LjQiTiA3N8KwMzUnMzAuNSJF!5e0!3m2!1sen!2sin!4v161234567890"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </motion.section>
    </div>
  );
}

export default ContactUs;
