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
import DataEngineering from './components/courseComponents/DataEngineering';
import DataAnalyst from './components/courseComponents/DataAnalyst';
import DatabaseAdministration from './components/courseComponents/DatabaseAdministration';
import CADDesigning from './components/courseComponents/CADDesigning';
import ArtificialIntelligence from './components/courseComponents/ArtificialIntelligence';
import SAP from './components/courseComponents/SAP';
import ITServiceDeskManager from './components/courseComponents/ITServiceDeskManager';
import DigitalMarketing from './components/courseComponents/DigitalMarketing';
import MainframeTechnologies from './components/courseComponents/MainframeTechnologies';


//admin pages
import AdminDashboard from './components/admin/AdminDashboard';
import ManageStudentPage from './components/admin/ManageStudentsPage';
import MessagesPage from './components/admin/MessagesPage';
import ApplicationsPage from './components/admin/ApplicationsPage';
import HiringRequestsPage from './components/admin/HiringRequestsPage';

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
                <Route path='/courses/data-engineering' element={<DataEngineering />} />
                <Route path='/courses/data-analyst' element={<DataAnalyst />} />
                <Route path='/courses/database-administration' element={<DatabaseAdministration />} />
                <Route path='/courses/cad-designing' element={<CADDesigning />} />
                <Route path='/courses/artificial-intelligence' element={<ArtificialIntelligence />} />
                <Route path='/courses/sap' element={<SAP />} />
                <Route path='/courses/it-service-desk' element={<ITServiceDeskManager />} />
                <Route path='/courses/digital-marketing' element={<DigitalMarketing />} />
                <Route path='/courses/mainframe-technologies' element={<MainframeTechnologies />} />
                <Route path="/teamPage" element={<TeamPage />} />

                <Route path="/admin" element={<AdminDashboard />} />
                <Route path='/admin/MessagesPage' element={<MessagesPage/>}  />
                <Route path='/admin/ManageStudentPage' element={<ManageStudentPage/>}  />
                <Route path='/admin/ApplicationsPage' element={<ApplicationsPage/>}  />
                <Route path='/admin/HiringRequestsPage' element={<HiringRequestsPage/>}  />
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
