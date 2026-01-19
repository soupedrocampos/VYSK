import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
// import HTMLInspector from './components/HTMLInspector';

// Pages
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Home2 from './pages/Home2';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import SEOPage from './pages/SEOPage';
import SaaSPage from './pages/SaaSPage';
import AutomationPage from './pages/AutomationPage';
import WorldpackersPage from './pages/WorldpackersPage';
import SalesStrategyDemo from './pages/SalesStrategyDemo';
import Diagnostic from './pages/Diagnostic';
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminCRM from './pages/admin/AdminCRM';
import AdminContent from './pages/admin/AdminContent';
import AdminDiagnostics from './pages/admin/AdminDiagnostics';
import AdminPages from './pages/admin/AdminPages';
import { AdminProvider } from './context/AdminContext';
import { LeadModalProvider } from './context/LeadModalContext';
import LeadModal from './components/LeadModal';

function App() {
  const location = useLocation();

  return (
    <HelmetProvider>
      <AdminProvider>
        <LeadModalProvider>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/v2" element={<Home2 />} />

              {/* Blog Routes */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />

              {/* Landing Pages */}
              <Route path="/seo" element={<SEOPage />} />
              <Route path="/saas" element={<SaaSPage />} />
              <Route path="/automacao" element={<AutomationPage />} />
              <Route path="/worldpackers" element={<WorldpackersPage />} />
              <Route path="/estrategia" element={<SalesStrategyDemo />} />
              <Route path="/diagnostico" element={<Diagnostic />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminLogin />} />

              {/* Protected Admin Routes */}
              <Route element={<AdminLayout />}>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/crm" element={<AdminCRM />} />
                <Route path="/admin/content" element={<AdminContent />} />
                <Route path="/admin/pages" element={<AdminPages />} />
                <Route path="/admin/diagnostics" element={<AdminDiagnostics />} />
              </Route>
            </Routes>
          </AnimatePresence>
          <LeadModal />
        </LeadModalProvider>
      </AdminProvider>
      {/* HTML Element Inspector - Development Tool - REMOVED */}
      {/* <HTMLInspector /> */}
    </HelmetProvider>
  );
}

export default App;
