import React from 'react';
import { 
  ShieldCheck, 
  QrCode, 
  BarChart3, 
  Users, 
  Zap, 
  Smartphone,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: QrCode,
      title: "QR-Based Tracking",
      desc: "Each file is assigned a unique QR code for instant identification and movement logging."
    },
    {
      icon: ShieldCheck,
      title: "Secure Authentication",
      desc: "Protected admin access ensures that only authorized personnel can update file records."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      desc: "Visualize file distribution across departments and monitor processing timelines."
    },
    {
      icon: Users,
      title: "Departmental Workflow",
      desc: "Seamlessly track files as they move between Engineering, CS, and specialized AI departments."
    },
    {
      icon: Zap,
      title: "Instant Updates",
      desc: "Log status changes, remarks, and officer assignments with a single scan or click."
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      desc: "Fully responsive design allows officers to scan and update files using any mobile device."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-16 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black rounded-[3rem] p-8 lg:p-16 text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-yellow-400/20">
              <Zap className="w-3 h-3" /> System Version 2.0
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-none">
              Smart File <span className="text-yellow-400">Tracking</span> System
            </h1>
            <p className="text-gray-400 text-lg font-medium max-w-lg leading-relaxed">
              A professional-grade solution for monitoring physical file movements across engineering departments using advanced QR technology and real-time analytics.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/add-file" 
                className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/20"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/scan-qr" 
                className="bg-white/10 text-white px-8 py-4 rounded-2xl font-black hover:bg-white/20 transition-all border border-white/10"
              >
                Scan Now
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-1 rounded-[2.5rem] rotate-3 shadow-2xl">
              <div className="bg-black rounded-[2.3rem] p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center">
                    <QrCode className="text-black w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-500 uppercase tracking-widest">Tracking Active</p>
                    <p className="text-xl font-black">FILE-2024-ENG</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-2 bg-white/5 rounded-full w-full" />
                  ))}
                  <div className="h-2 bg-yellow-400/50 rounded-full w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">System Capabilities</h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto">
            Designed for high-efficiency environments where file security and movement visibility are paramount.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="bg-gray-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors">
                <feature.icon className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Department Coverage */}
      <section className="bg-yellow-400 rounded-[3rem] p-8 lg:p-16 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 border-4 border-black rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-black rounded-full" />
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-md space-y-6 text-center lg:text-left">
            <h2 className="text-4xl font-black text-black tracking-tight leading-none">
              Specialized Departmental Support
            </h2>
            <p className="text-black/70 font-bold">
              Customized workflows for Engineering and Computer Science departments, including AI, IoT, and Robotics specializations.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-xl">
            {[
              "Electrical", "Mechanical", "Civil", "CSE", "AI & DS", "IOT", "Robotics"
            ].map((dept) => (
              <div key={dept} className="bg-black text-white px-6 py-3 rounded-2xl font-black text-sm shadow-xl shadow-black/10">
                {dept}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Guide */}
      <section className="bg-white rounded-[3rem] p-8 lg:p-16 border border-gray-100 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">How it Works</h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Register File", desc: "Enter file details manually and assign a unique ID." },
                { step: "02", title: "Generate QR", desc: "The system creates a QR code containing all metadata." },
                { step: "03", title: "Track Movement", desc: "Scan the QR at every checkpoint to update status." },
                { step: "04", title: "Analyze Data", desc: "View full history and analytics on the dashboard." }
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <span className="text-4xl font-black text-yellow-400/30">{item.step}</span>
                  <div>
                    <h4 className="font-black text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 rounded-[2rem] p-8 flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center text-white">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black">System Ready</h3>
            </div>
            <p className="text-gray-500 font-medium">
              The Smart File Tracking System is currently active and monitoring all departmental file movements. 
            </p>
            <div className="pt-4 space-y-3">
              <div className="flex items-center justify-between text-sm font-bold">
                <span className="text-gray-400">Database Status</span>
                <span className="text-green-500">Connected</span>
              </div>
              <div className="flex items-center justify-between text-sm font-bold">
                <span className="text-gray-400">Scanner Engine</span>
                <span className="text-green-500">Active</span>
              </div>
              <div className="flex items-center justify-between text-sm font-bold">
                <span className="text-gray-400">Security Layer</span>
                <span className="text-green-500">Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
