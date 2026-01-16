import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import HTMLInspector from './components/HTMLInspector';

// Pages
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import SEOPage from './pages/SEOPage';
import SaaSPage from './pages/SaaSPage';
import AutomationPage from './pages/AutomationPage';
import WorldpackersPage from './pages/WorldpackersPage';
import SalesStrategyDemo from './pages/SalesStrategyDemo';

function App() {
  const location = useLocation();

  return (
    <HelmetProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />

          {/* Blog Routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* Landing Pages */}
          <Route path="/seo" element={<SEOPage />} />
          <Route path="/saas" element={<SaaSPage />} />
          <Route path="/automacao" element={<AutomationPage />} />
          <Route path="/worldpackers" element={<WorldpackersPage />} />
          <Route path="/estrategia" element={<SalesStrategyDemo />} />
        </Routes>
      </AnimatePresence>

      {/* HTML Element Inspector - Development Tool */}
      <HTMLInspector />
    </HelmetProvider>
  );
}

export default App;
