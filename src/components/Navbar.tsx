import React from 'react';
import { Leaf, BarChart3, Info, ShoppingCart, User } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Leaf },
    { id: 'stats', label: 'Stats', icon: BarChart3 },
    { id: 'about', label: 'About', icon: Info },
    { id: 'product', label: 'Product', icon: ShoppingCart },
    { id: 'login', label: 'Login', icon: User },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-emerald-400 animate-pulse" />
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              TerraSmart
            </span>
          </div>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 ${
                  currentPage === id
                    ? 'bg-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/25'
                    : 'text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button 
              className="text-gray-300 hover:text-emerald-400 transition-colors"
              onClick={() => {/* Mobile menu toggle */}}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;