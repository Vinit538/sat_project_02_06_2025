// // import logo from './logo.svg';
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';


// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Footer from './components/Footer';
// import SatLogin from './components/SatLogin';
// import HireTalent from './components/HireTalent';
// import ContactUs from './components/ContactUs';
// import Career from './components/Career';
// import AboutUs from './components/AboutUs';
// import Courses from './components/Courses';
// import Projects from './components/Projects';
// import Internships from './components/Internships';

// import ScrollToTop from "./ScrollToTop";
// import ScrollIndicator from './ScrollIndicator';



// function App() {


//   const [isOpen, setIsOpen] = useState(false);


//   return (
//     <Router>
//       {/* <ScrollIndicator color="#4f46e5" /> */}
//       <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
//       <ScrollToTop />
//       <Routes>
//         <Route path='/' element={<Home isOpen={isOpen} />} />
//         <Route path='/satLogin' element={<SatLogin />} />
//         <Route path='/hireTalent' element={<HireTalent />} />
//         <Route path='/contactUs' element={<ContactUs />} />
//         <Route path='/career' element={<Career />} />
//         <Route path='/aboutUs' element={<AboutUs />} />
//         <Route path='/courses' element={<Courses />} />
//         <Route path='/projects' element={<Projects />} />
//         <Route path='/internships' element={<Internships />} />
//       </Routes>
//       {/* <Details /> */}
//       <Footer />

//     </Router>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import PageLoader from './components/PageLoader'; // 👈
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';
import ScrollIndicator from './ScrollIndicator';

// Pages
import Home from './components/Home';
import SatLogin from './components/SatLogin';
import HireTalent from './components/HireTalent';
import ContactUs from './components/ContactUs';
import Career from './components/Career';
import AboutUs from './components/AboutUs';
import Courses from './components/Courses';
import Projects from './components/Projects';
import Internships from './components/Internships';
// ... others

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (e.g., fetching page data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1s delay

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <PageLoader />}
      {!loading && (
        <>
          <ScrollIndicator color="#4f46e5" />
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/satLogin" element={<SatLogin />} />
            <Route path="/hireTalent" element={<HireTalent />} />
            <Route path='/contactUs' element={<ContactUs />} />
            <Route path='/career' element={<Career />} />
            <Route path='/aboutUs' element={<AboutUs />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/internships' element={<Internships />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
