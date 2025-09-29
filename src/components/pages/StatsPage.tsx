import React, { useState, useEffect } from 'react';
import { Timer, TrendingUp, Leaf, Droplets } from 'lucide-react';

const StatsPage: React.FC = () => {
  const [daysLeft, setDaysLeft] = useState(15);
  const [progress, setProgress] = useState(65);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 0.1));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Composting Dashboard
          </h1>
          <p className="text-xl text-gray-300">Monitor your smart composting progress in real-time</p>
        </div>

        {/* Main Progress Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Circular Progress */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold text-white mb-8">Composting Progress</h2>
            <div className="relative w-48 h-48 mx-auto mb-6">
              <svg className="transform -rotate-90 w-48 h-48" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-gray-700"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  className="text-emerald-400 transition-all duration-1000 ease-out"
                  style={{
                    strokeDasharray: `${2 * Math.PI * 40}`,
                    strokeDashoffset: `${2 * Math.PI * 40 * (1 - progress / 100)}`
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-3xl font-bold text-emerald-400">{Math.round(progress)}%</span>
                <span className="text-sm text-gray-400">Complete</span>
              </div>
            </div>
            <p className="text-gray-300">Your compost is actively decomposing</p>
          </div>

          {/* Days Left */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold text-white mb-8">Time Remaining</h2>
            <div className="relative mb-6">
              <div className="text-6xl font-bold text-cyan-400 mb-4 animate-pulse">
                {daysLeft}
              </div>
              <div className="text-xl text-gray-300">Days Left</div>
            </div>
            <p className="text-gray-300">Until compost becomes rich manure</p>
            <div className="mt-6 flex justify-center">
              <Timer className="h-8 w-8 text-purple-400 animate-spin" />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Leaf className="h-8 w-8 text-emerald-400" />
              <TrendingUp className="h-5 w-5 text-emerald-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">78°F</div>
            <div className="text-sm text-gray-300">Temperature</div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Droplets className="h-8 w-8 text-cyan-400" />
              <TrendingUp className="h-5 w-5 text-cyan-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">62%</div>
            <div className="text-sm text-gray-300">Humidity</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-8 w-8 bg-purple-400 rounded-full"></div>
              <TrendingUp className="h-5 w-5 text-purple-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">6.8</div>
            <div className="text-sm text-gray-300">pH Level</div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-8 w-8 bg-orange-400 rounded-full animate-pulse"></div>
              <TrendingUp className="h-5 w-5 text-orange-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">Active</div>
            <div className="text-sm text-gray-300">Status</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;