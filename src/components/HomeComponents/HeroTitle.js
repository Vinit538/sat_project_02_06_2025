import React from "react";
import { motion } from "framer-motion";
import "../Home.css";

function HeroTitle() {
  return (
    <motion.div
      className="col-md-6 intro_Div"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="display-3 fw-bold introDivHeading">Empower Your Future with <br /> <span className='introDivCompanyText'>SAT Academy</span> </h1>
      <p className="lead mt-3 introDivText">
        Master in-demand skills in Data Engineering, Fullstack Development, AI, CAD, SAP, Mainframes, Digital Marketing, and IT Service Desk.
        Our job-ready programs include hands-on training, resume prep, mock interviews, and full placement support.
      </p>
    </motion.div>
  );
}

export default HeroTitle;
