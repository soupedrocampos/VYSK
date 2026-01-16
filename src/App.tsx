import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Sessions = lazy(() => import('./pages/Sessions'));

// Loading Component
const PageLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center text-white">
    <div className="w-8 h-8 border-4 border-human-green/30 border-t-human-green rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sessions" element={<Sessions />} />
          </Routes>
        </Suspense>
      </Router>
    </LanguageProvider>
  )
}

export default App

