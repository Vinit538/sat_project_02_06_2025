// // import React from "react";
// // import '../Home.css'

// // function HeroTitle(){
// //     return(
// //         <div className="col-md-6 int<ro_Div">
// //                     <h1 className="display-3 fw-bold introDivHeading">Empower Your Future withbr/> <span className='introDivCompanyText'>SAT Academy</span> </h1>
// //                     <p className="lead mt-3 introDivText">Launch your career in tech! Learn Full Stack, DevOps, and CAD from real-world experts and get placement-ready with personalized support.</p>
// //         </div>
// //     )
// // }

// // export default HeroTitle;

// // import React from "react";
// // import { motion } from "framer-motion";
// // import "../Home.css";

// // function HeroTitle() {
// //   return (
// //     <motion.div
// //       className="col-md-6 intro_Div"
// //       initial={{ opacity: 0, y: 40 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 1 }}
// //     >
// //       <h1 className="display-3 fw-bold introDivHeading">
// //         Build Your Career with<br />
// //         <span className="introDivCompanyText">SAT Academy</span>
// //       </h1>
// //       <p className="lead mt-3 introDivText">
// //         Learn job-ready skills in Fullstack, Data Engineering, AI, CAD,
// //         SAP, and more – guided by real-world experts with hands-on projects
// //         and personalized support.
// //       </p>
// //     </motion.div>
// //   );
// // }

// // export default HeroTitle;

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
      {/* <h1 className="display-3 fw-bold introDivHeading">
        Shape Tomorrow’s Tech<br />

        <span className="introDivCompanyText">Start Today at SAT Academy</span>
      </h1> */}
    <h1 className="display-3 fw-bold introDivHeading">Empower Your Future with <br/> <span className='introDivCompanyText'>SAT Academy</span> </h1>

      <p className="lead mt-3 introDivText">
        Master real-world skills in Data, Development, AI, CAD, and more. Train with experts,
        build hands-on projects, and step confidently into your tech career—with full placement support.
      </p>
    </motion.div>
  );
}

export default HeroTitle;
