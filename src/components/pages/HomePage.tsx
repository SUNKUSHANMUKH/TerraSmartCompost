import React from 'react';
import { ArrowRight, Leaf, Recycle, Zap } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-emerald-500/10 animate-pulse"></div>
      
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slideUp">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Turn Waste into Wealth
              </span>
              <span className="block text-4xl md:text-6xl mt-2">🌱</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-slideUp animation-delay-300">
              Smart composting that saves time, money, and the planet.
            </p>

            <button
              onClick={() => onNavigate('stats')}
              className="group bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 animate-slideUp animation-delay-600"
            >
              Check Composting Stats
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Preview */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 animate-slideUp animation-delay-800">
              <div className="text-emerald-400 mb-4">
                <Leaf className="h-12 w-12 group-hover:animate-spin transition-all duration-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Smart Monitoring</h3>
              <p className="text-gray-300">IoT sensors track temperature, humidity, and decomposition progress in real-time.</p>
            </div>

            <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 animate-slideUp animation-delay-1000">
              <div className="text-cyan-400 mb-4">
                <Zap className="h-12 w-12 group-hover:animate-pulse transition-all duration-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Automated Process</h3>
              <p className="text-gray-300">Intelligent automation optimizes composting conditions for maximum efficiency.</p>
            </div>

            <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 animate-slideUp animation-delay-1200">
              <div className="text-purple-400 mb-4">
                <Recycle className="h-12 w-12 group-hover:animate-bounce transition-all duration-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Eco-Friendly</h3>
              <p className="text-gray-300">Reduce waste by 90% and create nutrient-rich compost for your garden.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;