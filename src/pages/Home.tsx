import React from 'react';
import { 
  ShieldCheck, 
  QrCode, 
  BarChart3, 
  Zap, 
  ArrowRight,
  FileText,
  LogIn
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

import { useAuth } from '../hooks/useAuth';
import SEO from '../components/SEO';

export default function Home() {
  const { isAuthenticated } = useAuth();
  
  const features = [
    {
      icon: FileText,
      title: "Digital Records",
      desc: "Maintain a centralized digital repository of all physical files."
    },
    {
      icon: Zap,
      title: "QR Tracking",
      desc: "Scan QR codes to instantly update file locations and statuses."
    },
    {
      icon: ShieldCheck,
      title: "Secure History",
      desc: "Keep an immutable log of all file movements and officer handoffs."
    },
    {
      icon: BarChart3,
      title: "Analytics",
      desc: "Monitor department efficiency and identify bottlenecks."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF6]">
      <SEO 
        title="Home"
        description="Smart File Movement Tracking System for engineering departments. Track physical files in real-time using QR codes."
        keywords="file tracking, QR tracking, engineering management, document tracking"
      />
      {!isAuthenticated && (
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-400 p-2 rounded-lg shadow-sm">
              <FileText className="text-black w-6 h-6" />
            </div>
            <span className="font-black text-xl tracking-tight text-black">SMART TRACK</span>
          </div>
          <Link 
            to="/login" 
            className="bg-yellow-400 text-black px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-yellow-300 transition-all flex items-center gap-2 shadow-sm"
          >
            <LogIn className="w-4 h-4" /> Login
          </Link>
        </nav>
      )}

      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20", !isAuthenticated ? "pt-12" : "pt-20")}>
        {/* Hero Section */}
        <section className="text-center space-y-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-1.5 rounded-full text-xs font-bold border border-yellow-100"
          >
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            System Online & Ready
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#0F172A] tracking-tight leading-[0.9] max-w-4xl mx-auto"
          >
            Smart File <span className="text-yellow-500">Movement</span> Tracking
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
          >
            A professional admin dashboard for tracking file movements across departments using QR codes and real-time status updates.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            {isAuthenticated ? (
              <Link 
                to="/dashboard" 
                className="bg-yellow-400 text-black px-10 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-yellow-300 transition-all shadow-xl shadow-yellow-400/20 group"
              >
                Go to Dashboard <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <Link 
                to="/login" 
                className="bg-yellow-400 text-black px-10 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-yellow-300 transition-all shadow-xl shadow-yellow-400/20 group"
              >
                Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-yellow-50 transition-colors">
                <feature.icon className="w-8 h-8 text-gray-400 group-hover:text-yellow-500 transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-[#0F172A] mb-4">{feature.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Department Coverage - Simplified to keep focus on the image style */}
        <section className="mt-32 bg-white rounded-[3rem] p-12 lg:p-20 border border-gray-100 shadow-sm text-center">
          <h2 className="text-4xl font-black text-[#0F172A] mb-6">Departmental Coverage</h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto mb-12">
            Seamlessly integrated across all major engineering and technical departments.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Electrical", "Mechanical", "Civil", "CSE", "AI & DS", "IOT", "Robotics"
            ].map((dept) => (
              <div key={dept} className="bg-gray-50 text-gray-700 px-6 py-3 rounded-2xl font-bold text-sm border border-gray-100">
                {dept}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
