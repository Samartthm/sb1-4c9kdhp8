import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ThumbnailGrid } from './components/ThumbnailGrid';
import { Categories } from './pages/Categories';
import { Pricing } from './pages/Pricing';
import { ThumbnailDetail } from './pages/ThumbnailDetail';

function HomePage() {
  return (
    <>
      <Hero />
      <ThumbnailGrid />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/thumbnail/:id" element={<ThumbnailDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;