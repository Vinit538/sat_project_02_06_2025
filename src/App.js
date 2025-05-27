
// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import PageLoader from './components/PageLoader'; // 👈
// import Navbar from './components/navbarComponents/Navbar';
// import Footer from './components/Footer';
// import ScrollToTop from './ScrollToTop';
// import ScrollIndicator from './ScrollIndicator';

// // Pages
// import Home from './components/Home';
// import SatLogin from './components/SatLogin';
// import HireTalent from './components/PagesComponents/HireTalent';
// import ContactUs from './components/PagesComponents/ContactUs';
// import Career from './components/PagesComponents/Career';
// import AboutUs from './components/PagesComponents/AboutUs';
// import Courses from './components/PagesComponents/Courses';
// import Projects from './components/PagesComponents/Projects';
// import Internships from './components/PagesComponents/Internships';
// import JavaFullStack from './components/courseComponents/JavaFullStack';
// // ... others

// const AppContent = () => {
//   const location = useLocation();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate a delay (e.g., fetching page data)
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1000); // 1s delay

//     return () => clearTimeout(timer);
//   }, [location]);

//   return (
//     <>
//       {loading && <PageLoader />}
//       {!loading && (
//         <>
//           <ScrollIndicator color="#4f46e5" />
//           <Navbar />
//           <ScrollToTop />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/satLogin" element={<SatLogin />} />
//             <Route path="/hireTalent" element={<HireTalent />} />
//             <Route path='/contactUs' element={<ContactUs />} />
//             <Route path='/career' element={<Career />} />
//             <Route path='/aboutUs' element={<AboutUs />} />
//             <Route path='/courses' element={<Courses />} />
//             <Route path='/projects' element={<Projects />} />
//             <Route path='/internships' element={<Internships />} />
//             <Route path="/courses/java-fullstack" element={<JavaFullStack />} />
//           </Routes>
//           <Footer />
//         </>
//       )}
//     </>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;


// src/App.js
import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import PageLoader from './components/PageLoader';
import Navbar from './components/navbarComponents/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';
import ScrollIndicator from './ScrollIndicator';

// Regular Pages
import Home from './components/Home';
import SatLogin from './components/SatLogin';
import HireTalent from './components/PagesComponents/HireTalent';
import ContactUs from './components/PagesComponents/ContactUs';
import Career from './components/PagesComponents/Career';
import AboutUs from './components/PagesComponents/AboutUs';
import Projects from './components/PagesComponents/Projects';
import Internships from './components/PagesComponents/Internships';
import JavaFullStack from './components/courseComponents/JavaFullStack';
import TeamPage from './components/PagesComponents/TeamPage';
// import Courses from './components/PagesComponents/Courses';
// ✅ Lazy load Courses page
const Courses = lazy(() => import('./components/PagesComponents/Courses'));

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
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
          <AnimatePresence mode="wait">
            <Suspense fallback={<PageLoader />}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/satLogin" element={<SatLogin />} />
                <Route path="/hireTalent" element={<HireTalent />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/career" element={<Career />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/courses" element={<Courses />} /> {/* 👈 Lazy loaded */}
                <Route path="/projects" element={<Projects />} />
                <Route path="/internships" element={<Internships />} />
                <Route path="/courses/java-fullstack" element={<JavaFullStack />} />
                <Route path="/teamPage" element={<TeamPage />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
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
    {/* <PageLoader /> */}
    </Router>
  );
}

export default App;
