import ProtectedRoute from './ProtectedRoute'; // make sure path is correct

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
                {/* Public Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/satLogin" element={<SatLogin />} />
                <Route path="/hireTalent" element={<HireTalent />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/career" element={<Career />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/internships" element={<Internships />} />
                <Route path="/teamPage" element={<TeamPage />} />
                <Route path="/unauthorized" element={<UnauthorizedPage />} />

                {/* Course Pages */}
                <Route path="/courses/java-fullstack" element={<JavaFullStack />} />
                <Route path="/courses/data-engineering" element={<DataEngineering />} />
                <Route path="/courses/data-analyst" element={<DataAnalyst />} />
                <Route path="/courses/database-administration" element={<DatabaseAdministration />} />
                <Route path="/courses/cad-designing" element={<CADDesigning />} />
                <Route path="/courses/artificial-intelligence" element={<ArtificialIntelligence />} />
                <Route path="/courses/sap" element={<SAP />} />
                <Route path="/courses/it-service-desk" element={<ITServiceDeskManager />} />
                <Route path="/courses/digital-marketing" element={<DigitalMarketing />} />
                <Route path="/courses/mainframe-technologies" element={<MainframeTechnologies />} />

                {/* Protected Admin Pages */}
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute requiredRole="admin">
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/MessagesPage"
                  element={
                    <ProtectedRoute requiredRole="admin">
                      <MessagesPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/ManageStudentPage"
                  element={
                    <ProtectedRoute requiredRole="admin">
                      <ManageStudentPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/ApplicationsPage"
                  element={
                    <ProtectedRoute requiredRole="admin">
                      <ApplicationsPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/HiringRequestsPage"
                  element={
                    <ProtectedRoute requiredRole="admin">
                      <HiringRequestsPage />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </Suspense>
          </AnimatePresence>
          <Footer />
        </>
      )}
    </>
  );
};
