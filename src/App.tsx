import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import HomePage from './components/pages/HomePage';
import StatsPage from './components/pages/StatsPage';
import AboutPage from './components/pages/AboutPage';
import ProductPage from './components/pages/ProductPage';
import LoginPage from './components/pages/LoginPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'stats':
        return <StatsPage />;
      case 'about':
        return <AboutPage />;
      case 'product':
        return <ProductPage />;
      case 'login':
        return <LoginPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      <FloatingElements />
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="relative z-10">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;