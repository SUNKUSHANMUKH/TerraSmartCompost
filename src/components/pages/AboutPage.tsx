import React from 'react';
import { Cpu, Wifi, Leaf, Shield, Zap, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: 'IoT Monitoring',
      description: 'Advanced sensors continuously monitor temperature, humidity, pH levels, and decomposition progress.',
      color: 'emerald'
    },
    {
      icon: Zap,
      title: 'Smart Automation',
      description: 'Intelligent algorithms automatically adjust conditions for optimal composting efficiency.',
      color: 'cyan'
    },
    {
      icon: Wifi,
      title: 'Remote Control',
      description: 'Monitor and control your composting system from anywhere using our mobile app.',
      color: 'purple'
    },
    {
      icon: Shield,
      title: 'Eco-Friendly',
      description: 'Reduce household waste by up to 90% while creating nutrient-rich compost for your garden.',
      color: 'orange'
    },
    {
      icon: Globe,
      title: 'Sustainable',
      description: 'Help reduce landfill waste and greenhouse gas emissions with smart composting technology.',
      color: 'pink'
    },
    {
      icon: Leaf,
      title: 'Natural Process',
      description: 'Accelerate natural decomposition without harmful chemicals or additives.',
      color: 'green'
    }
  ];

  const colorClasses = {
    emerald: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/20 text-emerald-400',
    cyan: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/20 text-cyan-400',
    purple: 'from-purple-500/20 to-purple-600/10 border-purple-500/20 text-purple-400',
    orange: 'from-orange-500/20 to-orange-600/10 border-orange-500/20 text-orange-400',
    pink: 'from-pink-500/20 to-pink-600/10 border-pink-500/20 text-pink-400',
    green: 'from-green-500/20 to-green-600/10 border-green-500/20 text-green-400'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            About TerraSmart Compost
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary smart composting technology that transforms your organic waste into valuable resources 
            while protecting our planet for future generations.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The Future of Composting</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                TerraSmart Compost represents a breakthrough in sustainable waste management. Our intelligent 
                system combines cutting-edge IoT technology with nature's own decomposition processes to create 
                the most efficient composting solution ever developed.
              </p>
              <p className="text-gray-300 leading-relaxed">
                By monitoring and optimizing every aspect of the composting process, we've reduced decomposition 
                time by 60% while producing higher-quality compost that's perfect for gardens, farms, and 
                urban agriculture projects.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Environmental Impact</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-emerald-400">90%</div>
                      <div className="text-sm text-gray-300">Waste Reduction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">60%</div>
                      <div className="text-sm text-gray-300">Faster Process</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colorClass = colorClasses[feature.color as keyof typeof colorClasses];
              
              return (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${colorClass} backdrop-blur-sm border rounded-xl p-6 hover:scale-105 transition-all duration-300 animate-slideUp`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4">
                    <Icon className={`h-12 w-12 ${feature.color === 'emerald' ? 'text-emerald-400' : 
                      feature.color === 'cyan' ? 'text-cyan-400' : 
                      feature.color === 'purple' ? 'text-purple-400' :
                      feature.color === 'orange' ? 'text-orange-400' :
                      feature.color === 'pink' ? 'text-pink-400' : 'text-green-400'}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Composting Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of eco-conscious users making a difference</p>
          <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;