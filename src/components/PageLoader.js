// // // // // // // // // // // // // // src/components/PageLoader.js
// // // // // // // // // // // // // import React from 'react';
// // // // // // // // // // // // // import './PageLoader.css';

// // // // // // // // // // // // // const PageLoader = () => {
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className="page-loader">
// // // // // // // // // // // // //       {/* <img src="/sat_logo3.png" alt="Logo" className="navlogo" />
// // // // // // // // // // // // //       <h1></h1> */}
// // // // // // // // // // // // //       <h1 className="loader-logo">Sat Academy</h1>

// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default PageLoader;


// // // // // // // // // // // // // src/components/PageLoader.js
// // // // // // // // // // // // import React from 'react';
// // // // // // // // // // // // import './PageLoader.css';

// // // // // // // // // // // // const PageLoader = () => {
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="page-loader">
// // // // // // // // // // // //       <svg viewBox="0 0 500 100" className="svg-text">
// // // // // // // // // // // //         <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
// // // // // // // // // // // //           Sat Academy
// // // // // // // // // // // //         </text>
// // // // // // // // // // // //       </svg>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default PageLoader;


// // // // // // // // // // // // src/components/PageLoader.js
// // // // // // // // // // // import React from 'react';
// // // // // // // // // // // import './PageLoader.css';

// // // // // // // // // // // const PageLoader = () => {
// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="page-loader">
// // // // // // // // // // //       <svg viewBox="0 0 600 120" className="animated-text">
// // // // // // // // // // //         <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
// // // // // // // // // // //           Sat Academy
// // // // // // // // // // //         </text>
// // // // // // // // // // //       </svg>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default PageLoader;


// // // // // // // // // // // src/components/PageLoader.js
// // // // // // // // // // import React from 'react';
// // // // // // // // // // import './PageLoader.css';

// // // // // // // // // // const PageLoader = () => {
// // // // // // // // // //   const text = "Sat Academy".split(""); // Split into characters

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="page-loader">
// // // // // // // // // //       <svg viewBox="0 0 800 120" className="animated-text" preserveAspectRatio="xMidYMid meet">
// // // // // // // // // //         {text.map((char, index) => (
// // // // // // // // // //           <text
// // // // // // // // // //             key={index}
// // // // // // // // // //             x={60 + index * 60} // position each letter with spacing
// // // // // // // // // //             y="50%"
// // // // // // // // // //             dominantBaseline="middle"
// // // // // // // // // //             textAnchor="middle"
// // // // // // // // // //             className="letter"
// // // // // // // // // //             style={{ animationDelay: `${index * 0.2}s` }}
// // // // // // // // // //           >
// // // // // // // // // //             {char}
// // // // // // // // // //           </text>
// // // // // // // // // //         ))}
// // // // // // // // // //       </svg>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default PageLoader;

// // // // // // // // // // src/components/PageLoader.js
// // // // // // // // // import React from 'react';
// // // // // // // // // import './PageLoader.css';

// // // // // // // // // const PageLoader = () => {
// // // // // // // // //   const letters = "Sat Academy".split("");

// // // // // // // // //   return (
// // // // // // // // //     <div className="page-loader">
// // // // // // // // //       <svg
// // // // // // // // //         viewBox="0 0 1000 200"
// // // // // // // // //         className="svg-loader"
// // // // // // // // //         xmlns="http://www.w3.org/2000/svg"
// // // // // // // // //         preserveAspectRatio="xMidYMid meet"
// // // // // // // // //       >
// // // // // // // // //         {letters.map((char, i) => (
// // // // // // // // //           <text
// // // // // // // // //             key={i}
// // // // // // // // //             x={80 + i * 70}
// // // // // // // // //             y="50%"
// // // // // // // // //             className="svg-letter"
// // // // // // // // //             style={{
// // // // // // // // //               animationDelay: `${i * 0.15}s`,
// // // // // // // // //             }}
// // // // // // // // //           >
// // // // // // // // //             {char}
// // // // // // // // //           </text>
// // // // // // // // //         ))}
// // // // // // // // //       </svg>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default PageLoader;


// // // // // // // // // src/components/PageLoader.js
// // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // // import './PageLoader.css';

// // // // // // // // const PageLoader = () => {
// // // // // // // //   const [fadeOut, setFadeOut] = useState(false);
// // // // // // // //   const navigate = useNavigate();

// // // // // // // //   useEffect(() => {
// // // // // // // //     const timer1 = setTimeout(() => setFadeOut(true), 3000); // Start fade out
// // // // // // // //     const timer2 = setTimeout(() => navigate('/'), 4000);    // Navigate after fade

// // // // // // // //     return () => {
// // // // // // // //       clearTimeout(timer1);
// // // // // // // //       clearTimeout(timer2);
// // // // // // // //     };
// // // // // // // //   }, [navigate]);

// // // // // // // //   const letters = "Sat Academy".split("");

// // // // // // // //   return (
// // // // // // // //     <div className={`page-loader ${fadeOut ? 'fade-out' : ''}`}>
// // // // // // // //       <svg
// // // // // // // //         viewBox="0 0 1000 200"
// // // // // // // //         className="svg-loader"
// // // // // // // //         xmlns="http://www.w3.org/2000/svg"
// // // // // // // //         preserveAspectRatio="xMidYMid meet"
// // // // // // // //       >
// // // // // // // //         {letters.map((char, i) => (
// // // // // // // //           <text
// // // // // // // //             key={i}
// // // // // // // //             x={80 + i * 70}
// // // // // // // //             y="50%"
// // // // // // // //             className="svg-letter"
// // // // // // // //             style={{ animationDelay: `${i * 0.15}s` }}
// // // // // // // //           >
// // // // // // // //             {char}
// // // // // // // //           </text>
// // // // // // // //         ))}
// // // // // // // //       </svg>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default PageLoader;


// // // // // // // // src/components/PageLoader.js
// // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // import './PageLoader.css';

// // // // // // // const PageLoader = () => {
// // // // // // //   const [fadeOut, setFadeOut] = useState(false);
// // // // // // //   const navigate = useNavigate();

// // // // // // //   useEffect(() => {
// // // // // // //     const timer1 = setTimeout(() => setFadeOut(true), 3000);
// // // // // // //     const timer2 = setTimeout(() => navigate('/'), 4000);

// // // // // // //     return () => {
// // // // // // //       clearTimeout(timer1);
// // // // // // //       clearTimeout(timer2);
// // // // // // //     };
// // // // // // //   }, [navigate]);

// // // // // // //   const letters = 'Academy'.split('');

// // // // // // //   return (
// // // // // // //     <div className={`page-loader-logo ${fadeOut ? 'fade-out' : ''}`}>
// // // // // // //       <div className="logo-wrapper">
// // // // // // //         <img src="/sat_logo3.png" alt="SAT Logo" className="sat-logo" />
// // // // // // //         <svg viewBox="0 0 800 200" className="academy-svg">
// // // // // // //           {letters.map((char, i) => (
// // // // // // //             <text
// // // // // // //               key={i}
// // // // // // //               x={100 + i * 80}
// // // // // // //               y="50%"
// // // // // // //               dominantBaseline="middle"
// // // // // // //               textAnchor="middle"
// // // // // // //               className="academy-letter"
// // // // // // //               style={{ animationDelay: `${i * 0.15}s` }}
// // // // // // //             >
// // // // // // //               {char}
// // // // // // //             </text>
// // // // // // //           ))}
// // // // // // //         </svg>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default PageLoader;

// // // // // // import React, { useEffect, useState } from 'react';
// // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // import './PageLoader.css';

// // // // // // const PageLoader = () => {
// // // // // //   const [fadeOut, setFadeOut] = useState(false);
// // // // // //   const navigate = useNavigate();

// // // // // //   useEffect(() => {
// // // // // //     const timer1 = setTimeout(() => setFadeOut(true), 3500);
// // // // // //     const timer2 = setTimeout(() => navigate('/'), 4500);

// // // // // //     return () => {
// // // // // //       clearTimeout(timer1);
// // // // // //       clearTimeout(timer2);
// // // // // //     };
// // // // // //   }, [navigate]);

// // // // // //   return (
// // // // // //     <div className={`handwriting-loader ${fadeOut ? 'fade-out' : ''}`}>
// // // // // //       <svg
// // // // // //         viewBox="0 0 600 200"
// // // // // //         className="sat-svg"
// // // // // //         xmlns="http://www.w3.org/2000/svg"
// // // // // //       >
// // // // // //         <path className="path letter-s" d="M120,80 C100,60 100,40 120,40 C140,40 140,60 120,70 C100,80 100,100 120,100 C140,100 140,80 120,80" />
// // // // // //         <path className="path letter-a" d="M200,120 L220,60 L240,120 M210,95 L230,95" />
// // // // // //         <path className="path letter-t" d="M280,60 L320,60 M300,60 L300,120" />
// // // // // //       </svg>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default PageLoader;



// // // // // import React from 'react';
// // // // // import './PageLoader.css';

// // // // // const PageLoader = () => {
// // // // //   return (
// // // // //     <div className="page-loader">
// // // // //       <svg viewBox="0 0 600 100" className="logo-svg">
// // // // //         <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="logo-text">
// // // // //           Sat Academy
// // // // //         </text>
// // // // //       </svg>
// // // // //       <div className="cursor" />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default PageLoader;

// // // // import React from 'react';
// // // // import './PageLoader.css';

// // // // const PageLoader = () => {
// // // //   return (
// // // //     <div className="page-loader">
// // // //       <svg viewBox="0 0 800 200" className="sat-svg">
// // // //         <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="sat-text">
// // // //           Sat Academy
// // // //         </text>
// // // //       </svg>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default PageLoader;


// // // import React from 'react';
// // // import './PageLoader.css';

// // // const PageLoader = () => {
// // //   return (
// // //     <div className="page-loader">
// // //       <svg viewBox="0 0 800 200" className="sat-svg">
// // //         <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="sat-text">
// // //           Sat Academy
// // //         </text>
// // //       </svg>
// // //     </div>
// // //   );
// // // };

// // // export default PageLoader;

// // import React, { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './PageLoader.css';

// // const PageLoader = () => {
// //   const [fadeOut, setFadeOut] = useState(false);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const timer1 = setTimeout(() => setFadeOut(true), 3000);
// //     const timer2 = setTimeout(() => navigate('/'), 4000);

// //     return () => {
// //       clearTimeout(timer1);
// //       clearTimeout(timer2);
// //     };
// //   }, [navigate]);

// //   return (
// //     <div className={`page-loader ${fadeOut ? 'fade-out' : ''}`}>
// //       <svg viewBox="0 0 800 200" className="sat-svg">
// //         <defs>
// //           <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
// //             <stop offset="0%" stopColor="#4f46e5" />
// //             <stop offset="100%" stopColor="#3b82f6" />
// //           </linearGradient>
// //         </defs>
// //         <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="sat-text">
// //           Sat Academy
// //         </text>
// //       </svg>
// //       <p className="tagline">Empowering Skills. Enabling Success.</p>
// //     </div>
// //   );
// // };

// // export default PageLoader;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './PageLoader.css';

// const PageLoader = () => {
//   const [fadeOut, setFadeOut] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer1 = setTimeout(() => setFadeOut(true), 3000);
//     const timer2 = setTimeout(() => navigate('/'), 4000);

//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//     };
//   }, [navigate]);

//   return (
//     <div className={`page-loader ${fadeOut ? 'fade-out' : ''}`}>
//       <svg viewBox="0 0 800 200" className="sat-svg">
//         <defs>
//           <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#4f46e5" />
//             <stop offset="100%" stopColor="#3b82f6" />
//           </linearGradient>
//         </defs>
//         <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="sat-text">
//           Sat Academy
//         </text>
//       </svg>
//       <p className="tagline">Empowering Skills. Enabling Success.</p>
//       <div className="progress-bar">
//         <div className="progress-bar-fill"></div>
//       </div>
//     </div>
//   );
// };

// export default PageLoader;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PageLoader.css';

const PageLoader = ({ showSpinner = false }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 3000);
    const timer2 = setTimeout(() => navigate('/'), 4000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [navigate]);

  return (
    <div className={`page-loader ${fadeOut ? 'fade-out' : ''}`}>
      <svg viewBox="0 0 800 200" className="sat-svg">
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="sat-text">
          Sat Academy
        </text>
      </svg>
      <p className="tagline">Empowering Skills. Enabling Success.</p>

      {showSpinner ? (
        <div className="spinner"></div>
      ) : (
        <div className="progress-bar">
          <div className="progress-bar-fill"></div>
        </div>
      )}
    </div>
  );
};

export default PageLoader;
