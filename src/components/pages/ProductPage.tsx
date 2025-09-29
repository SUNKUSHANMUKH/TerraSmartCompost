import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const ProductPage: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$299',
      period: 'one-time',
      description: 'Perfect for small households',
      features: [
        'Smart monitoring sensors',
        'Mobile app access',
        'Basic analytics',
        '1-year warranty',
        'Email support'
      ],
      popular: false,
      color: 'emerald'
    },
    {
      name: 'Premium',
      price: '$499',
      period: 'one-time',
      description: 'Ideal for larger families',
      features: [
        'Advanced IoT monitoring',
        'AI-powered optimization',
        'Real-time notifications',
        'Advanced analytics',
        '2-year warranty',
        'Priority support',
        'Auto-mixing system'
      ],
      popular: true,
      color: 'cyan'
    },
    {
      name: 'Family Pack',
      price: '$799',
      period: 'one-time',
      description: 'Commercial-grade solution',
      features: [
        'Multi-unit management',
        'Enterprise dashboard',
        'Custom integrations',
        'Advanced reporting',
        '3-year warranty',
        '24/7 support',
        'Professional installation',
        'Training included'
      ],
      popular: false,
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select the perfect TerraSmart Compost system for your needs and start your sustainable journey today.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">TerraSmart Compost System</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our revolutionary smart composting system combines elegant design with powerful technology. 
                The sleek, modern unit fits seamlessly into any environment while delivering exceptional 
                composting performance.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/20">
                  <div className="text-2xl font-bold text-emerald-400">15L</div>
                  <div className="text-sm text-gray-300">Capacity</div>
                </div>
                <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/20">
                  <div className="text-2xl font-bold text-cyan-400">3-4</div>
                  <div className="text-sm text-gray-300">Weeks</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🌱</div>
                  <div className="text-xl text-white font-semibold">TerraSmart Unit</div>
                  <div className="text-gray-300">Smart Composting System</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                New Technology
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:bg-white/10 ${
                plan.popular ? 'ring-2 ring-cyan-400/50 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${
                    plan.color === 'emerald' ? 'text-emerald-400' :
                    plan.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'
                  }`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className={`h-5 w-5 flex-shrink-0 ${
                      plan.color === 'emerald' ? 'text-emerald-400' :
                      plan.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'
                    }`} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white shadow-lg shadow-cyan-500/25'
                    : plan.color === 'emerald'
                    ? 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30'
                    : plan.color === 'purple'
                    ? 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 border border-purple-500/30'
                    : 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/30'
                }`}
              >
                {plan.popular ? (
                  <span className="flex items-center justify-center space-x-2">
                    <Zap className="h-5 w-5" />
                    <span>Get Started</span>
                  </span>
                ) : (
                  'Choose Plan'
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">All plans include free shipping and 30-day money-back guarantee</p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <span>🚚 Free Shipping</span>
            <span>💰 30-Day Guarantee</span>
            <span>🔒 Secure Payment</span>
            <span>🌱 Eco-Friendly</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;