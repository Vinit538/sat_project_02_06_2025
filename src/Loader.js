// // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // import "./Loader.css";
// // // // // // // import logo from "./logo512.png"; // 🔄 Replace with the Cryzeo-style logo (or your own)

// // // // // // // const Loader = () => {
// // // // // // //   const [fadeOut, setFadeOut] = useState(false);

// // // // // // //   useEffect(() => {
// // // // // // //     const timer = setTimeout(() => setFadeOut(true), 1800); // Same timing as Cryzeo
// // // // // // //     return () => clearTimeout(timer);
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <div className={`loader-wrapper ${fadeOut ? "fade-out" : ""}`}>
// // // // // // //       <img src={logo} alt="Loading" className="loader-logo" />
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Loader;


// // // // // // import React, { useEffect, useState } from 'react';
// // // // // // import './Loader.css';
// // // // // // import logo from "./logo512.png";

// // // // // // const Loader = () => {
// // // // // //   const [fadeOut, setFadeOut] = useState(false);

// // // // // //   useEffect(() => {
// // // // // //     const timer = setTimeout(() => setFadeOut(true), 3000); // Duration before fade-out
// // // // // //     return () => clearTimeout(timer);
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
// // // // // //       <div className="circles">
// // // // // //         <div className="circle circle1"></div>
// // // // // //         <div className="circle circle2"></div>
// // // // // //         <div className="circle circle3"></div>
// // // // // //       </div>
// // // // // //       <img src={logo} alt="Logo" className="loader-logo" />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Loader;

// // // // // import React, { useEffect, useState } from 'react';
// // // // // import './Loader.css';
// // // // // import logo from "./sat_logo_tb6.png";
// // // // // const Loader = () => {
// // // // //   const [fadeOut, setFadeOut] = useState(false);

// // // // //   useEffect(() => {
// // // // //     const timer = setTimeout(() => setFadeOut(true), 3000); // Duration before fade-out
// // // // //     return () => clearTimeout(timer);
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
// // // // //       <div className="circles">
// // // // //         <div className="circle circle1"></div>
// // // // //         <div className="circle circle2"></div>
// // // // //         <div className="circle circle3"></div>
// // // // //       </div>
// // // // //       <img src={logo} alt="Logo" className="loader-logo" />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Loader;


// // // // import React, { useEffect, useState } from 'react';
// // // // import './Loader.css';
// // // // import logo from "./logo512.png";
// // // // const Loader = () => {
// // // //   const [fadeOut, setFadeOut] = useState(false);

// // // //   useEffect(() => {
// // // //     const timer = setTimeout(() => setFadeOut(true), 3000); // Duration before fade-out
// // // //     return () => clearTimeout(timer);
// // // //   }, []);

// // // //   return (
// // // //     <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
// // // //       <div className="circles">
// // // //         <div className="circle circle1"></div>
// // // //         <div className="circle circle2"></div>
// // // //         <div className="circle circle3"></div>
// // // //       </div>
// // // //       <img src={logo} alt="Logo" className="loader-logo" />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Loader;

// // // import React, { useEffect, useState } from 'react';
// // // import './Loader.css';
// // // import logo from "./sat_logo_tb6.png";
// // // const Loader = () => {
// // //     const [fadeOut, setFadeOut] = useState(false);

// // //     useEffect(() => {
// // //         const timer = setTimeout(() => setFadeOut(true), 3000); // Duration before fade-out
// // //         return () => clearTimeout(timer);
// // //     }, []);

// // //     return (
// // //         <div className="loader-container">
// // //             <div className="background-animation"></div>
// // //             <div className="circle-static"></div>
// // //             <img src={logo} alt="Logo" className="loader-logo" />
// // //             <h1 className="loader-text">Welcome to Cryzeo</h1>
// // //         </div>
// // //     );
// // // };

// // // export default Loader;

// // import React, { useEffect, useState } from 'react';
// // import './Loader.css';
// // import logo from './logo512.png'; // your logo path
// // import { useNavigate } from 'react-router-dom';

// // const Loader = () => {
// //   const [fadeOut, setFadeOut] = useState(false);
// //   //const navigate = useNavigate();

// //   useEffect(() => {
// //     const fadeTimer = setTimeout(() => setFadeOut(true), 4000); // fade-out starts
// //     // const navTimer = setTimeout(() => navigate('/home'), 5000); // redirect after animation
// //     return () => {
// //       clearTimeout(fadeTimer);
// //     //   clearTimeout(navTimer);
// //     };
// //   } );

// //   return (
// //     <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
// //       <div className="background-animation"></div>
// //       <div className="circles-wrapper">
// //         <div className="circle circle1"></div>
// //         <div className="circle circle2"></div>
// //         <div className="circle circle3"></div>
// //       </div>
// //       <img src={logo} alt="Logo" className="loader-logo" />
// //       <h1 className="loader-text">Welcome to Cryzeo</h1>
// //     </div>
// //   );
// // };

// // export default Loader;

// import React, { useEffect, useState } from 'react';
// import './Loader.css';
// import logo from './logo512.png'; // Replace with your logo path
// import { useNavigate } from 'react-router-dom';

// const Loader = () => {
//   const [fadeOut, setFadeOut] = useState(false);
  

//   useEffect(() => {
//     const fadeTimer = setTimeout(() => setFadeOut(true), 4000);
  
//     return () => {
//       clearTimeout(fadeTimer);
  
//     };
//   });

//   return (
//     <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
//       <div className="background-stars"></div>
//       <div className="circles-wrapper">
//         <div className="circle circle1"></div>
//         <div className="circle circle2"></div>
//         <div className="circle circle3"></div>
//       </div>
//       <img src={logo} alt="Logo" className="loader-logo" />
//       <h1 className="loader-text">Welcome to Cryzeo</h1>
//     </div>
//   );
// };

// export default Loader;

import React, { useEffect, useState } from 'react';
import './Loader.css';
import logo from './logo512.png'; // Replace with your logo path
import { useNavigate } from 'react-router-dom';

const Loader = () => {
  const [fadeOut, setFadeOut] = useState(false);
  

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 4000); // Start fade-out after 4s
    return () => {
      clearTimeout(fadeTimer);

    };
  });

  return (
    <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
      <div className="background-stars"></div>
      <div className="circles-wrapper">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </div>
      <img src={logo} alt="Logo" className="loader-logo" />
      <h1 className="loader-text">Welcome to Cryzeo</h1>
    </div>
  );
};

export default Loader;
