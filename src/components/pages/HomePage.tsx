import React from 'react';
import { ArrowRight, Leaf, Recycle, Zap, User, Bell, TrendingUp, Calendar, Thermometer, Droplets, Activity, Award, Settings, Plus } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const recentActivities = [
    { id: 1, action: 'Added organic waste', amount: '2.3 kg', time: '2 hours ago', icon: Plus, color: 'emerald' },
    { id: 2, action: 'Temperature optimized', value: '78°F', time: '4 hours ago', icon: Thermometer, color: 'orange' },
    { id: 3, action: 'Moisture adjusted', value: '62%', time: '6 hours ago', icon: Droplets, color: 'cyan' },
    { id: 4, action: 'Compost turned', cycles: '3 cycles', time: '1 day ago', icon: Recycle, color: 'purple' }
  ];

  const quickStats = [
    { label: 'Total Waste Processed', value: '127.5 kg', change: '+12%', icon: Recycle, color: 'emerald' },
    { label: 'CO₂ Saved', value: '89.2 kg', change: '+8%', icon: Leaf, color: 'green' },
    { label: 'Compost Produced', value: '45.8 kg', change: '+15%', icon: Award, color: 'purple' },
    { label: 'Energy Efficiency', value: '94%', change: '+3%', icon: Zap, color: 'cyan' }
  ];

  const alerts = [
    { id: 1, type: 'success', message: 'Compost batch #23 ready for harvest!', time: '1 hour ago' },
    { id: 2, type: 'warning', message: 'Temperature slightly high - auto-adjusting', time: '3 hours ago' },
    { id: 3, type: 'info', message: 'Weekly maintenance scheduled for tomorrow', time: '1 day ago' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-emerald-500/10 animate-pulse"></div>
      
      {/* Dashboard Header */}
      <div className="relative pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div className="mb-6 lg:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold mb-2 animate-slideUp">
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Welcome back, Alex! 🌱
                </span>
              </h1>
              <p className="text-lg text-gray-300 animate-slideUp animation-delay-300">
                Your TerraSmart system is running optimally. Here's your composting overview.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 animate-slideUp animation-delay-600">
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <span className="text-white font-medium">Alex Chen</span>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {quickStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${
                    stat.color === 'emerald' ? 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/20' :
                    stat.color === 'green' ? 'from-green-500/20 to-green-600/10 border-green-500/20' :
                    stat.color === 'purple' ? 'from-purple-500/20 to-purple-600/10 border-purple-500/20' :
                    'from-cyan-500/20 to-cyan-600/10 border-cyan-500/20'
                  } backdrop-blur-sm border rounded-xl p-6 hover:scale-105 transition-all duration-300 animate-slideUp`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`h-8 w-8 ${
                      stat.color === 'emerald' ? 'text-emerald-400' :
                      stat.color === 'green' ? 'text-green-400' :
                      stat.color === 'purple' ? 'text-purple-400' :
                      'text-cyan-400'
                    }`} />
                    <div className={`text-sm font-medium px-2 py-1 rounded-full ${
                      stat.change.startsWith('+') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {stat.change}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="relative px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Current Composting Status */}
            <div className="lg:col-span-2 space-y-6">
              {/* Active Composting Units */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-white">Active Composting Units</h2>
                  <button
                    onClick={() => onNavigate('stats')}
                    className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center space-x-1 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-white">Unit A - Kitchen Waste</h3>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Progress</span>
                        <span className="text-emerald-400">68%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-2 rounded-full" style={{ width: '68%' }}></div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>12 days remaining</span>
                        <span>78°F</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-white">Unit B - Garden Waste</h3>
                      <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Progress</span>
                        <span className="text-cyan-400">45%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>18 days remaining</span>
                        <span>75°F</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h2 className="text-2xl font-semibold text-white mb-6">Recent Activity</h2>
                <div className="space-y-4">
                  {recentActivities.map((activity) => {
                    const Icon = activity.icon;
                    return (
                      <div key={activity.id} className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                        <div className={`p-2 rounded-full ${
                          activity.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' :
                          activity.color === 'orange' ? 'bg-orange-500/20 text-orange-400' :
                          activity.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                          'bg-purple-500/20 text-purple-400'
                        }`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-white font-medium">{activity.action}</span>
                            <span className="text-gray-400 text-sm">{activity.time}</span>
                          </div>
                          <div className="text-gray-300 text-sm">
                            {activity.amount || activity.value || activity.cycles}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* System Alerts */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">System Alerts</h2>
                <div className="space-y-3">
                  {alerts.map((alert) => (
                    <div key={alert.id} className={`p-3 rounded-lg border ${
                      alert.type === 'success' ? 'bg-green-500/10 border-green-500/20' :
                      alert.type === 'warning' ? 'bg-yellow-500/10 border-yellow-500/20' :
                      'bg-blue-500/10 border-blue-500/20'
                    }`}>
                      <div className="flex items-start space-x-2">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          alert.type === 'success' ? 'bg-green-400' :
                          alert.type === 'warning' ? 'bg-yellow-400' :
                          'bg-blue-400'
                        }`}></div>
                        <div className="flex-1">
                          <p className="text-white text-sm">{alert.message}</p>
                          <p className="text-gray-400 text-xs mt-1">{alert.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <button 
                    onClick={() => onNavigate('stats')}
                    className="w-full bg-gradient-to-r from-emerald-500/20 to-emerald-600/10 hover:from-emerald-500/30 hover:to-emerald-600/20 border border-emerald-500/20 text-emerald-400 py-3 px-4 rounded-lg transition-all duration-300 flex items-center space-x-2"
                  >
                    <Activity className="h-4 w-4" />
                    <span>View Full Stats</span>
                  </button>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500/20 to-cyan-600/10 hover:from-cyan-500/30 hover:to-cyan-600/20 border border-cyan-500/20 text-cyan-400 py-3 px-4 rounded-lg transition-all duration-300 flex items-center space-x-2">
                    <Plus className="h-4 w-4" />
                    <span>Add Waste</span>
                  </button>
                  
                  <button className="w-full bg-gradient-to-r from-purple-500/20 to-purple-600/10 hover:from-purple-500/30 hover:to-purple-600/20 border border-purple-500/20 text-purple-400 py-3 px-4 rounded-lg transition-all duration-300 flex items-center space-x-2">
                    <Settings className="h-4 w-4" />
                    <span>System Settings</span>
                  </button>
                </div>
              </div>

              {/* Environmental Impact */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">This Month's Impact</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Leaf className="h-4 w-4 text-green-400" />
                      <span className="text-gray-300 text-sm">CO₂ Reduced</span>
                    </div>
                    <span className="text-green-400 font-semibold">23.4 kg</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Recycle className="h-4 w-4 text-cyan-400" />
                      <span className="text-gray-300 text-sm">Waste Diverted</span>
                    </div>
                    <span className="text-cyan-400 font-semibold">45.2 kg</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-purple-400" />
                      <span className="text-gray-300 text-sm">Compost Created</span>
                    </div>
                    <span className="text-purple-400 font-semibold">18.7 kg</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-lg border border-emerald-500/20">
                  <div className="text-center">
                    <div className="text-2xl mb-1">🌍</div>
                    <div className="text-emerald-400 font-semibold text-sm">Eco Champion Level</div>
                    <div className="text-gray-300 text-xs">Keep up the great work!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;